import React, { useRef, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Check } from "lucide-react";
import { useLang } from "../../i18n";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Err = ({ id, children }) =>
  children ? (
    <p id={id} data-testid={id} className="mt-2 flex items-center gap-2 text-[0.8125rem] font-medium">
      <span className="h-2 w-2" aria-hidden="true" style={{ background: "var(--fc-accent)", clipPath: "polygon(50% 0,100% 100%,0 100%)" }} />
      {children}
    </p>
  ) : null;

const Field = ({ id, label, required, error, children }) => (
  <div>
    <label htmlFor={id} className="fc-eyebrow block mb-2">
      {label} {required && <span style={{ color: "var(--fc-accent)" }}>*</span>}
    </label>
    {children}
    <Err id={`error-${id}`}>{error}</Err>
  </div>
);

const Checkbox = ({ id, checked, onChange, error, children }) => (
  <div>
    <label className="flex items-start gap-3 cursor-pointer select-none">
      <button
        type="button"
        role="checkbox"
        aria-checked={checked}
        id={id}
        data-testid={`checkbox-${id}`}
        onClick={onChange}
        className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-[4px] border transition-colors"
        style={{
          borderWidth: 1,
          borderColor: error ? "var(--fc-copy)" : "var(--fc-hairline)",
          background: checked ? "var(--fc-accent)" : "transparent",
        }}
      >
        {checked && <Check size={13} color="#fff" />}
      </button>
      <span className="fc-small fc-muted">{children}</span>
    </label>
    <Err id={`error-${id}`}>{error}</Err>
  </div>
);

export const ContactForm = () => {
  const { lang, t, path } = useLang();
  const f = t.form;
  const navigate = useNavigate();
  const [v, setV] = useState({ nome: "", azienda: "", email: "", dimensione: "", argomento: "", messaggio: "", privacy: false, marketing: false });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const mountedAt = useRef(Date.now());
  const honeypot = useRef("");

  const set = (k, value) => {
    setV((s) => ({ ...s, [k]: value }));
    setErrors((e) => ({ ...e, [k]: undefined }));
    setServerError("");
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    const e = {};
    if (!v.nome.trim()) e.nome = f.errors.nome;
    if (!v.azienda.trim()) e.azienda = f.errors.azienda;
    if (!v.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = f.errors.email;
    if (!v.dimensione) e.dimensione = f.errors.dimensione;
    if (!v.privacy) e.privacy = f.errors.privacy;
    setErrors(e);
    if (Object.keys(e).length) return;

    setSubmitting(true);
    try {
      await axios.post(`${API}/contact`, {
        ...v,
        lang,
        origine: typeof document !== "undefined" ? document.referrer || "" : "",
        website: honeypot.current,
        elapsed_ms: Date.now() - mountedAt.current,
      });
      navigate(path("/grazie"));
    } catch (err) {
      setServerError(f.errors.generic);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} noValidate data-testid="contact-form" className="grid gap-6">
      <p className="fc-caption">{f.legend}</p>

      <div aria-hidden="true" style={{ position: "absolute", left: -9999, width: 1, height: 1, overflow: "hidden" }}>
        <label htmlFor="website">{f.honeypot}</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" onChange={(e) => { honeypot.current = e.target.value; }} />
      </div>

      <Field id="nome" label={f.labels.nome} required error={errors.nome}>
        <input id="nome" data-testid="input-nome" className="fc-field" autoComplete="name" placeholder={f.placeholders.nome}
          aria-invalid={!!errors.nome} aria-describedby={errors.nome ? "error-nome" : undefined}
          value={v.nome} onChange={(e) => set("nome", e.target.value)} />
      </Field>

      <Field id="azienda" label={f.labels.azienda} required error={errors.azienda}>
        <input id="azienda" data-testid="input-azienda" className="fc-field" autoComplete="organization" placeholder={f.placeholders.azienda}
          aria-invalid={!!errors.azienda} aria-describedby={errors.azienda ? "error-azienda" : undefined}
          value={v.azienda} onChange={(e) => set("azienda", e.target.value)} />
      </Field>

      <Field id="email" label={f.labels.email} required error={errors.email}>
        <input id="email" type="email" data-testid="input-email" className="fc-field" autoComplete="email" placeholder={f.placeholders.email}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? "error-email" : undefined}
          value={v.email} onChange={(e) => set("email", e.target.value)} />
      </Field>

      <Field id="dimensione" label={f.labels.dimensione} required error={errors.dimensione}>
        <select id="dimensione" data-testid="input-dimensione" className="fc-field"
          aria-invalid={!!errors.dimensione} aria-describedby={errors.dimensione ? "error-dimensione" : undefined}
          value={v.dimensione} onChange={(e) => set("dimensione", e.target.value)}
          style={{ color: v.dimensione ? "var(--fc-copy)" : "var(--fc-copy-faint)" }}>
          <option value="">{f.placeholders.select}</option>
          {f.sizes.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      <Field id="argomento" label={f.labels.argomento}>
        <select id="argomento" data-testid="input-argomento" className="fc-field"
          value={v.argomento} onChange={(e) => set("argomento", e.target.value)}
          style={{ color: v.argomento ? "var(--fc-copy)" : "var(--fc-copy-faint)" }}>
          <option value="">{f.placeholders.select}</option>
          {f.topics.map((s) => <option key={s} value={s}>{s}</option>)}
        </select>
      </Field>

      <Field id="messaggio" label={f.labels.messaggio}>
        <textarea id="messaggio" data-testid="input-messaggio" rows={5} className="fc-field" placeholder={f.placeholders.messaggio}
          value={v.messaggio} onChange={(e) => set("messaggio", e.target.value)} />
      </Field>

      <div className="grid gap-3">
        <Checkbox id="privacy" checked={v.privacy} error={errors.privacy} onChange={() => set("privacy", !v.privacy)}>
          {f.privacy.pre}
          <Link to={path("/privacy")} className="underline" style={{ color: "var(--fc-accent)", textUnderlineOffset: 3 }}>
            {f.privacy.link}
          </Link>
          {f.privacy.post} <span style={{ color: "var(--fc-accent)" }}>*</span>
        </Checkbox>
        <Checkbox id="marketing" checked={v.marketing} onChange={() => set("marketing", !v.marketing)}>
          {f.marketing}
        </Checkbox>
      </div>

      <div>
        <button type="submit" data-testid="contact-submit" disabled={submitting} className="fc-btn fc-btn-primary">
          {submitting ? f.submitting : f.submit}
        </button>
        <p className="fc-caption mt-4">{f.note}</p>
        <Err id="error-server">{serverError}</Err>
      </div>
    </form>
  );
};
