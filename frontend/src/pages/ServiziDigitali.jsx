import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { usePages } from "../content/pages";
import { PageHero } from "../components/site/PageHero";
import { CtaBand } from "../components/site/CtaBand";
import { reveal, stagger, viewportOnce } from "../lib/motion";

export default function ServiziDigitali() {
  const p = usePages().serviziDigitali;
  return (
    <>
      <PageHero eyebrow={p.eyebrow} title={p.title} lead={p.lead} />

      <section data-testid="digital-services" className="section-y">
        <div className="fx-container">
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid md:grid-cols-3 gap-6">
            {p.services.map((s, i) => (
              <motion.article key={i} variants={reveal} data-testid={`digital-service-${i}`} className="rounded-[20px] border hairline p-8 flex flex-col transition-transform duration-300 hover:-translate-y-1" style={{ borderWidth: 1 }}>
                <h3 className="m-0" style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{s.title}</h3>
                <p className="mt-3" style={{ color: "var(--muted)" }}>{s.desc}</p>
                <ul className="mt-6 flex flex-col gap-3">
                  {s.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3 text-[0.95rem]">
                      <Check size={18} color="var(--cta)" className="mt-0.5 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section data-testid="digital-process" className="section-y border-t hairline">
        <div className="fx-container">
          <motion.h2 variants={reveal} initial="hidden" whileInView="show" viewport={viewportOnce} className="h2 max-w-[14ch] mb-14">{p.processTitle}</motion.h2>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-8">
            {p.process.map((m) => (
              <motion.div key={m.n} variants={reveal}>
                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full text-[0.75rem] font-medium" style={{ background: "var(--cta)", color: "var(--copy-on-cta)" }}>{m.n}</span>
                <h3 className="mt-5 m-0" style={{ fontSize: "1.15rem", fontWeight: 700 }}>{m.title}</h3>
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
