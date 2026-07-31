import React from "react";
import { motion } from "framer-motion";
import { useLang } from "../../i18n";
import { reveal, stagger, viewportOnce } from "../../lib/motion";
import { FulcrumMark } from "./Logo";

const MarqueeRow = ({ words }) => {
  const seq = [...words, ...words, ...words, ...words];
  return (
    <div className="marquee-track overflow-hidden select-none py-2 border-y hairline" aria-hidden="true">
      <div className="marquee">
        {[0, 1].map((k) => (
          <div key={k} className="flex items-center shrink-0">
            {seq.map((w, i) => (
              <span key={`${k}-${i}`} className="flex items-center shrink-0">
                <span style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)", fontWeight: 700, letterSpacing: "-0.02em", color: i % 2 ? "var(--cta)" : "var(--copy)" }}>
                  {w}
                </span>
                <FulcrumMark size={30} color="var(--cta)" className="mx-8 md:mx-12" />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const Sectors = () => {
  const { t } = useLang();
  return (
    <section id="settori" data-testid="sectors" className="section-y">
      <div className="mb-16 md:mb-24">
        <MarqueeRow words={t.sectors.marquee} />
      </div>
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p variants={reveal} className="eyebrow mb-4">{t.sectors.eyebrow}</motion.p>
          <motion.h2 variants={reveal} className="h2 max-w-[18ch]">{t.sectors.heading}</motion.h2>

          <motion.div variants={stagger} className="mt-12 flex flex-wrap gap-3">
            {t.sectors.list.map((s, i) => (
              <motion.span
                key={s}
                variants={reveal}
                data-testid={`sector-${i}`}
                tabIndex={0}
                className="inline-flex items-center rounded-full border px-6 py-3 font-medium cursor-default transition-colors duration-300"
                style={{ borderColor: "var(--copy)", borderWidth: 1.5 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cta)"; e.currentTarget.style.color = "var(--copy-on-cta)"; e.currentTarget.style.borderColor = "var(--cta)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--copy)"; e.currentTarget.style.borderColor = "var(--copy)"; }}
              >
                {s}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
