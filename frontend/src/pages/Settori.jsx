import React from "react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { L, Reveal, SectionHead, ArrowLink } from "../components/fx/Bits";
import { TriList } from "../components/fx/BlockGrid";
import { CtaBand } from "../components/fx/CtaBand";
import { SETTORI } from "../content/pages/settori";
import { agentBySlug, agentHref } from "../content/agents";
import { useLang } from "../i18n";

const AgentLinks = ({ slugs, testidPrefix }) => (
  <div className="flex flex-col gap-2">
    {slugs.map((slug) => (
      <L key={slug} to={agentHref(slug)} className="fc-arrow" data-testid={`${testidPrefix}-${slug}`}>
        <span>{agentBySlug(slug)?.name}</span>
      </L>
    ))}
  </div>
);

const PriorityCard = ({ card, labels, delay }) => (
  <Reveal delay={delay} className="h-full">
    <div className="fc-card" data-testid={`settore-${card.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}>
      <h3 className="fc-h3">{card.name}</h3>
      <p className="fc-small fc-muted">{card.intro}</p>
      <p className="fc-eyebrow mt-4">{labels.caricoLabel}</p>
      <TriList items={card.carico} />
      <p className="fc-eyebrow mt-4">{labels.agentiLabel}</p>
      <AgentLinks slugs={card.agents} testidPrefix="settore-agent" />
      <p className="fc-eyebrow mt-4">{labels.vincoliLabel}</p>
      <p className="fc-small fc-muted">{card.vincoli}</p>
    </div>
  </Reveal>
);

export default function Settori() {
  const { lang, t } = useLang();
  const c = SETTORI[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primary={{ label: t.cta.call, href: "/contatti" }}
        secondary={{ label: t.cta.allAgents, href: "/ai-adoption" }}
      />

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="settori-prioritari">
        <div className="fc-container">
          <SectionHead eyebrow={c.prioritari.eyebrow} heading={c.prioritari.heading} lead={c.prioritari.lead} className="max-w-[62ch]" />
          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {c.prioritari.cards.map((card, idx) => (
              <PriorityCard key={card.name} card={card} labels={c.prioritari} delay={idx * 0.04} />
            ))}
          </div>
          <p className="fc-small fc-muted mt-10 max-w-[68ch]">{c.prioritari.note}</p>
        </div>
      </section>

      <section className="fc-section" data-testid="settori-altri">
        <div className="fc-container">
          <SectionHead eyebrow={c.altri.eyebrow} heading={c.altri.heading} lead={c.altri.lead} className="max-w-[62ch]" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {c.altri.cards.map((card, idx) => (
              <Reveal key={card.name} delay={idx * 0.04} className="h-full">
                <div className="fc-card">
                  <h3 className="fc-h4">{card.name}</h3>
                  <p className="fc-small fc-muted">{card.line}</p>
                  <div className="mt-auto pt-4">
                    <AgentLinks slugs={card.agents} testidPrefix="settore-altro-agent" />
                    {card.note && <p className="fc-caption mt-4">{card.note}</p>}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10">
            <ArrowLink to={c.altri.cta.href} testid="settori-enterprise-cta">{c.altri.cta.label}</ArrowLink>
          </div>
        </div>
      </section>

      <section className="fc-section-tight" data-testid="settori-contesto">
        <div className="fc-container">
          <div className="grid gap-12 lg:grid-cols-2">
            <SectionHead eyebrow={c.contesto.eyebrow} heading={c.contesto.heading} />
            <div>
              <p className="fc-lead">{c.contesto.lead}</p>
              <TriList items={c.contesto.items} className="mt-8" />
              <p className="fc-small fc-muted mt-8">{c.contesto.note}</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand eyebrow={c.cta.eyebrow} heading={c.cta.heading} body={c.cta.body} />
    </>
  );
}
