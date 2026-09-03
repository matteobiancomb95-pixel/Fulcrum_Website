import React from "react";
import { Link } from "react-router-dom";
import { Linkedin, Instagram, ArrowRight } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { useLang } from "../../i18n";
import { useConsent } from "../../consent";
import { LINKEDIN, INSTAGRAM } from "../../content/site";

const Social = ({ href, label, testid, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    data-testid={testid}
    className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline transition-colors hover:border-[var(--fc-accent)] hover:text-[var(--fc-accent)]"
    style={{ borderWidth: 1 }}
  >
    {children}
  </a>
);

export const Footer = () => {
  const { t, path } = useLang();
  const { openBanner } = useConsent();
  const f = t.footer;

  return (
    <footer data-testid="footer" className="border-t hairline" style={{ borderTopWidth: 1 }}>
      <div className="fc-container pt-[clamp(56px,7vw,80px)] pb-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1.4fr_1fr_1fr]">
          <div>
            <Link to={path("/")} aria-label="Fulcrum"><FulcrumLogo height={26} /></Link>
            <p className="fc-small fc-muted mt-5 max-w-[34ch]">{f.tagline}</p>
            <div className="mt-6 flex gap-3">
              <Social href={LINKEDIN} label="LinkedIn" testid="footer-linkedin"><Linkedin size={18} /></Social>
              <Social href={INSTAGRAM} label="Instagram" testid="footer-instagram"><Instagram size={18} /></Social>
            </div>
          </div>

          {f.cols.map((col) => (
            <div key={col.head}>
              <p className="fc-eyebrow mb-5">{col.head}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={path(l.href)}
                      className="fc-small transition-colors hover:text-[var(--fc-accent)]"
                      style={{ color: "var(--fc-copy-muted)" }}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
                {col.head === f.cols[3].head && (
                  <li>
                    <button
                      type="button"
                      onClick={openBanner}
                      data-testid="footer-cookie-prefs"
                      className="fc-small text-left transition-colors hover:text-[var(--fc-accent)]"
                      style={{ color: "var(--fc-copy-muted)" }}
                    >
                      {f.cookiePrefs}
                    </button>
                  </li>
                )}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t hairline grid gap-3 sm:flex sm:items-center sm:justify-between" style={{ borderTopWidth: 1 }}>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 fc-caption">
            <Link to={path("/contatti")} className="fc-arrow" data-testid="footer-contact">
              <span>{f.writeUs}</span>
              <ArrowRight size={14} />
            </Link>
            <span data-testid="footer-regcode">{f.regLabel} {f.regValue}</span>
          </div>
          <p className="fc-caption">© {new Date().getFullYear()} Fulcrum · {f.rights}</p>
        </div>
      </div>
    </footer>
  );
};
