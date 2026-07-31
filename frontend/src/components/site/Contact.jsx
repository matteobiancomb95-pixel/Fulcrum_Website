import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useLang } from "../../i18n";
import { reveal, stagger, viewportOnce } from "../../lib/motion";

const field = "w-full bg-transparent border-b pb-3 pt-2 text-lg placeholder:text-[rgba(255,255,255,0.5)] focus:outline-none transition-colors";

export const Contact = () => {
  const { t } = useLang();
  const c = t.contact;
  const [form, setForm] = useState({ nome: "", azienda: "", email: "", dimensione: "", messaggio: "", privacy: false, marketing: false });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k, v) => {
    setForm((f) => ({ ...f, [k]: v }));
    setErrors((e) => ({ ...e, [k]: undefined }));
  };

  const validate = () => {
    const er = c.errors;
    const e = {};
    if (!form.nome.trim()) e.nome = er.nome;
    if (!form.azienda.trim()) e.azienda = er.azienda;
    if (!form.email.trim()) e.email = er.email;
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = er.emailInvalid;
    if (!form.dimensione) e.dimensione = er.dimensione;
    if (!form.messaggio.trim()) e.messaggio = er.messaggio;
    if (!form.privacy) e.privacy = er.privacy;
    return e;
  };

  const onSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) setSent(true);
  };

  const borderStyle = (k) => ({ borderColor: errors[k] ? "var(--copy-on-cta)" : "rgba(255,255,255,0.35)" });
  const lbl = "eyebrow block mb-2";
  const lblStyle = { color: "rgba(255,255,255,0.6)" };

  return (
    <section id="parliamone" data-testid="contact" className="section-y" style={{ background: "var(--cta)", color: "var(--copy-on-cta)" }}>
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 lg:gap-20">
          <div>
            <motion.p variants={reveal} className="eyebrow mb-4" style={lblStyle}>{c.eyebrow}</motion.p>
            <motion.h2 variants={reveal} className="m-0" style={{ fontSize: "var(--h2)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
              {c.heading}
            </motion.h2>
            <motion.p variants={reveal} className="mt-6 max-w-[38ch] text-lg" style={{ color: "rgba(255,255,255,0.8)" }}>
              {c.intro}
            </motion.p>
          </div>

          {sent ? (
            <motion.div variants={reveal} data-testid="contact-success" className="flex flex-col items-start justify-center rounded-[20px] p-10" style={{ background: "rgba(255,255,255,0.12)" }}>
              <span className="inline-flex h-14 w-14 items-center justify-center rounded-full" style={{ background: "var(--copy-on-cta)" }}>
                <Check size={26} color="var(--cta)" />
              </span>
              <h3 className="mt-6 m-0" style={{ fontSize: "1.6rem", fontWeight: 700 }}>{c.success.title}</h3>
              <p className="mt-2" style={{ color: "rgba(255,255,255,0.85)" }}>{c.success.body(form.nome)}</p>
            </motion.div>
          ) : (
            <motion.form variants={reveal} data-testid="contact-form" onSubmit={onSubmit} noValidate className="grid gap-7">
              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="nome" className={lbl} style={lblStyle}>{c.labels.nome}</label>
                  <input id="nome" data-testid="input-nome" className={field} style={borderStyle("nome")} value={form.nome} onChange={(e) => set("nome", e.target.value)} placeholder={c.placeholders.nome} />
                  {errors.nome && <p data-testid="error-nome" className="mt-2 text-sm font-medium">{errors.nome}</p>}
                </div>
                <div>
                  <label htmlFor="azienda" className={lbl} style={lblStyle}>{c.labels.azienda}</label>
                  <input id="azienda" data-testid="input-azienda" className={field} style={borderStyle("azienda")} value={form.azienda} onChange={(e) => set("azienda", e.target.value)} placeholder={c.placeholders.azienda} />
                  {errors.azienda && <p data-testid="error-azienda" className="mt-2 text-sm font-medium">{errors.azienda}</p>}
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-7">
                <div>
                  <label htmlFor="email" className={lbl} style={lblStyle}>{c.labels.email}</label>
                  <input id="email" type="email" data-testid="input-email" className={field} style={borderStyle("email")} value={form.email} onChange={(e) => set("email", e.target.value)} placeholder={c.placeholders.email} />
                  {errors.email && <p data-testid="error-email" className="mt-2 text-sm font-medium">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="dimensione" className={lbl} style={lblStyle}>{c.labels.dimensione}</label>
                  <select
                    id="dimensione"
                    data-testid="input-dimensione"
                    className={`${field} appearance-none cursor-pointer`}
                    style={{ ...borderStyle("dimensione"), color: form.dimensione ? "var(--copy-on-cta)" : "rgba(255,255,255,0.5)" }}
                    value={form.dimensione}
                    onChange={(e) => set("dimensione", e.target.value)}
                  >
                    <option value="" disabled style={{ color: "#000" }}>{c.placeholders.dimensione}</option>
                    {c.sizes.map((s) => <option key={s} value={s} style={{ color: "#000" }}>{s}</option>)}
                  </select>
                  {errors.dimensione && <p data-testid="error-dimensione" className="mt-2 text-sm font-medium">{errors.dimensione}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="messaggio" className={lbl} style={lblStyle}>{c.labels.messaggio}</label>
                <textarea id="messaggio" data-testid="input-messaggio" rows={3} className={`${field} resize-none`} style={borderStyle("messaggio")} value={form.messaggio} onChange={(e) => set("messaggio", e.target.value)} placeholder={c.placeholders.messaggio} />
                {errors.messaggio && <p data-testid="error-messaggio" className="mt-2 text-sm font-medium">{errors.messaggio}</p>}
              </div>

              <div className="grid gap-3 mt-1">
                {c.checkboxes.map((cb) => (
                  <div key={cb.k}>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={form[cb.k]}
                        data-testid={`checkbox-${cb.k}`}
                        onClick={() => set(cb.k, !form[cb.k])}
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] border transition-colors"
                        style={{ borderColor: errors[cb.k] ? "var(--copy-on-cta)" : "rgba(255,255,255,0.5)", background: form[cb.k] ? "var(--copy-on-cta)" : "transparent", borderWidth: 1.5 }}
                      >
                        {form[cb.k] && <Check size={14} color="var(--cta)" />}
                      </button>
                      <span className="text-sm" style={{ color: "rgba(255,255,255,0.85)" }}>
                        {cb.label} {cb.req && <span aria-hidden="true">*</span>}
                      </span>
                    </label>
                    {errors[cb.k] && <p data-testid={`error-${cb.k}`} className="mt-1.5 ml-8 text-sm font-medium">{errors[cb.k]}</p>}
                  </div>
                ))}
              </div>

              <button type="submit" data-testid="contact-submit" className="btn btn-onviolet mt-3 self-start">
                {c.submit}
                <ArrowRight size={18} />
              </button>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};
