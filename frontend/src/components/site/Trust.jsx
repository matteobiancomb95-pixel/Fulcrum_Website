import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Scale, MapPin, ScrollText, UserCheck, ClipboardCheck } from "lucide-react";
import { useLang } from "../../i18n";
import { reveal, stagger, viewportOnce } from "../../lib/motion";

const ICONS = [ShieldCheck, Scale, MapPin, ScrollText, UserCheck, ClipboardCheck];

export const Trust = () => {
  const { t } = useLang();
  return (
    <section id="risorse" data-testid="trust" className="section-y border-t hairline">
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce}>
          <motion.p variants={reveal} className="eyebrow mb-4">{t.trust.eyebrow}</motion.p>
          <motion.h2 variants={reveal} className="h2 max-w-[20ch]">{t.trust.heading}</motion.h2>

          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {t.trust.items.map((item, i) => {
              const Icon = ICONS[i];
              return (
                <motion.div key={item.title} variants={reveal} data-testid={`trust-${i}`}>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-[14px] border hairline" style={{ borderWidth: 1 }}>
                    <Icon size={22} strokeWidth={1.6} color="var(--cta)" />
                  </span>
                  <h3 className="mt-5 m-0" style={{ fontSize: "1.2rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{item.title}</h3>
                  <p className="mt-2 text-[0.95rem] max-w-[34ch]" style={{ color: "var(--muted)" }}>{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
