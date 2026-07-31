import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { METRICS } from "../../data";
import { reveal, stagger, viewportOnce } from "../../lib/motion";

const Counter = ({ value, prefix, suffix, active }) => {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return;
    let raf;
    const start = performance.now();
    const dur = 1400;
    const tick = (t) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, value]);
  return (
    <span>
      {prefix}
      {n}
      {suffix}
    </span>
  );
};

export const Impact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <section id="impact" data-testid="impact" ref={ref} className="border-y hairline">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        className="fx-container grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 py-16 md:py-20"
      >
        {METRICS.map((m, i) => (
          <motion.div key={i} variants={reveal} data-testid={`metric-${i}`} className="flex flex-col">
            <span
              className="tabular-nums"
              style={{ color: "var(--cta)", fontWeight: 700, fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.03em", lineHeight: 1 }}
            >
              <Counter {...m} active={inView} />
            </span>
            <span className="mt-3 text-[0.95rem]" style={{ color: "var(--copy)" }}>
              {m.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
