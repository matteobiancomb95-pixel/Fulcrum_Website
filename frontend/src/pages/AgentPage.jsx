import React from "react";
import { useParams } from "react-router-dom";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { SectionHead } from "../components/fx/Bits";
import { BlockGrid, TriList } from "../components/fx/BlockGrid";
import { TrustStrip } from "../components/fx/Strips";
import { Scenario } from "../components/fx/Scenario";
import { AgentCard } from "../components/fx/AgentCard";
import { CtaBand } from "../components/fx/CtaBand";
import { Faq } from "../components/fx/Faq";
import { AGENT_CONTENT } from "../content/agents/content";
import { agentBySlug, agentCard } from "../content/agents";
import { useLang } from "../i18n";
import NotFound from "./NotFound";

const PerChi = ({ c, t, lang }) => (
  <section className="fc-section-tight" data-testid="agent-perchi">
    <div className="fc-container">
      <SectionHead heading={c.heading} lead={c.lead} className="max-w-[62ch]" />
      <div className="mt-12 grid gap-12 lg:grid-cols-2">
        <div>
          <p className="fc-eyebrow mb-5">{lang === "en" ? "Functions" : "Funzioni"}</p>
          <TriList items={c.funzioni} />
        </div>
        <div>
          <p className="fc-eyebrow mb-5">{lang === "en" ? "Industries" : "Settori"}</p>
          <TriList items={c.settori} />
        </div>
      </div>
      <p className="fc-small fc-muted mt-10 max-w-[62ch]">{c.dimensione}</p>
      <div className="mt-8 pt-6 max-w-[62ch]" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
        <p className="fc-eyebrow" style={{ color: "var(--fc-accent)" }}>{t.whenNot}</p>
        <p className="fc-small fc-muted mt-3">{c.whenNot}</p>
      </div>
    </div>
  </section>
);

export default function AgentPage() {
  const { slug } = useParams();
  const { lang, t } = useLang();
  const agent = agentBySlug(slug);
  const doc = AGENT_CONTENT[slug];

  if (!agent || !doc) return <NotFound />;
  const c = doc[lang];
  const meta = agent[lang];
  const related = agent.related.map(agentBySlug).filter(Boolean);

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={meta.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        long
        sign={agent.sign}
        breadcrumb={{ label: "AI Adoption", href: "/ai-adoption", current: agent.name }}
        primary={{ label: t.cta.demo, href: "/contatti" }}
        secondary={{ label: t.cta.allAgents, href: "/ai-adoption" }}
      />

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="agent-problema">
        <div className="fc-container">
          <SectionHead heading={c.problema.heading} lead={c.problema.lead} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.problema.blocks} cols={3} testid="agent-problema-blocks" />
          </div>
        </div>
      </section>

      <section className="fc-section" data-testid="agent-capacita">
        <div className="fc-container">
          <SectionHead heading={c.capacita.heading} lead={c.capacita.lead} className="max-w-[62ch]" />
          <div className="mt-14">
            <BlockGrid items={c.capacita.items} cols={3} testid="agent-capacita-items" />
          </div>
        </div>
      </section>

      <section className="fc-section-tight" data-testid="agent-integrazione">
        <div className="fc-container">
          <SectionHead heading={c.integrazione.heading} className="max-w-[62ch]" />
          <div className="mt-12">
            <BlockGrid items={c.integrazione.blocks} cols={2} testid="agent-integrazione-blocks" />
          </div>
        </div>
      </section>

      <section className="fc-section" data-testid="agent-cosa-cambia">
        <div className="fc-container">
          <SectionHead heading={c.cosaCambia.heading} lead={c.cosaCambia.lead} className="max-w-[62ch]" />
          <div className="mt-12 flex flex-col gap-8">
            {c.cosaCambia.scenarios.map((s) => (
              <Scenario key={s.title} title={s.title} today={s.today} withAgent={s.withAgent} testid="agent-scenario" />
            ))}
          </div>
          <div className="mt-14 max-w-[62ch]">
            <h3 className="fc-h4">{t.kpiHeading}</h3>
            <TriList items={c.cosaCambia.kpi} className="mt-5" />
            <p className="fc-caption mt-5">{t.kpiNote}</p>
          </div>
        </div>
      </section>

      <PerChi c={c.perChi} t={t} lang={lang} />
      <TrustStrip eyebrow={t.trust.eyebrow} heading={c.sicurezza.heading} note={c.sicurezza.note} />
      <Faq heading={c.faq.heading} items={c.faq.items} testid="agent-faq" />
      <CtaBand heading={c.cta.heading} body={c.cta.body} ctaLabel={t.cta.demo} />

      <section className="fc-section-tight" data-testid="agent-related">
        <div className="fc-container">
          <SectionHead heading={t.otherAgents} className="max-w-[62ch]" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((r, idx) => (
              <AgentCard key={r.slug} agent={agentCard(r, lang)} delay={idx * 0.04} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
