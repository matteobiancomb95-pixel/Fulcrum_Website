import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { reveal, stagger, viewportOnce } from "../../lib/motion";
import { goToContact } from "./Header";
import { useLang } from "../../i18n";

export const CtaBand = ({ title, text }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLang();
  return (
    <section data-testid="cta-band" className="section-y" style={{ background: "var(--cta)", color: "var(--copy-on-cta)" }}>
      <div className="fx-container">
        <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={viewportOnce} className="max-w-[24ch]">
          <motion.h2 variants={reveal} className="m-0" style={{ fontSize: "var(--h2)", fontWeight: 700, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            {title}
          </motion.h2>
          {text && <motion.p variants={reveal} className="mt-5 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>{text}</motion.p>}
          <motion.button variants={reveal} data-testid="cta-band-button" onClick={() => goToContact(navigate, location)} className="btn btn-onviolet mt-8">
            {t.header.cta}
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
