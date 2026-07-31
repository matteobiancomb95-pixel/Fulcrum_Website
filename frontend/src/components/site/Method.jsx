import React from "react";
import { motion } from "framer-motion";
import { METHOD } from "../../data";
import { reveal, stagger, viewportOnce } from "../../lib/motion";

export const Method = () => (
  <section id="chi-siamo" data-testid="method" className="section-y border-t hairline">
    <div className="fx-container">
      <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
        <motion.p variants={reveal} className="eyebrow mb-4">Il metodo</motion.p>
        <motion.h2 variants={reveal} className="h2 max-w-[16ch]">Dall'assessment all'adozione quotidiana.</motion.h2>

        <div className="relative mt-16">
          {/* connecting line */}
          <div className="hidden md:block absolute top-[14px] left-0 right-0 h-[2px]" style={{ background: "var(--hairline)" }} />
          <motion.div
            variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] } } }}
            className="hidden md:block absolute top-[14px] left-0 right-0 h-[2px] origin-left"
            style={{ background: "var(--cta)" }}
          />

          <div className="grid md:grid-cols-4 gap-y-12 gap-x-8">
            {METHOD.map((m) => (
              <motion.div key={m.n} variants={reveal} data-testid={`method-${m.n}`} className="relative">
                <span className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full text-[0.75rem] font-medium" style={{ background: "var(--cta)", color: "var(--copy-on-cta)" }}>
                  {m.n}
                </span>
                <h3 className="mt-6 m-0" style={{ fontSize: "1.35rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{m.title}</h3>
                <p className="mt-2.5 text-[0.95rem]" style={{ color: "var(--muted)" }}>{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
