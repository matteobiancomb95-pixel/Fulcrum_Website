import React from "react";
import { Link } from "react-router-dom";
import { Seo } from "../components/fx/Seo";
import { Reveal, ArrowLink } from "../components/fx/Bits";
import { TriList } from "../components/fx/BlockGrid";
import { LEGAL } from "../content/pages/legal";
import { useConsent } from "../consent";
import { useLang } from "../i18n";

const Table = ({ table }) => (
  <div className="mt-6 overflow-x-auto">
    <table className="w-full border-collapse text-left" style={{ fontSize: "var(--fc-small)" }}>
      <thead>
        <tr>
          {table.head.map((h) => (
            <th key={h} className="fc-eyebrow py-3 pr-6 align-top" style={{ borderBottom: "1px solid var(--fc-hairline)" }}>
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {table.rows.map((row) => (
          <tr key={row[0]}>
            {row.map((cell, i) => (
              <td key={i} className="py-4 pr-6 align-top" style={{ borderBottom: "1px solid var(--fc-hairline)", color: i === 0 ? "var(--fc-copy)" : "var(--fc-copy-muted)" }}>
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default function Legal({ doc }) {
  const { lang, enHref, itHref } = useLang();
  const { openBanner } = useConsent();
  const c = LEGAL[doc][lang];
  const otherHref = lang === "en" ? itHref : enHref;

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <section id="contenuto" className="pt-[calc(var(--fc-header-h)+clamp(48px,7vw,88px))] pb-[clamp(32px,5vw,56px)]">
        <div className="fc-container">
          <p className="fc-eyebrow">{c.eyebrow}</p>
          <h1 className="fc-h1-long mt-5">{c.h1}</h1>
          <p className="fc-lead mt-7 max-w-[68ch]">{c.lead}</p>
          <p className="fc-caption mt-8">
            {c.updatedLabel}: {c.updated} ·{" "}
            <Link to={otherHref} className="underline" style={{ color: "var(--fc-accent)", textUnderlineOffset: 3 }} data-testid="legal-other-lang">
              {c.otherLang}
            </Link>
          </p>
        </div>
      </section>

      <section className="pb-[clamp(64px,9vw,120px)]" data-testid={`legal-${doc}`}>
        <div className="fc-container">
          <nav aria-label={c.indexLabel} className="max-w-[68ch] pt-8" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
            <p className="fc-eyebrow mb-5">{c.indexLabel}</p>
            <ol className="flex flex-col gap-2">
              {c.sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="fc-small transition-colors hover:text-[var(--fc-accent)]" style={{ color: "var(--fc-copy-muted)" }}>
                    {s.h2}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <div className="fc-legal mt-16 flex flex-col gap-12 max-w-[72ch]">
            {c.sections.map((s) => (
              <Reveal key={s.id}>
                <section id={s.id} className="pt-8" style={{ borderTop: "1px solid var(--fc-hairline)" }} data-testid={`legal-section-${s.id}`}>
                  <h2>{s.h2}</h2>
                  {s.paras?.map((p) => (
                    <p key={p} className="fc-small fc-muted">{p}</p>
                  ))}
                  {s.bullets && <TriList items={s.bullets} className="mt-4" />}
                  {s.table && <Table table={s.table} />}
                  {s.after?.map((p) => (
                    <p key={p} className="fc-small fc-muted mt-4">{p}</p>
                  ))}
                  {s.prefsCta && (
                    <button
                      type="button"
                      onClick={openBanner}
                      data-testid="legal-cookie-prefs"
                      className="fc-btn fc-btn-ghost fc-btn-sm mt-6"
                    >
                      {s.prefsCta}
                    </button>
                  )}
                </section>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 max-w-[72ch] pt-8" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
            <ArrowLink to={doc === "privacy" ? "/cookie" : "/privacy"} testid="legal-cross-link">
              {doc === "privacy" ? "Cookie Policy" : "Privacy Policy"}
            </ArrowLink>
          </div>
        </div>
      </section>
    </>
  );
}
