import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { useLang } from "../../i18n";

const Tri = ({ open }) => (
  <span
    aria-hidden="true"
    className="inline-block h-[7px] w-[9px] transition-transform"
    style={{
      background: "var(--fc-copy)",
      clipPath: "polygon(50% 100%, 100% 0, 0 0)",
      transform: open ? "rotate(180deg)" : "none",
      transitionDuration: "200ms",
    }}
  />
);

export const Header = () => {
  const { lang, t, path, itHref, enHref, basePath } = useLang();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const closeTimer = useRef(null);
  const btnRef = useRef(null);
  const hoverOpened = useRef(false);
  const servOpenRef = useRef(false);

  // Lo stato viene tenuto anche in un ref: i mouse event "continui" di React non
  // sono flushati prima del click, quindi il click leggerebbe un valore stantio.
  const setServ = (v) => {
    servOpenRef.current = v;
    setServOpen(v);
  };

  useEffect(() => {
    setOpen(false);
    setServ(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (servOpen) { setServ(false); btnRef.current?.focus(); }
      setOpen(false);
    };
    const onClick = (e) => {
      if (servOpen && !e.target.closest?.("[data-dropdown]")) setServ(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [servOpen]);

  const isActive = (href) => basePath === href || basePath.startsWith(`${href}/`);
  const navLink = "relative text-[0.9375rem] font-medium py-3";
  const active = (href) => (isActive(href) ? { boxShadow: "inset 0 -2px 0 var(--fc-accent)" } : undefined);

  const services = t.nav.services;
  const servicesActive = services.items.some((i) => isActive(i.href));

  const LangToggle = ({ block = false }) => (
    <div
      className={`flex items-center gap-1.5 text-[0.875rem] ${block ? "py-3" : ""}`}
      role="group"
      aria-label={t.nav.langAria}
      data-testid="lang-toggle"
    >
      <Link
        to={itHref}
        aria-current={lang === "it" ? "true" : undefined}
        data-testid="lang-it"
        className="px-1 font-medium"
        style={{ color: lang === "it" ? "var(--fc-copy)" : "var(--fc-copy-faint)" }}
      >
        IT
      </Link>
      <span aria-hidden="true" style={{ color: "var(--fc-copy-faint)" }}>/</span>
      <Link
        to={enHref}
        aria-current={lang === "en" ? "true" : undefined}
        data-testid="lang-en"
        className="px-1 font-medium"
        style={{ color: lang === "en" ? "var(--fc-copy)" : "var(--fc-copy-faint)" }}
      >
        EN
      </Link>
    </div>
  );

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50"
      style={{ background: "var(--fc-bg)", borderBottom: "1px solid var(--fc-hairline)" }}
    >
      <div className="fc-container flex items-center justify-between" style={{ height: "var(--fc-header-h)" }}>
        <Link to={path("/")} data-testid="logo-home" aria-label={lang === "en" ? "Fulcrum, back to home" : "Fulcrum, torna alla home"}>
          <FulcrumLogo height={26} />
        </Link>

        <nav className="hidden lg:flex items-center gap-8" aria-label={t.nav.ariaMain}>
          <div
            className="relative"
            data-dropdown
            onMouseEnter={() => { clearTimeout(closeTimer.current); setServ(true); hoverOpened.current = true; }}
            onMouseLeave={() => { closeTimer.current = setTimeout(() => { setServ(false); hoverOpened.current = false; }, 120); }}
          >
            <button
              ref={btnRef}
              type="button"
              data-testid="nav-servizi"
              onClick={() => {
                // il menu è già aperto dall'hover: il primo click lo conferma, il secondo lo chiude
                if (servOpenRef.current && hoverOpened.current) {
                  hoverOpened.current = false;
                  return;
                }
                setServ(!servOpenRef.current);
              }}
              aria-expanded={servOpen}
              aria-controls="menu-servizi"
              className={`${navLink} inline-flex items-center gap-2`}
              style={active(servicesActive ? basePath : "__")}
            >
              {services.label}
              <Tri open={servOpen} />
            </button>
            <AnimatePresence>
              {servOpen && (
                <motion.div
                  id="menu-servizi"
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-0 top-full w-[420px] rounded-[20px] p-2"
                  style={{ background: "var(--fc-bg)", border: "1px solid var(--fc-hairline)", marginTop: 8 }}
                >
                  {services.items.map((it) => (
                    <Link
                      key={it.href}
                      to={path(it.href)}
                      data-testid={`nav-servizi${it.href}`}
                      className="block rounded-[12px] px-4 py-3 transition-colors hover:bg-[var(--fc-accent-06)]"
                    >
                      <span className="block font-medium">{it.label}</span>
                      <span className="block text-[0.8125rem]" style={{ color: "var(--fc-copy-muted)" }}>{it.desc}</span>
                    </Link>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to={path(t.nav.industries.href)} data-testid="nav-settori" className={navLink} style={active(t.nav.industries.href)}>
            {t.nav.industries.label}
          </Link>
          <Link to={path(t.nav.about.href)} data-testid="nav-chisiamo" className={navLink} style={active(t.nav.about.href)}>
            {t.nav.about.label}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><LangToggle /></div>
          <span className="hidden sm:block">
            <Link to={path("/contatti")} data-testid="cta-header" className="fc-btn fc-btn-primary fc-btn-sm whitespace-nowrap">
              {t.cta.call}
            </Link>
          </span>
          <button
            type="button"
            data-testid="menu-toggle"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="lg:hidden fixed inset-x-0 overflow-y-auto"
            style={{ top: "var(--fc-header-h)", bottom: 0, background: "var(--fc-bg)", padding: 24 }}
          >
            <p className="fc-eyebrow mb-4">{services.label}</p>
            <div className="flex flex-col">
              {services.items.map((it) => (
                <Link key={it.href} to={path(it.href)} data-testid={`mobile-nav${it.href}`} className="rounded-[12px] px-4 py-3 -mx-4">
                  <span className="block font-medium">{it.label}</span>
                  <span className="block text-[0.8125rem]" style={{ color: "var(--fc-copy-muted)" }}>{it.desc}</span>
                </Link>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-1">
              <Link to={path(t.nav.industries.href)} data-testid="mobile-nav-settori" className="py-3 text-lg font-medium">{t.nav.industries.label}</Link>
              <Link to={path(t.nav.about.href)} data-testid="mobile-nav-chisiamo" className="py-3 text-lg font-medium">{t.nav.about.label}</Link>
            </div>
            <div className="mt-6 pt-6" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
              <LangToggle block />
              <Link to={path("/contatti")} data-testid="mobile-cta" className="fc-btn fc-btn-primary mt-4 w-full">{t.cta.call}</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
