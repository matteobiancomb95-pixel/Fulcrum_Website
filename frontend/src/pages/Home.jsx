import React from "react";
import { Seo } from "../components/fx/Seo";
import { Sign } from "../components/fx/Sign";
import { L, Reveal, SectionHead, ArrowLink } from "../components/fx/Bits";
import { ProofStrip, TrustStrip, TechStrip, SectorPills } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { AgentCard, TileLink } from "../components/fx/AgentCard";
import { CtaBand } from "../components/fx/CtaBand";
import { HOME } from "../content/pages/home";
import { AGENTS, agentCard, agentBySlug, agentHref } from "../content/agents";
import { useLang } from "../i18n";

const Hero = ({ c, t }) => (
  <section id="contenuto" className="pt-[calc(var(--fc-header-h)+clamp(56px,8vw,112px))] pb-[clamp(56px,8vw,112px)]">
    <div className="fc-container">
      <div className="grid items-center gap-12 lg:grid-cols-[8fr_4fr]">
        <div>
          <Reveal as="p" className="fc-eyebrow">{c.hero.eyebrow}</Reveal>
          <Reveal delay={0.05}>
            <h1 className="fc-h1 mt-5">{c.hero.h1}</h1>
          </Reveal>
          <Reveal as="p" className="fc-lead mt-7 max-w-[52ch]" delay={0.1}>{c.hero.lead}</Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <L to="/contatti" className="fc-btn fc-btn-primary" data-testid="hero-cta-primary">{t.cta.call}</L>
              <ArrowLink to="/ai-adoption" testid="hero-cta-secondary">{c.hero.secondary}</ArrowLink>
            </div>
          </Reveal>
        </div>
        <div className="order-first lg:order-none max-w-[220px] lg:max-w-[380px]">
          <Sign variant="base" />
        </div>
      </div>
    </div>
  </section>
);

const Principio = ({ c }) => (
  <section className="fc-section" data-testid="home-principio">
    <div className="fc-container">
      <SectionHead eyebrow={c.principio.eyebrow} heading={c.principio.heading} lead={c.principio.lead} className="max-w-[62ch]" />
      <div className="mt-14 grid gap-10 lg:grid-cols-3">
        {c.principio.items.map((i, idx) => (
          <Reveal key={i.head} delay={idx * 0.05}>
            <div className="pt-6" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
              <p className="fc-eyebrow" style={{ color: "var(--fc-accent)" }}>{i.eyebrow}</p>
              <h3 className="fc-h3 mt-4">{i.head}</h3>
              <p className="fc-small fc-muted mt-3">{i.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

const Settori = ({ c, lang }) => (
  <section className="fc-section" data-testid="home-settori">
    <div className="fc-container">
      <SectionHead eyebrow={c.settori.eyebrow} heading={c.settori.heading} lead={c.settori.lead} className="max-w-[62ch]" />
      <div className="mt-14 grid gap-8 sm:grid-cols-2">
        {c.settori.cards.map((s, idx) => (
          <Reveal key={s.name} delay={idx * 0.04}>
            <div className="fc-card">
              <h3 className="fc-h3">{s.name}</h3>
              <p className="fc-small fc-muted">{s.line}</p>
              <div className="mt-auto flex flex-col gap-2 pt-4">
                {s.agents.map((slug) => (
                  <L key={slug} to={agentHref(slug)} className="fc-arrow" data-testid={`home-settore-agent-${slug}`}>
                    <span>{agentBySlug(slug)?.name}</span>
                  </L>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12">
        <SectorPills items={c.settori.pills} ctaLabel={lang === "en" ? "All industries" : "Tutti i settori"} ctaHref="/settori" />
      </div>
    </div>
  </section>
);

export default function Home() {
  const { lang, t } = useLang();
  const c = HOME[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <Hero c={c} t={t} />
      <ProofStrip eyebrow={c.proof.eyebrow} heading={c.proof.heading} lead={c.proof.lead} items={c.proof.items} testid="home-proof" />
      <Principio c={c} />

      <section className="fc-section" data-testid="home-offerta">
        <div className="fc-container">
          <SectionHead eyebrow={c.offerta.eyebrow} heading={c.offerta.heading} lead={c.offerta.lead} className="max-w-[62ch]" />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {AGENTS.map((a, idx) => (
              <AgentCard key={a.slug} agent={agentCard(a, lang)} delay={idx * 0.03} />
            ))}
            {c.offerta.tiles.map((tile, idx) => (
              <TileLink key={tile.href} {...tile} delay={(AGENTS.length + idx) * 0.03} />
            ))}
          </div>
        </div>
      </section>

      <MethodSteps
        eyebrow={t.method.eyebrow}
        heading={c.metodo.heading}
        steps={t.method.steps.map((s) => ({ n: s.n, title: s.title, body: s.short }))}
        note={c.metodo.note}
        cta={c.metodo.cta}
        testid="home-method"
      />

      <Settori c={c} lang={lang} />
      <TrustStrip eyebrow={t.trust.eyebrow} heading={c.trust.heading} />
      <TechStrip />
      <CtaBand heading={c.cta.heading} body={c.cta.body} />
    </>
  );
}
