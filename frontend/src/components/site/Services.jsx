import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLang } from "../../i18n";
import { reveal, stagger, viewportOnce } from "../../lib/motion";
import { FulcrumMark } from "./Logo";

export const Services = () => {
  const { t } = useLang();

  return (
    <section id="servizi" data-testid="services" className="section-y">
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-[62ch]">
          <motion.p variants={reveal} className="eyebrow mb-6">{t.manifesto.eyebrow}</motion.p>
          <div className="grid gap-8 md:gap-6">
            {t.manifesto.items.map((m) => (
              <motion.div key={m.n} variants={reveal} className="flex gap-5 md:gap-7 items-baseline">
                <span className="tabular-nums shrink-0 font-medium" style={{ color: "var(--cta)", fontSize: "0.95rem" }}>{m.n}</span>
                <p className="m-0" style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.75rem)", fontWeight: 500, letterSpacing: "-0.01em" }}>
                  <span>{m.head}</span>{" "}
                  <span style={{ color: "var(--muted)", fontWeight: 400 }}>{m.body}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="mt-20 md:mt-28">
          <motion.div variants={reveal} className="flex items-end justify-between flex-wrap gap-4 mb-10">
            <div>
              <p className="eyebrow mb-4">{t.services.eyebrow}</p>
              <h2 className="h2 max-w-[14ch]">{t.services.heading}</h2>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.services.cards.map((s, i) => (
              <motion.article
                key={i}
                variants={reveal}
                data-testid={`service-card-${i}`}
                className="group relative rounded-[20px] border hairline bg-white p-8 md:p-10 flex flex-col transition-transform duration-300 hover:-translate-y-1"
                style={{ borderWidth: 1 }}
              >
                <div className="flex items-start justify-between">
                  <p className="eyebrow">{s.eyebrow}</p>
                  <FulcrumMark size={28} color="var(--cta)" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="mt-3 m-0" style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {s.title}
                </h3>
                <p className="mt-4 max-w-[42ch]" style={{ color: "var(--muted)" }}>{s.desc}</p>

                <ul className="mt-7 flex flex-col gap-3.5 flex-1">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3">
                      <span className="inline-block h-[7px] w-[7px] rounded-full shrink-0" style={{ background: "var(--cta)" }} />
                      <span className="font-medium">{it}</span>
                    </li>
                  ))}
                </ul>

                <Link to={s.href} data-testid={`service-link-${i}`} className="mt-9 inline-flex items-center gap-2 font-medium self-start" style={{ color: "var(--cta)" }}>
                  {s.link}
                  <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
