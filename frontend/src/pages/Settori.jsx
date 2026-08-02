import React from "react";
import { motion } from "framer-motion";
import { usePages } from "../content/pages";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";
import { reveal, stagger, viewportOnce } from "../lib/motion";

export default function Settori() {
  const p = usePages().settori;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} stats={p.stats} />

      <section data-testid="sectors-list" className="section-y">
        <div className="fx-container grid gap-6">
          {p.list.map((s, i) => (
            <motion.article
              key={s.name}
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              data-testid={`sector-detail-${i}`}
              className="rounded-[20px] border hairline p-8 md:p-10 grid lg:grid-cols-[0.9fr_1.1fr] gap-6 lg:gap-12 transition-transform duration-300 hover:-translate-y-1"
              style={{ borderWidth: 1 }}
            >
              <div>
                <motion.span variants={reveal} className="tabular-nums text-sm font-medium" style={{ color: "var(--cta)" }}>{String(i + 1).padStart(2, "0")}</motion.span>
                <motion.h2 variants={reveal} className="mt-2 m-0" style={{ fontSize: "clamp(1.5rem,2.5vw,2rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{s.name}</motion.h2>
                <motion.p variants={reveal} className="mt-4" style={{ color: "var(--muted)" }}>{s.desc}</motion.p>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div variants={reveal}>
                  <p className="eyebrow mb-2">{p.adoptionLabel}</p>
                  <p className="text-[0.95rem]" style={{ color: "var(--muted)" }}>{s.adoption}</p>
                </motion.div>
                <motion.div variants={reveal}>
                  <p className="eyebrow mb-2">{p.agentsLabel}</p>
                  <p className="text-[0.95rem]" style={{ color: "var(--muted)" }}>{s.agents}</p>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <CtaBand title={p.ctaTitle} text={p.ctaText} />
    </>
  );
}
