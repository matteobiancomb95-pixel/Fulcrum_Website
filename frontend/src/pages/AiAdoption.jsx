import React from "react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { Reveal, SectionHead } from "../components/fx/Bits";
import { BlockGrid } from "../components/fx/BlockGrid";
import { TrustStrip, SectorPills } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { AgentCard, TileLink } from "../components/fx/AgentCard";
import { CtaBand } from "../components/fx/CtaBand";
import { Faq } from "../components/fx/Faq";
import { HUB } from "../content/pages/hub";
import { AGENTS, agentCard } from "../content/agents";
import { useLang } from "../i18n";

export default function AiAdoption() {
  const { lang, t } = useLang();
  const c = HUB[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primary={{ label: t.cta.call, href: "/contatti" }}
        secondary={{ label: t.cta.demo, href: "/contatti#form" }}
      />

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="hub-frame">
        <div className="fc-container">
          <SectionHead eyebrow={c.frame.eyebrow} heading={c.frame.heading} lead={c.frame.lead} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.frame.items} cols={3} testid="hub-frame-items" />
          </div>
        </div>
      </section>

      <section className="fc-section" data-testid="hub-grid">
        <div className="fc-container">
          <SectionHead eyebrow={c.grid.eyebrow} heading={c.grid.heading} lead={c.grid.lead} className="max-w-[62ch]" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((a, idx) => (
              <AgentCard key={a.slug} agent={agentCard(a, lang)} variant="full" delay={idx * 0.03} />
            ))}
            <TileLink {...c.grid.tile} delay={0.24} />
          </div>
        </div>
      </section>

      <section className="fc-section-tight" data-testid="hub-tratti">
        <div className="fc-container">
          <SectionHead eyebrow={c.tratti.eyebrow} heading={c.tratti.heading} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.tratti.items} cols={2} testid="hub-tratti-items" />
          </div>
        </div>
      </section>

      <MethodSteps
        id="metodo"
        eyebrow={t.method.eyebrow}
        heading={c.metodo.heading}
        steps={t.method.steps.map((s, i) => ({ n: s.n, title: s.title, body: c.metodo.steps[i] }))}
        note={c.metodo.note}
        testid="hub-method"
      />

      <section className="fc-section-tight" data-testid="hub-perchi">
        <div className="fc-container">
          <SectionHead eyebrow={c.perChi.eyebrow} heading={c.perChi.heading} lead={c.perChi.lead} className="max-w-[62ch]" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="flex flex-col gap-5">
              {c.perChi.roles.map((r, idx) => (
                <Reveal key={r.head} delay={idx * 0.04}>
                  <p className="fc-small">
                    <span className="font-medium">{r.head}</span>
                    <span className="fc-muted">{` — ${r.body}`}</span>
                  </p>
                </Reveal>
              ))}
            </div>
            <SectorPills items={c.perChi.pills} ctaLabel={t.cta.allIndustries} ctaHref="/settori" />
          </div>
        </div>
      </section>

      <TrustStrip eyebrow={c.trust.eyebrow} heading={c.trust.heading} />
      <Faq eyebrow={c.faq.eyebrow} heading={c.faq.heading} items={c.faq.items} testid="hub-faq" />
      <CtaBand eyebrow={c.cta.eyebrow} heading={c.cta.heading} body={c.cta.body} />
    </>
  );
}
