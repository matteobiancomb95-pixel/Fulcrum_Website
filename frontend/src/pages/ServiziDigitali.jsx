import React from "react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { Reveal, SectionHead, ArrowLink } from "../components/fx/Bits";
import { TriList } from "../components/fx/BlockGrid";
import { TrustStrip } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { CtaBand } from "../components/fx/CtaBand";
import { DIGITALI } from "../content/pages/digitali";
import { useLang } from "../i18n";

export default function ServiziDigitali() {
  const { lang, t } = useLang();
  const c = DIGITALI[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primary={{ label: t.cta.scoping, href: "/contatti" }}
        secondary={{ label: t.cta.allAgents, href: "/ai-adoption" }}
      />

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="dig-offerta">
        <div className="fc-container">
          <SectionHead eyebrow={c.offerta.eyebrow} heading={c.offerta.heading} lead={c.offerta.lead} className="max-w-[62ch]" />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {c.offerta.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.05} className="h-full">
                <div className="fc-card" data-testid={`dig-card-${idx}`}>
                  <h3 className="fc-h3">{card.title}</h3>
                  <p className="fc-small fc-muted">{card.line}</p>
                  <TriList items={card.bullets} className="mt-4" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <MethodSteps
        eyebrow={c.processo.eyebrow}
        heading={c.processo.heading}
        lead={c.processo.lead}
        steps={c.processo.steps}
        testid="dig-processo"
      />

      <section className="fc-section-tight" data-testid="dig-ai-nativa">
        <div className="fc-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHead eyebrow={c.aiNativa.eyebrow} heading={c.aiNativa.heading} />
            <div>
              <p className="fc-lead">{c.aiNativa.lead}</p>
              <p className="fc-small fc-muted mt-6">{c.aiNativa.body}</p>
              <div className="mt-8 flex flex-col gap-4 items-start">
                {c.aiNativa.links.map((l) => (
                  <ArrowLink key={l.href} to={l.href} testid={`dig-link-${l.href.replace(/\//g, "")}`}>
                    {l.label}
                  </ArrowLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TrustStrip eyebrow={c.trust.eyebrow} heading={c.trust.heading} />
      <CtaBand eyebrow={c.cta.eyebrow} heading={c.cta.heading} body={c.cta.body} ctaLabel={t.cta.scoping} />
    </>
  );
}
