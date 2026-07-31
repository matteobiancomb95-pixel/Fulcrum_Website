import React, { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { FulcrumMark } from "./Logo";
import { useLang } from "../../i18n";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.15 } },
};
const line = {
  hidden: { y: "110%" },
  show: { y: "0%", transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] } },
};
const fade = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export const Hero = () => {
  const { t } = useLang();
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 180]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 8]);

  const go = (href) => document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" ref={ref} data-testid="hero" className="relative min-h-[100svh] flex items-center overflow-hidden">
      <motion.div
        style={{ y: y1, rotate: rot }}
        className="pointer-events-none absolute right-[-14%] top-1/2 -translate-y-1/2 hidden md:block"
        aria-hidden="true"
      >
        <FulcrumMark size={720} color="var(--cta)" />
      </motion.div>
      <div className="pointer-events-none absolute right-[-30%] bottom-[-10%] md:hidden opacity-90" aria-hidden="true">
        <FulcrumMark size={360} color="var(--cta)" />
      </div>

      <div className="fx-container relative z-10 pt-28 pb-16">
        <motion.p initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="eyebrow mb-6">
          {t.hero.eyebrow}
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="m-0 max-w-[16ch]"
          style={{ fontSize: "var(--hero)", fontWeight: 700, letterSpacing: "-0.03em", lineHeight: 1.05 }}
        >
          {t.hero.lines.map((l, i) => (
            <span key={i} className="block overflow-hidden">
              <motion.span variants={line} className="block" style={{ color: i === 1 ? "var(--cta)" : "var(--copy)" }}>
                {l}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p variants={fade} initial="hidden" animate="show" transition={{ delay: 0.5 }} className="mt-7 max-w-[46ch] text-lg" style={{ color: "var(--muted)" }}>
          {t.hero.sub}
        </motion.p>

        <motion.div variants={fade} initial="hidden" animate="show" transition={{ delay: 0.62 }} className="mt-10 flex flex-wrap items-center gap-4">
          <button data-testid="hero-cta-primary" onClick={() => go("#parliamone")} className="btn btn-primary">
            {t.hero.ctaPrimary}
          </button>
          <button data-testid="hero-cta-secondary" onClick={() => go("#servizi")} className="btn btn-ghost">
            {t.hero.ctaSecondary}
          </button>
        </motion.div>
      </div>

      <motion.button onClick={() => go("#impact")} aria-label="Scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <motion.span animate={reduce ? {} : { y: [0, 8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} className="block" style={{ color: "var(--faint)" }}>
          <ArrowDown size={22} />
        </motion.span>
      </motion.button>
    </section>
  );
};
