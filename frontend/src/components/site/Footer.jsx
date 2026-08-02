import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { useLang } from "../../i18n";

const LINKEDIN = "https://www.linkedin.com/company/fulrcum-ai-tech/?utm_source=website";
const INSTAGRAM = "https://www.instagram.com/fulcrum_tech_ai?utm_source=website";

const SocialIcon = ({ href, label, children, testid }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    data-testid={testid}
    aria-label={label}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline transition-colors"
    style={{ borderWidth: 1 }}
    onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cta)"; e.currentTarget.style.borderColor = "var(--cta)"; e.currentTarget.style.color = "var(--copy-on-cta)"; }}
    onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--copy)"; }}
  >
    {children}
  </a>
);

const FooterLink = ({ href, children }) => {
  const style = { color: "var(--muted)" };
  const on = (e) => (e.currentTarget.style.color = "var(--cta)");
  const off = (e) => (e.currentTarget.style.color = "var(--muted)");
  const isInternal = href.startsWith("/");
  return isInternal ? (
    <Link to={href} className="text-[0.95rem] transition-colors" style={style} onMouseEnter={on} onMouseLeave={off}>{children}</Link>
  ) : (
    <a href={href} className="text-[0.95rem] transition-colors" style={style} onMouseEnter={on} onMouseLeave={off}>{children}</a>
  );
};

export const Footer = () => {
  const { t } = useLang();
  const f = t.footer;
  return (
    <footer data-testid="footer" className="border-t hairline">
      <div className="fx-container py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <Link to="/" aria-label="Fulcrum home"><FulcrumLogo height={28} /></Link>
            <p className="mt-5 max-w-[30ch]" style={{ color: "var(--muted)" }}>{f.tagline}</p>
            <div className="mt-6 flex gap-3">
              <SocialIcon href={LINKEDIN} label="LinkedIn" testid="footer-linkedin"><Linkedin size={18} /></SocialIcon>
              <SocialIcon href={INSTAGRAM} label="Instagram" testid="footer-instagram"><Instagram size={18} /></SocialIcon>
            </div>
          </div>

          {f.cols.map((col) => (
            <div key={col.head}>
              <p className="eyebrow mb-5">{col.head}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}><FooterLink href={l.href}>{l.label}</FooterLink></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t hairline grid gap-2 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 text-sm" style={{ color: "var(--faint)" }}>
            <span data-testid="footer-regcode">{f.companyLabel} {f.company}</span>
            <a href={`mailto:${f.email}`} data-testid="footer-email" className="hover:underline">{f.email}</a>
          </div>
          <p className="text-sm" style={{ color: "var(--faint)" }}>© {new Date().getFullYear()} Fulcrum · {f.rights}</p>
        </div>
      </div>
    </footer>
  );
};
