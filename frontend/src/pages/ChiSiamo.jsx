import React from "react";
import { Linkedin, Instagram } from "lucide-react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { Reveal, SectionHead } from "../components/fx/Bits";
import { ProofStrip, TrustStrip, TechStrip } from "../components/fx/Strips";
import { MethodSteps } from "../components/fx/MethodSteps";
import { CtaBand } from "../components/fx/CtaBand";
import { CHISIAMO } from "../content/pages/chisiamo";
import { LINKEDIN, INSTAGRAM } from "../content/site";
import { useLang } from "../i18n";

export default function ChiSiamo() {
  const { lang, t } = useLang();
  const c = CHISIAMO[lang];

  return (
    <>
      <Seo title={c.meta.title} description={c.meta.description} />
      <PageHero
        eyebrow={c.hero.eyebrow}
        h1={c.hero.h1}
        lead={c.hero.lead}
        primary={{ label: t.cta.call, href: "/contatti" }}
      >
        <div className="mt-8 flex gap-3">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            data-testid="about-linkedin"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline transition-colors hover:border-[var(--fc-accent)] hover:text-[var(--fc-accent)]"
            style={{ borderWidth: 1 }}
          >
            <Linkedin size={18} />
          </a>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            data-testid="about-instagram"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border hairline transition-colors hover:border-[var(--fc-accent)] hover:text-[var(--fc-accent)]"
            style={{ borderWidth: 1 }}
          >
            <Instagram size={18} />
          </a>
        </div>
      </PageHero>

      <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid="about-mission">
        <div className="fc-container">
          <SectionHead eyebrow={c.missionVision.eyebrow} heading={c.missionVision.heading} className="max-w-[62ch]" />
          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            {[c.missionVision.mission, c.missionVision.vision].map((b, idx) => (
              <Reveal key={b.label} delay={idx * 0.06}>
                <div className="pt-6" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
                  <p className="fc-eyebrow" style={{ color: "var(--fc-accent)" }}>{b.label}</p>
                  <p className="fc-lead mt-4" style={{ color: "var(--fc-copy)" }}>{b.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProofStrip eyebrow={c.approccio.eyebrow} heading={c.approccio.heading} items={c.approccio.items} testid="about-approccio" />

      <MethodSteps
        eyebrow={c.metodo.eyebrow}
        heading={c.metodo.heading}
        steps={c.metodo.steps}
        note={c.metodo.note}
        cta={c.metodo.cta}
        testid="about-method"
      />

      <TechStrip />
      <TrustStrip eyebrow={c.trust.eyebrow} heading={c.trust.heading} />
      <CtaBand eyebrow={c.cta.eyebrow} heading={c.cta.heading} body={c.cta.body} />
    </>
  );
}
