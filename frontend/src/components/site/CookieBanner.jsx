import React from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../i18n";
import { useConsent } from "../../consent";

export const CookieBanner = () => {
  const { t, path } = useLang();
  const { bannerOpen, decide } = useConsent();
  const c = t.cookie;

  return (
    <AnimatePresence>
      {bannerOpen && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          data-testid="cookie-banner"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="fixed z-[200] rounded-[20px] p-6"
          style={{
            left: 24,
            right: 24,
            bottom: 24,
            maxWidth: 720,
            background: "var(--fc-bg)",
            border: "1px solid var(--fc-hairline)",
          }}
        >
          <p id="cookie-title" className="fc-h4">{c.title}</p>
          <p className="fc-small fc-muted mt-2">
            {c.body}{" "}
            <Link to={path(c.policyHref)} className="underline" style={{ color: "var(--fc-accent)", textUnderlineOffset: 3 }}>
              {c.policy}
            </Link>
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <button type="button" onClick={() => decide("denied")} data-testid="cookie-reject" className="fc-btn fc-btn-ghost fc-btn-sm">
              {c.reject}
            </button>
            <button type="button" onClick={() => decide("granted")} data-testid="cookie-accept" className="fc-btn fc-btn-primary fc-btn-sm">
              {c.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
