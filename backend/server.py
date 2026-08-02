from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import asyncio
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone

from sendgrid import SendGridAPIClient
from sendgrid.helpers.mail import Mail


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# SendGrid config
SENDGRID_API_KEY = os.environ.get('SENDGRID_API_KEY', '')
SENDER_EMAIL = os.environ.get('SENDER_EMAIL', '')
CONTACT_RECIPIENT = os.environ.get('CONTACT_RECIPIENT', SENDER_EMAIL)

app = FastAPI()
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------------- Models ----------------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactRequest(BaseModel):
    nome: str = Field(..., min_length=1, max_length=120)
    azienda: str = Field(..., min_length=1, max_length=160)
    email: EmailStr
    dimensione: str = Field(..., min_length=1, max_length=80)
    messaggio: str = Field(..., min_length=1, max_length=4000)
    privacy: bool
    marketing: bool = False
    lang: str = "it"

class ContactResponse(BaseModel):
    success: bool
    emailed: bool
    message: str


# ---------------- Email helpers ----------------
def _send_via_sendgrid(to_email: str, subject: str, html: str) -> bool:
    message = Mail(
        from_email=SENDER_EMAIL,
        to_emails=to_email,
        subject=subject,
        html_content=html,
    )
    sg = SendGridAPIClient(SENDGRID_API_KEY)
    resp = sg.send(message)
    return 200 <= resp.status_code < 300


def _notification_html(data: ContactRequest) -> str:
    return f"""
    <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
      <h2 style="color:#5B3DF5; margin-bottom:16px;">Nuova richiesta dal sito Fulcrum</h2>
      <table style="border-collapse:collapse; width:100%; font-size:15px;">
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Nome</td><td style="padding:6px 0;"><strong>{data.nome}</strong></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Azienda</td><td style="padding:6px 0;"><strong>{data.azienda}</strong></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Email</td><td style="padding:6px 0;"><a href="mailto:{data.email}" style="color:#5B3DF5;">{data.email}</a></td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Dimensione</td><td style="padding:6px 0;">{data.dimensione}</td></tr>
        <tr><td style="padding:6px 0; color:rgba(0,0,0,0.6);">Marketing</td><td style="padding:6px 0;">{"Sì" if data.marketing else "No"}</td></tr>
      </table>
      <div style="border:1px solid rgba(0,0,0,0.1); border-radius:16px; padding:16px; margin-top:16px;">
        <p style="margin:0; color:rgba(0,0,0,0.6); font-size:13px;">Messaggio</p>
        <p style="margin:8px 0 0; white-space:pre-wrap;">{data.messaggio}</p>
      </div>
    </div>
    """


def _confirmation_html(data: ContactRequest) -> str:
    if data.lang == "en":
        return f"""
        <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
          <h2 style="color:#5B3DF5;">Thanks, {data.nome}.</h2>
          <p>We've received your message and will get back to you within one business day with a concrete proposal.</p>
          <p style="color:rgba(0,0,0,0.6);">— The Fulcrum team · Driving AI Adoption</p>
        </div>
        """
    return f"""
    <div style="font-family: Poppins, Arial, sans-serif; color:#000; max-width:560px;">
      <h2 style="color:#5B3DF5;">Grazie, {data.nome}.</h2>
      <p>Abbiamo ricevuto il tuo messaggio e ti ricontattiamo entro un giorno lavorativo con una proposta concreta.</p>
      <p style="color:rgba(0,0,0,0.6);">— Il team Fulcrum · Driving AI Adoption</p>
    </div>
    """


async def _send_emails(data: ContactRequest) -> bool:
    """Send internal notification + confirmation to submitter. Returns True if notification sent."""
    if not SENDGRID_API_KEY or not SENDER_EMAIL:
        logger.warning("SendGrid not configured (missing SENDGRID_API_KEY/SENDER_EMAIL); email skipped.")
        return False
    try:
        notified = await asyncio.to_thread(
            _send_via_sendgrid,
            CONTACT_RECIPIENT,
            f"Nuova richiesta · {data.azienda}",
            _notification_html(data),
        )
    except Exception as e:
        logger.error(f"SendGrid notification failed: {e}")
        return False

    # Confirmation to submitter (best-effort, must not fail the request)
    try:
        subject = "We received your message · Fulcrum" if data.lang == "en" else "Abbiamo ricevuto il tuo messaggio · Fulcrum"
        await asyncio.to_thread(_send_via_sendgrid, str(data.email), subject, _confirmation_html(data))
    except Exception as e:
        logger.error(f"SendGrid confirmation failed: {e}")

    return notified


# ---------------- Routes ----------------
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

@api_router.post("/contact", response_model=ContactResponse)
async def submit_contact(data: ContactRequest):
    if not data.privacy:
        raise HTTPException(status_code=422, detail="Privacy consent is required.")

    # Persist the lead (record kept regardless of email delivery)
    doc = {
        "id": str(uuid.uuid4()),
        "nome": data.nome,
        "azienda": data.azienda,
        "email": str(data.email),
        "dimensione": data.dimensione,
        "messaggio": data.messaggio,
        "privacy": data.privacy,
        "marketing": data.marketing,
        "lang": data.lang,
        "created_at": datetime.now(timezone.utc).isoformat(),
    }
    await db.contact_leads.insert_one(doc)

    emailed = await _send_emails(data)
    return ContactResponse(
        success=True,
        emailed=emailed,
        message="Richiesta inviata" if emailed else "Richiesta ricevuta",
    )


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
