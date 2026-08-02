import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePages } from "../content/pages";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";
import { reveal, stagger, viewportOnce } from "../lib/motion";

export default function AiAdoption() {
  const p = usePages().aiAdoption;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} stats={p.stats} />

      <section data-testid="adoption-programs" className="section-y">
        <div className="fx-container">
          <motion.p variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="eyebrow mb-10">{p.programsTitle}</motion.p>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid md:grid-cols-2 gap-6">
            {p.programs.map((pr, i) => (
              <motion.article key={i} variants={reveal} data-testid={`program-${i}`} className="rounded-[20px] border hairline p-8 md:p-10 transition-transform duration-300 hover:-translate-y-1" style={{ borderWidth: 1 }}>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full" style={{ background: "var(--cta)", color: "var(--copy-on-cta)", fontWeight: 700 }}>{i + 1}</span>
                <h3 className="mt-6 m-0" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{pr.title}</h3>
                <p className="mt-3" style={{ color: "var(--muted)" }}>{pr.desc}</p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section data-testid="adoption-method" className="section-y border-t hairline">
        <div className="fx-container">
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="h2 max-w-[16ch] mb-14">{p.methodTitle}</motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid md:grid-cols-4 gap-y-10 gap-x-8">
            {p.method.map((m) => (
              <motion.div key={m.n} variants={reveal}>
                <span className="tabular-nums font-medium" style={{ color: "var(--cta)" }}>{m.n}</span>
                <h3 className="mt-3 m-0" style={{ fontSize: "1.2rem", fontWeight: 700 }}>{m.title}</h3>
                <p className="mt-2 text-[0.95rem]" style={{ color: "var(--muted)" }}>{m.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CtaBand title={p.ctaTitle} text={p.ctaText} />
    </>
  );
}
