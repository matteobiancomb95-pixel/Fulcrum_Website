import React from "react";
import { motion } from "framer-motion";
import { usePages } from "../content/pages";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";
import { Trust } from "../components/site/Trust";
import { reveal, stagger, viewportOnce } from "../lib/motion";

export default function ChiSiamo() {
  const p = usePages().chiSiamo;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} stats={p.stats} />

      <section data-testid="about-mission" className="section-y">
        <div className="fx-container grid md:grid-cols-2 gap-10 lg:gap-16">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.p variants={reveal} className="eyebrow mb-4">{p.missionTitle}</motion.p>
            <motion.p variants={reveal} className="m-0" style={{ fontSize: "clamp(1.35rem,2.2vw,1.75rem)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.35 }}>{p.missionText}</motion.p>
          </motion.div>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
            <motion.p variants={reveal} className="eyebrow mb-4">{p.visionTitle}</motion.p>
            <motion.p variants={reveal} className="m-0" style={{ fontSize: "clamp(1.35rem,2.2vw,1.75rem)", fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.35 }}>{p.visionText}</motion.p>
          </motion.div>
        </div>
      </section>

      <section data-testid="about-approach" className="section-y border-t hairline">
        <div className="fx-container">
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="h2 max-w-[14ch] mb-12">{p.approachTitle}</motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid sm:grid-cols-2 gap-x-8 gap-y-12">
            {p.approach.map((a, i) => (
              <motion.div key={i} variants={reveal} data-testid={`approach-${i}`}>
                <h3 className="m-0" style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{a.title}</h3>
                <p className="mt-3 max-w-[46ch]" style={{ color: "var(--muted)" }}>{a.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-20 max-w-[70ch]">
            <motion.p variants={reveal} className="eyebrow mb-4">{p.techTitle}</motion.p>
            <motion.p variants={reveal} className="text-lg" style={{ color: "var(--muted)" }}>{p.techText}</motion.p>
          </motion.div>
        </div>
      </section>

      <Trust />
      <CtaBand title={p.ctaTitle} text={p.ctaText} />
    </>
  );
}
