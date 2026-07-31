import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { NAV } from "../../data";

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("IT");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300"
      style={{
        backgroundColor: scrolled ? "var(--bg)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--hairline)" : "1px solid transparent",
      }}
    >
      <div className="fx-container flex items-center justify-between h-[72px]">
        <button data-testid="logo-home" onClick={() => go("#hero")} aria-label="Fulcrum home">
          <FulcrumLogo height={26} />
        </button>

        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2" aria-label="Principale">
          {NAV.map((n) => (
            <button
              key={n.href}
              data-testid={`nav-${n.href.slice(1)}`}
              onClick={() => go(n.href)}
              className="text-[0.95rem] font-medium relative group"
            >
              {n.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-300" style={{ background: "var(--cta)" }} />
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="lang-toggle"
            onClick={() => setLang((l) => (l === "IT" ? "EN" : "IT"))}
            className="hidden sm:inline-flex text-[0.8rem] font-medium tracking-wide px-2 py-1 rounded-full"
            style={{ color: "var(--muted)" }}
            aria-label="Cambia lingua"
            title="Language toggle (stub)"
          >
            {lang} / {lang === "IT" ? "EN" : "IT"}
          </button>
          <button data-testid="cta-header" onClick={() => go("#parliamone")} className="btn btn-primary !py-2.5 !px-6 hidden sm:inline-flex">
            Parliamone
          </button>
          <button
            data-testid="menu-toggle"
            className="lg:hidden p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Chiudi menu" : "Apri menu"}
            aria-expanded={open}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden overflow-hidden"
            style={{ background: "var(--bg)", borderBottom: "1px solid var(--hairline)" }}
          >
            <div className="fx-container py-6 flex flex-col gap-4">
              {NAV.map((n) => (
                <button key={n.href} onClick={() => go(n.href)} className="text-left text-lg font-medium">
                  {n.label}
                </button>
              ))}
              <button onClick={() => go("#parliamone")} className="btn btn-primary mt-2">Parliamone</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
