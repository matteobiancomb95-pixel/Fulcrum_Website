import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
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
  const s = t.sectors;
  return (
    <section id="settori-preview" data-testid="sectors" className="section-y">
      <div className="mb-16 md:mb-24">
        <MarqueeRow words={s.marquee} />
      </div>
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <div className="grid lg:grid-cols-[1fr_1fr] gap-8 lg:gap-16 items-end mb-12">
            <div>
              <motion.p variants={reveal} className="eyebrow mb-4">{s.eyebrow}</motion.p>
              <motion.h2 variants={reveal} className="h2 max-w-[16ch]">{s.heading}</motion.h2>
            </div>
            <motion.p variants={reveal} className="text-lg" style={{ color: "var(--muted)" }}>{s.lead}</motion.p>
          </div>

          <motion.div variants={stagger} className="flex flex-wrap gap-3">
            {s.list.map((name, i) => (
              <motion.span
                key={name}
                variants={reveal}
                data-testid={`sector-${i}`}
                tabIndex={0}
                className="inline-flex items-center rounded-full border px-6 py-3 font-medium cursor-default transition-colors duration-300"
                style={{ borderColor: "var(--copy)", borderWidth: 1.5 }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "var(--cta)"; e.currentTarget.style.color = "var(--copy-on-cta)"; e.currentTarget.style.borderColor = "var(--cta)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--copy)"; e.currentTarget.style.borderColor = "var(--copy)"; }}
              >
                {name}
              </motion.span>
            ))}
          </motion.div>

          <motion.div variants={reveal} className="mt-10">
            <Link to={s.ctaHref} data-testid="sectors-explore" className="group inline-flex items-center gap-2 font-medium" style={{ color: "var(--cta)" }}>
              {s.ctaLabel}
              <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
