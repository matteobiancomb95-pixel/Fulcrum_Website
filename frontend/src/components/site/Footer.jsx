import React from "react";
import { Linkedin } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { useLang } from "../../i18n";

export const Footer = () => {
  const { t } = useLang();
  const f = t.footer;
  const go = () => document.querySelector("#hero")?.scrollIntoView({ behavior: "smooth" });
  return (
    <footer data-testid="footer" className="border-t hairline">
      <div className="fx-container py-16 md:py-20">
        <div className="grid md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-12">
          <div>
            <button onClick={go} aria-label="Fulcrum home"><FulcrumLogo height={28} /></button>
            <p className="mt-5 max-w-[30ch]" style={{ color: "var(--muted)" }}>{f.tagline}</p>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="footer-linkedin"
              aria-label="LinkedIn"
              className="mt-6 inline-flex h-11 w-11 items-center justify-center rounded-full border hairline transition-colors"
              style={{ borderWidth: 1 }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cta)"; e.currentTarget.style.borderColor = "var(--cta)"; e.currentTarget.style.color = "var(--copy-on-cta)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "var(--hairline)"; e.currentTarget.style.color = "var(--copy)"; }}
            >
              <Linkedin size={18} />
            </a>
          </div>

          {f.cols.map((col) => (
            <div key={col.head}>
              <p className="eyebrow mb-5">{col.head}</p>
              <ul className="flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l}><a href="#" className="text-[0.95rem] transition-colors" style={{ color: "var(--muted)" }} onMouseEnter={(e) => (e.currentTarget.style.color = "var(--cta)")} onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-sm" style={{ color: "var(--faint)" }}>© {new Date().getFullYear()} Fulcrum · {f.rights}</p>
          <div className="flex gap-6 text-sm" style={{ color: "var(--faint)" }}>
            <a href="#" className="hover:underline">{f.privacy}</a>
            <a href="#" className="hover:underline">{f.cookie}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
