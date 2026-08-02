import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { FulcrumLogo } from "./Logo";
import { useLang } from "../../i18n";

export const goToContact = (navigate, location) => {
  if (location.pathname === "/") {
    document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" });
  } else {
    navigate("/#contatti");
  }
};

export const Header = () => {
  const { lang, toggle, t } = useLang();
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servOpen, setServOpen] = useState(false);
  const [mobileServ, setMobileServ] = useState(false);
  const closeTimer = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); setServOpen(false); }, [location.pathname]);

  const openServ = () => { clearTimeout(closeTimer.current); setServOpen(true); };
  const scheduleClose = () => { closeTimer.current = setTimeout(() => setServOpen(false), 140); };

  const contact = () => { setOpen(false); goToContact(navigate, location); };

  const solid = scrolled || servOpen || open || location.pathname !== "/";

  return (
    <header
      data-testid="site-header"
      className="fixed top-0 inset-x-0 z-50 transition-[background-color,border-color] duration-300"
      style={{
        backgroundColor: solid ? "var(--bg)" : "transparent",
        borderBottom: solid ? "1px solid var(--hairline)" : "1px solid transparent",
      }}
    >
      <div className="fx-container flex items-center justify-between h-[72px]">
        <Link to="/" data-testid="logo-home" aria-label="Fulcrum home">
          <FulcrumLogo height={26} />
        </Link>

        <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2" aria-label="Principale">
          <div className="relative" onMouseEnter={openServ} onMouseLeave={scheduleClose}>
            <button
              data-testid="nav-servizi"
              onClick={() => setServOpen((v) => !v)}
              aria-expanded={servOpen}
              className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium"
            >
              {t.nav.servizi.label}
              <ChevronDown size={16} className="transition-transform duration-200" style={{ transform: servOpen ? "rotate(180deg)" : "none" }} />
            </button>
            <AnimatePresence>
              {servOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                >
                  <div className="w-[320px] rounded-[20px] border bg-white p-2" style={{ borderColor: "var(--hairline)", borderWidth: 1, boxShadow: "0 12px 48px rgba(0,0,0,0.08)" }}>
                    {t.nav.servizi.items.map((it) => (
                      <Link
                        key={it.href}
                        to={it.href}
                        data-testid={`nav-servizi-${it.href.slice(1)}`}
                        className="block rounded-[14px] px-4 py-3 transition-colors"
                        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(91,61,245,0.06)")}
                        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                      >
                        <span className="block font-medium">{it.label}</span>
                        <span className="block text-sm" style={{ color: "var(--muted)" }}>{it.desc}</span>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link to={t.nav.settori.href} data-testid="nav-settori" className="text-[0.95rem] font-medium relative group">
            {t.nav.settori.label}
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-300" style={{ background: "var(--cta)" }} />
          </Link>
          <Link to={t.nav.chiSiamo.href} data-testid="nav-chisiamo" className="text-[0.95rem] font-medium relative group">
            {t.nav.chiSiamo.label}
            <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 group-hover:w-full transition-[width] duration-300" style={{ background: "var(--cta)" }} />
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <button
            data-testid="lang-toggle"
            onClick={toggle}
            className="hidden sm:inline-flex text-[0.8rem] font-medium tracking-wide px-2 py-1 rounded-full"
            style={{ color: "var(--muted)" }}
            aria-label={t.header.langAria}
          >
            <span style={{ color: lang === "it" ? "var(--cta)" : "var(--muted)" }}>IT</span>
            <span className="mx-1">/</span>
            <span style={{ color: lang === "en" ? "var(--cta)" : "var(--muted)" }}>EN</span>
          </button>
          <button data-testid="cta-header" onClick={contact} className="btn btn-primary !py-2.5 !px-6 hidden sm:inline-flex">
            {t.header.cta}
          </button>
          <button data-testid="menu-toggle" className="lg:hidden p-2" onClick={() => setOpen((o) => !o)} aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open}>
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
              <button onClick={() => setMobileServ((v) => !v)} className="flex items-center justify-between text-lg font-medium">
                {t.nav.servizi.label}
                <ChevronDown size={18} style={{ transform: mobileServ ? "rotate(180deg)" : "none" }} />
              </button>
              {mobileServ && (
                <div className="flex flex-col gap-3 pl-4">
                  {t.nav.servizi.items.map((it) => (
                    <Link key={it.href} to={it.href} className="text-base" style={{ color: "var(--muted)" }}>{it.label}</Link>
                  ))}
                </div>
              )}
              <Link to={t.nav.settori.href} className="text-lg font-medium">{t.nav.settori.label}</Link>
              <Link to={t.nav.chiSiamo.href} className="text-lg font-medium">{t.nav.chiSiamo.label}</Link>
              <button onClick={toggle} className="text-left text-sm font-medium" style={{ color: "var(--cta)" }}>
                {lang === "it" ? "Switch to English" : "Passa all'italiano"}
              </button>
              <button onClick={contact} className="btn btn-primary mt-2">{t.header.cta}</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
