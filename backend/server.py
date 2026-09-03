from dotenv import load_dotenv
from pathlib import Path

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

from fastapi import FastAPI, APIRouter, HTTPException, Request, Depends
from fastapi.responses import PlainTextResponse
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import io
import csv
import asyncio
import logging
import uuid
import bcrypt
import jwt
from datetime import datetime, timezone, timedelta
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# SendGrid config
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', '')
CONTACT_RECIPIENT = os.environ.get('CONTACT_RECIPIENT', SENDER_EMAIL)

# Auth config
JWT_SECRET = os.environ['JWT_SECRET']
JWT_ALGORITHM = "HS256"
ADMIN_EMAIL = os.environ.get('ADMIN_EMAIL', 'admin@fulcrum.it')
ADMIN_PASSWORD = os.environ.get('ADMIN_PASSWORD', 'admin123')

app = FastAPI()
api_router = APIRouter(prefix="/api")


@app.get("/health")
async def health_check():
    return {"status": "ok"}

logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)


# ---------------- Models ----------------
class ContactRequest(BaseModel):
    nome: str = Field(..., min_length=1, max_length=120)
    azienda: str = Field(..., min_length=1, max_length=160)
    email: EmailStr
    dimensione: str = Field(..., min_length=1, max_length=80)
    argomento: str = Field("", max_length=120)
    messaggio: str = Field("", max_length=4000)
    privacy: bool
    marketing: bool = False
    lang: str = "it"
    origine: str = Field("", max_length=500)
    website: str = ""          # honeypot — must stay empty
    elapsed_ms: int = 0        # time on form before submit

class ContactResponse(BaseModel):
    success: bool
    emailed: bool
    message: str

class LoginRequest(BaseModel):
    email: EmailStr
    password: str

class Lead(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str
    nome: str
    azienda: str
    email: str
    dimensione: str
    argomento: str = ""
    messaggio: str = ""
    marketing: bool = False
    lang: str = "it"
    created_at: str


# ---------------- Auth helpers ----------------
def hash_password(password: str) -> str:
    return bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")

def verify_password(plain: str, hashed: str) -> bool:
    return bcrypt.checkpw(plain.encode("utf-8"), hashed.encode("utf-8"))

def create_access_token(email: str) -> str:
    payload = {"sub": email, "exp": datetime.now(timezone.utc) + timedelta(hours=12), "type": "access"}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALGORITHM)

async def get_current_admin(request: Request) -> dict:
    auth = request.headers.get("Authorization", "")
    if not auth.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Not authenticated")
    token = auth[7:]
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALGORITHM])
        if payload.get("type") != "access":
            raise HTTPException(status_code=401, detail="Invalid token type")
        user = await db.users.find_one({"email": payload["sub"]}, {"_id": 0, "password_hash": 0})
        if not user:
            raise HTTPException(status_code=401, detail="User not found")
        return user
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="Token expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="Invalid token")


# ---------------- Email helpers ----------------
def _send_via_sendgrid(to_email: str, subject: str, html: str) -> bool:
    message = Mail(from_email=SENDER_EMAIL, to_emails=to_email, subject=subject, html_content=html)
    sg = SendGridAPIClient(SENDGRID_API_KEY)
    resp = sg.send(message)
    return 200 <= resp.status_code < 300

def _notification_html(d: ContactRequest) -> str:
    return f"""
    <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
      <h2 style="color:#5B3DF5; margin-bottom:16px;">Nuova richiesta dal sito Fulcrum</h2>
      <table style="border-collapse:collapse; width:100%; font-size:15px;">
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Nome</td><td style="padding:6px 0;"><strong>{d.nome}</strong></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Azienda</td><td style="padding:6px 0;"><strong>{d.azienda}</strong></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Email</td><td style="padding:6px 0;"><a href="mailto:{d.email}" style="color:#5B3DF5;">{d.email}</a></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Dimensione</td><td style="padding:6px 0;">{d.dimensione}</td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Argomento</td><td style="padding:6px 0;">{d.argomento or "—"}</td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Marketing</td><td style="padding:6px 0;">{"Sì" if d.marketing else "No"}</td></tr>
      </table>
      <div style="border:1px solid rgba(0,0,0,0.1); border-radius:16px; padding:16px; margin-top:16px;">
        <p style="margin:0; color:rgba(0,0,0,0.6); font-size:13px;">Messaggio</p>
        <p style="margin:8px 0 0; white-space:pre-wrap;">{d.messaggio}</p>
      </div>
    </div>
    """

def _confirmation_html(d: ContactRequest) -> str:
    if d.lang == "en":
        return f"""
        <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
          <h2 style="color:#5B3DF5;">Thanks, {d.nome}.</h2>
          <p>We've received your message and will get back to you within one business day with a concrete proposal.</p>
          <p style="color:rgba(0,0,0,0.6);">— The Fulcrum team · Driving AI Adoption</p>
        </div>"""
    return f"""
    <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
      <h2 style="color:#5B3DF5;">Grazie, {d.nome}.</h2>
      <p>Abbiamo ricevuto il tuo messaggio e ti ricontattiamo entro un giorno lavorativo con una proposta concreta.</p>
      <p style="color:rgba(0,0,0,0.6);">— Il team Fulcrum · Driving AI Adoption</p>
    </div>"""

