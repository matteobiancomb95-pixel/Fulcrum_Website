import React, { useEffect, useState } from "react";
import axios from "axios";
import { LogOut, Download, Inbox, Loader2 } from "lucide-react";
import { FulcrumLogo, FulcrumMark } from "../components/site/Logo";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;
const TOKEN_KEY = "fulcrum_admin_token";

const fmtDate = (iso) => {
  try {
    return new Date(iso).toLocaleString("it-IT", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
  } catch (e) {
    return iso;
  }
};

const Login = ({ onSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { data } = await axios.post(`${API}/auth/login`, { email, password });
      localStorage.setItem(TOKEN_KEY, data.token);
      onSuccess(data.user);
    } catch (err) {
      const d = err.response?.data?.detail;
      setError(typeof d === "string" ? d : "Accesso non riuscito.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6" style={{ background: "var(--bg)" }}>
      <div className="w-full max-w-[400px]">
        <div className="flex justify-center mb-8"><FulcrumLogo height={30} /></div>
        <div className="rounded-[20px] border hairline p-8" style={{ borderWidth: 1 }}>
          <h1 className="m-0 mb-1" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>Area riservata</h1>
          <p className="mb-6 text-sm" style={{ color: "var(--muted)" }}>Accedi per gestire le richieste ricevute.</p>
          <form onSubmit={submit} className="grid gap-4">
            <div>
              <label htmlFor="admin-email" className="eyebrow block mb-2">Email</label>
              <input id="admin-email" data-testid="admin-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                className="w-full border-b pb-2 pt-1 text-lg focus:outline-none bg-transparent" style={{ borderColor: "var(--hairline)" }} placeholder="admin@fulcrum.it" />
            </div>
            <div>
              <label htmlFor="admin-password" className="eyebrow block mb-2">Password</label>
              <input id="admin-password" data-testid="admin-password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)}
                className="w-full border-b pb-2 pt-1 text-lg focus:outline-none bg-transparent" style={{ borderColor: "var(--hairline)" }} placeholder="••••••••" />
            </div>
            {error && <p data-testid="admin-login-error" className="text-sm font-medium" style={{ color: "var(--cta)" }}>{error}</p>}
            <button type="submit" data-testid="admin-login-submit" disabled={loading} className="btn btn-primary mt-2 disabled:opacity-70">
              {loading ? <Loader2 size={18} className="animate-spin" /> : "Accedi"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ onLogout }) => {
  const [leads, setLeads] = useState(null);
  const [error, setError] = useState("");
  const [downloading, setDownloading] = useState(false);
  const token = localStorage.getItem(TOKEN_KEY);
  const authHeaders = { headers: { Authorization: `Bearer ${token}` } };

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`${API}/admin/leads`, authHeaders);
        setLeads(data);
      } catch (err) {
        if (err.response?.status === 401) onLogout();
        else setError("Impossibile caricare i lead.");
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const downloadCsv = async () => {
    setDownloading(true);
    try {
      const res = await axios.get(`${API}/admin/leads.csv`, { ...authHeaders, responseType: "blob" });
      const url = window.URL.createObjectURL(new Blob([res.data], { type: "text/csv" }));
      const a = document.createElement("a");
      a.href = url;
      a.download = "fulcrum-leads.csv";
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen" style={{ background: "var(--bg)" }}>
      <header className="border-b hairline" style={{ borderBottomWidth: 1 }}>
        <div className="fx-container flex items-center justify-between h-[72px]">
          <FulcrumLogo height={24} />
          <button data-testid="admin-logout" onClick={onLogout} className="inline-flex items-center gap-2 text-sm font-medium">
            <LogOut size={16} /> Esci
          </button>
        </div>
      </header>

      <main className="fx-container py-12">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-8">
          <div>
            <p className="eyebrow mb-2">Pannello lead</p>
            <h1 className="m-0" style={{ fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
              Richieste ricevute
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm" style={{ color: "var(--muted)" }} data-testid="admin-lead-count">
              {leads ? `${leads.length} richieste` : "…"}
            </span>
            <button data-testid="admin-download-csv" onClick={downloadCsv} disabled={downloading || !leads?.length} className="btn btn-primary !py-2.5 !px-5 !text-[0.95rem] disabled:opacity-50">
              {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />} Scarica CSV
            </button>
          </div>
        </div>

        {error && <p className="text-sm font-medium" style={{ color: "var(--cta)" }}>{error}</p>}

        {leads === null ? (
          <div className="flex items-center gap-2 py-20 justify-center" style={{ color: "var(--muted)" }}>
            <Loader2 size={20} className="animate-spin" /> Caricamento…
          </div>
        ) : leads.length === 0 ? (
          <div className="flex flex-col items-center gap-4 py-24 text-center">
            <FulcrumMark size={56} color="var(--cta)" />
            <p className="text-lg font-medium">Ancora nessuna richiesta</p>
            <p className="text-sm max-w-[36ch]" style={{ color: "var(--muted)" }}>Le richieste inviate dal form "Parliamone" compariranno qui.</p>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-[20px] border hairline" style={{ borderWidth: 1 }}>
            <table className="w-full text-left border-collapse min-w-[820px]">
              <thead>
                <tr style={{ borderBottom: "1px solid var(--hairline)" }}>
                  {["Data", "Nome", "Azienda", "Email", "Dimensione", "Messaggio"].map((h) => (
                    <th key={h} className="eyebrow py-4 px-5 whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {leads.map((l) => (
                  <tr key={l.id} data-testid="admin-lead-row" style={{ borderBottom: "1px solid var(--hairline)" }}>
                    <td className="py-4 px-5 text-sm whitespace-nowrap" style={{ color: "var(--muted)" }}>{fmtDate(l.created_at)}</td>
                    <td className="py-4 px-5 font-medium whitespace-nowrap">{l.nome}</td>
                    <td className="py-4 px-5 whitespace-nowrap">{l.azienda}</td>
                    <td className="py-4 px-5 whitespace-nowrap"><a href={`mailto:${l.email}`} style={{ color: "var(--cta)" }}>{l.email}</a></td>
                    <td className="py-4 px-5 text-sm whitespace-nowrap">{l.dimensione}</td>
                    <td className="py-4 px-5 text-sm max-w-[320px]" style={{ color: "var(--muted)" }}>{l.messaggio}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </main>
    </div>
  );
};

export default function AdminPage() {
  const [authed, setAuthed] = useState(!!localStorage.getItem(TOKEN_KEY));

  const logout = () => {
    localStorage.removeItem(TOKEN_KEY);
    setAuthed(false);
  };

  return authed ? <Dashboard onLogout={logout} /> : <Login onSuccess={() => setAuthed(true)} />;
}
