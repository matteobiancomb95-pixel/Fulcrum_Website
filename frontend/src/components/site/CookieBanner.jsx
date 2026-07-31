import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "../../i18n";

const KEY = "fulcrum_cookie_consent";

export const CookieBanner = () => {
  const { t } = useLang();
  const ck = t.cookie;
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(KEY)) {
      const timer = setTimeout(() => setShow(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  const decide = (value) => {
    localStorage.setItem(KEY, value);
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          data-testid="cookie-banner"
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:max-w-[420px] z-[60] rounded-[20px] border bg-white p-6"
          style={{ borderColor: "var(--hairline)", borderWidth: 1, boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}
          role="dialog"
          aria-label={ck.title}
        >
          <p className="font-medium">{ck.title}</p>
          <p className="mt-2 text-[0.92rem]" style={{ color: "var(--muted)" }}>{ck.body}</p>
          <div className="mt-5 flex gap-3">
            <button data-testid="cookie-essential" onClick={() => decide("essential")} className="btn btn-ghost !py-2.5 !px-5 !text-[0.95rem]">
              {ck.essential}
            </button>
            <button data-testid="cookie-accept" onClick={() => decide("all")} className="btn btn-primary !py-2.5 !px-5 !text-[0.95rem]">
              {ck.accept}
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