async def _send_emails(d: ContactRequest) -> bool:
    if not SENDGRID_API_KEY or not SENDER_EMAIL:
        logger.warning("SendGrid not configured; email skipped.")
        return False
    try:
        notified = await asyncio.to_thread(_send_via_sendgrid, CONTACT_RECIPIENT, f"Nuova richiesta · {d.azienda}", _notification_html(d))
    except Exception as e:
        logger.error(f"SendGrid notification failed: {e}")
        return False
    try:
        subject = "We received your message · Fulcrum" if d.lang == "en" else "Abbiamo ricevuto il tuo messaggio · Fulcrum"
        await asyncio.to_thread(_send_via_sendgrid, str(d.email), subject, _confirmation_html(d))
    except Exception as e:
        logger.error(f"SendGrid confirmation failed: {e}")
    return notified


# ---------------- Public routes ----------------
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(data: ContactRequest):
    if not data.privacy:
        raise HTTPException(status_code=422, detail="Privacy consent is required.")

    # Anti-bot: honeypot filled or submitted implausibly fast -> silently accept, drop
    if data.website.strip() or data.elapsed_ms < 1500:
        logger.info("Spam submission dropped (honeypot/time).")
        return ContactResponse(success=True, emailed=False, message="ok")

    doc = {
        "id": str(uuid.uuid4()),
        "nome": data.nome, "azienda": data.azienda, "email": str(data.email),
        "dimensione": data.dimensione, "messaggio": data.messaggio,
        "argomento": data.argomento, "origine": data.origine,
        "privacy": data.privacy, "marketing": data.marketing, "lang": data.lang,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_leads.insert_one(doc)
    emailed = await _send_emails(data)
    return ContactResponse(success=True, emailed=emailed, message="Richiesta inviata" if emailed else "Richiesta ricevuta")


# ---------------- Auth routes ----------------
@api_router.post("/auth/login")
async def login(body: LoginRequest, request: Request):
    email = body.email.lower()
    # Lockout is keyed on the account: behind the ingress proxy the peer IP is a
    # rotating pod address, so a per-IP counter never reaches the threshold.
    identifier = email
    forwarded = request.headers.get("X-Forwarded-For", "")
    ip = forwarded.split(",")[0].strip() or (request.client.host if request.client else "unknown")

    rec = await db.login_attempts.find_one({"identifier": identifier})
    if rec and rec.get("count", 0) >= 5:
        locked_until = rec.get("locked_until")
        if locked_until and datetime.fromisoformat(locked_until) > datetime.now(timezone.utc):
            raise HTTPException(status_code=429, detail="Troppi tentativi. Riprova tra qualche minuto.")

    user = await db.users.find_one({"email": email})
    if not user or not verify_password(body.password, user["password_hash"]):
        await db.login_attempts.update_one(
            {"identifier": identifier},
            {
                "$inc": {"count": 1},
                "$set": {
                    "locked_until": (datetime.now(timezone.utc) + timedelta(minutes=15)).isoformat(),
                    "last_ip": ip,
                },
            },
            upsert=True,
        )
        raise HTTPException(status_code=401, detail="Credenziali non valide.")

    await db.login_attempts.delete_one({"identifier": identifier})
    token = create_access_token(email)
    return {"token": token, "user": {"email": user["email"], "name": user.get("name", "Admin"), "role": user.get("role", "admin")}}

@api_router.get("/auth/me")
async def me(admin: dict = Depends(get_current_admin)):
    return admin


# ---------------- Admin routes ----------------
@api_router.get("/admin/leads", response_model=List[Lead])
async def list_leads(admin: dict = Depends(get_current_admin)):
    leads = await db.contact_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(2000)
    return leads

@api_router.get("/admin/leads.csv")
async def leads_csv(admin: dict = Depends(get_current_admin)):
    leads = await db.contact_leads.find({}, {"_id": 0}).sort("created_at", -1).to_list(5000)
    buf = io.StringIO()
    cols = ["created_at", "nome", "azienda", "email", "dimensione", "argomento", "marketing", "lang", "messaggio"]
    writer = csv.DictWriter(buf, fieldnames=cols, extrasaction="ignore")
    writer.writeheader()
    for l in leads:
        writer.writerow(l)
    return PlainTextResponse(buf.getvalue(), media_type="text/csv",
                             headers={"Content-Disposition": "attachment; filename=fulcrum-leads.csv"})


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=[o.strip() for o in os.environ['CORS_ORIGINS'].split(',') if o.strip()],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("startup")
async def on_startup():
    # Indexes
    try:
        await db.users.create_index("email", unique=True)
        await db.login_attempts.create_index("identifier")
    except Exception as e:
        logger.warning(f"Index creation: {e}")
    # Seed admin (idempotent)
    existing = await db.users.find_one({"email": ADMIN_EMAIL})
    if existing is None:
        await db.users.insert_one({
            "email": ADMIN_EMAIL, "password_hash": hash_password(ADMIN_PASSWORD),
            "name": "Admin", "role": "admin", "created_at": datetime.now(timezone.utc).isoformat(),
        })
        logger.info("Admin user seeded.")
    elif not verify_password(ADMIN_PASSWORD, existing["password_hash"]):
        await db.users.update_one({"email": ADMIN_EMAIL}, {"$set": {"password_hash": hash_password(ADMIN_PASSWORD)}})
        logger.info("Admin password updated.")


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
