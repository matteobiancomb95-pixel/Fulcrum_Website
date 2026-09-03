import React from "react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { SectionHead, ArrowLink } from "../components/fx/Bits";
import { BlockGrid } from "../components/fx/BlockGrid";
import { TrustStrip } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { Scenario } from "../components/fx/Scenario";
import { CtaBand } from "../components/fx/CtaBand";
import { Faq } from "../components/fx/Faq";
import { ENTERPRISE } from "../content/pages/enterprise";
import { useLang } from "../i18n";

export default function Enterprise() {
  const { lang, t } = useLang();
  const c = ENTERPRISE[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        long
        primary={{ label: t.cta.scoping, href: "/contatti" }}
        secondary={{ label: t.cta.catalogue, href: "/ai-adoption" }}
      />

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="ent-forme">
        <div className="fc-container">
          <SectionHead eyebrow={c.forme.eyebrow} heading={c.forme.heading} lead={c.forme.lead} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.forme.items} cols={3} testid="ent-forme-items" />
          </div>
          <p className="fc-small fc-muted mt-10 max-w-[68ch]">{c.forme.note}</p>
        </div>
      </section>

      <section className="fc-section" data-testid="ent-quando">
        <div className="fc-container">
          <SectionHead eyebrow={c.quandoServe.eyebrow} heading={c.quandoServe.heading} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.quandoServe.items} cols={3} testid="ent-quando-items" />
          </div>
          <div className="mt-10 pt-6 max-w-[68ch]" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
            <p className="fc-small fc-muted italic">{c.quandoServe.note}</p>
            <div className="mt-5">
              <ArrowLink to={c.quandoServe.cta.href} testid="ent-quando-cta">{c.quandoServe.cta.label}</ArrowLink>
            </div>
          </div>
        </div>
      </section>

      <MethodSteps
        eyebrow={c.metodo.eyebrow}
        heading={c.metodo.heading}
        steps={c.metodo.steps}
        note={c.metodo.note}
        testid="ent-method"
      />

      <section className="fc-section-tight" data-testid="ent-governance">
        <div className="fc-container">
          <SectionHead eyebrow={c.governance.eyebrow} heading={c.governance.heading} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.governance.items} cols={2} testid="ent-governance-items" />
          </div>
        </div>
      </section>

      <section className="fc-section" data-testid="ent-esempi">
        <div className="fc-container">
          <SectionHead eyebrow={c.esempi.eyebrow} heading={c.esempi.heading} lead={c.esempi.lead} className="max-w-[62ch]" />
          <div className="mt-12">
            <Scenario
              title={c.esempi.scenario.title}
              today={c.esempi.scenario.today}
              withAgent={c.esempi.scenario.withAgent}
              testid="ent-scenario"
            />
          </div>
          <div className="mt-14">
            <BlockGrid items={c.esempi.items} cols={3} testid="ent-esempi-items" />
          </div>
        </div>
      </section>

      <TrustStrip eyebrow={c.trust.eyebrow} heading={c.trust.heading} note={c.trust.note} />
      <Faq eyebrow={c.faq.eyebrow} heading={c.faq.heading} items={c.faq.items} testid="ent-faq" />
      <CtaBand eyebrow={c.cta.eyebrow} heading={c.cta.heading} body={c.cta.body} ctaLabel={t.cta.scoping} />
    </>
  );
}
