import React from "react";
import { motion } from "framer-motion";
import { reveal, stagger } from "../../lib/motion";

export const PageHero = ({ eyebrow, title, lead, stats }) => (
  <section className="pt-36 md:pt-44 pb-8 md:pb-12">
    <div className="fx-container">
      <motion.div variants={stagger} initial="hidden" animate="show">
        <motion.p variants={reveal} className="eyebrow mb-5">{eyebrow}</motion.p>
        <motion.h1
          variants={reveal}
          className="m-0 max-w-[20ch]"
          style={{ fontSize: "var(--hero)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05, paddingBottom: "0.05em" }}
        >
          {title}
        </motion.h1>
        {lead && (
          <motion.p variants={reveal} className="mt-7 max-w-[62ch] text-lg" style={{ color: "var(--muted)" }}>
            {lead}
          </motion.p>
        )}
        {stats && (
          <motion.div variants={reveal} className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t hairline pt-10">
            {stats.map((s, i) => (
              <div key={i} data-testid={`page-stat-${i}`}>
                <div style={{ color: "var(--cta)", fontWeight: 700, fontSize: "clamp(1.75rem,3vw,2.5rem)", letterSpacing: "-0.02em", lineHeight: 1 }}>{s.value}</div>
                <div className="mt-2 text-[0.95rem]" style={{ color: "var(--muted)" }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        )}
      </motion.div>
    </div>
  </section>
);
