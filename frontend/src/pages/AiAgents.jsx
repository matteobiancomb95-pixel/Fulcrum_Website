import React from "react";
import { motion } from "framer-motion";
import { usePages } from "../content/pages";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";
import { reveal, stagger, viewportOnce } from "../lib/motion";

export default function AiAgents() {
  const p = usePages().aiAgents;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <section data-testid="agents-categories" className="section-y">
        <div className="fx-container">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="h2 max-w-[16ch]">{p.categoriesTitle}</motion.h2>
            <motion.div variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="flex flex-wrap gap-4">
              {p.legend.map((l) => (
                <span key={l.mark} className="inline-flex items-center gap-2 text-sm" style={{ color: "var(--muted)" }}>
                  <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: "var(--cta)", opacity: l.mark === "core" ? 1 : 0.4 }} />
                  {l.label}
                </span>
              ))}
            </motion.div>
          </div>

          <div className="grid gap-12">
            {p.categories.map((cat, ci) => (
              <motion.div key={ci} variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} data-testid={`agent-category-${ci}`}>
                <motion.div variants={reveal} className="flex items-baseline gap-4 mb-6">
                  <span className="tabular-nums text-sm font-medium" style={{ color: "var(--cta)" }}>{String(ci + 1).padStart(2, "0")}</span>
                  <h3 className="m-0" style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{cat.name}</h3>
                </motion.div>
                <div className="grid md:grid-cols-2 gap-6">
                  {cat.cases.map((uc, ui) => (
                    <motion.article key={ui} variants={reveal} data-testid={`use-case-${ci}-${ui}`} className="rounded-[20px] border hairline p-7 flex flex-col transition-transform duration-300 hover:-translate-y-1" style={{ borderWidth: 1 }}>
                      <h4 className="m-0" style={{ fontSize: "1.15rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{uc.title}</h4>
                      <p className="mt-3 flex-1" style={{ color: "var(--muted)" }}>{uc.desc}</p>
                      {uc.core.length > 0 && (
                        <div className="mt-5">
                          <p className="eyebrow mb-2">{p.coreLabel}</p>
                          <div className="flex flex-wrap gap-2">
                            {uc.core.map((c) => (
                              <span key={c} className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" style={{ background: "rgba(91,61,245,0.08)", color: "var(--cta)" }}>{c}</span>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={p.ctaTitle} text={p.ctaText} />
    </>
  );
}
