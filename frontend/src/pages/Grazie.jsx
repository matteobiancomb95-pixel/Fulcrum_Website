import React from "react";
import { ExternalLink } from "lucide-react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { L, Reveal, SectionHead } from "../components/fx/Bits";
import { ZCAL_EMBED } from "../content/site";
import { useLang } from "../i18n";

export default function Grazie() {
  const { t } = useLang();
  const c = t.thanks;

  return (
    <>
      <Seo title={c.metaTitle} description={c.metaDescription} noindex />
      <PageHero eyebrow={c.eyebrow} h1={c.h1} lead={c.lead}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
          <a
            href={ZCAL_EMBED}
            target="_blank"
            rel="noopener noreferrer"
            className="fc-btn fc-btn-primary"
            data-testid="grazie-calendar"
          >
            {c.cta} <ExternalLink size={16} />
          </a>
          <L to="/" className="fc-arrow" data-testid="grazie-home">
            <span>{t.cta.backHome}</span>
          </L>
        </div>
      </PageHero>

      <section className="fc-section-tight" data-testid="grazie-next">
        <div className="fc-container">
          <SectionHead eyebrow={c.nextEyebrow} heading={c.nextHeading} className="max-w-[62ch]" />
          <ul className="mt-10 flex flex-col">
            {c.next.map((n, idx) => (
              <Reveal key={n.href} delay={idx * 0.05}>
                <li style={{ borderTop: "1px solid var(--fc-hairline)" }}>
                  <L to={n.href} className="flex items-center justify-between gap-6 py-6 group" data-testid={`grazie-next-${idx}`}>
                    <span className="fc-h4">{n.label}</span>
                    <span className="fc-arrow"><span data-arrow>&rarr;</span></span>
                  </L>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
