import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, Navigate, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { LanguageProvider, useLang } from "@/i18n";
import { ConsentProvider } from "@/consent";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import Home from "@/pages/Home";
import AiAdoption from "@/pages/AiAdoption";
import AgentPage from "@/pages/AgentPage";
import Enterprise from "@/pages/Enterprise";
import ServiziDigitali from "@/pages/ServiziDigitali";
import Settori from "@/pages/Settori";
import ChiSiamo from "@/pages/ChiSiamo";
import Contatti from "@/pages/Contatti";
import Grazie from "@/pages/Grazie";
import Legal from "@/pages/Legal";
import NotFound from "@/pages/NotFound";
import AdminPage from "@/admin/AdminPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth" }), 160);
      return () => clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function SiteLayout() {
  const { t } = useLang();
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true });
    let raf;
    const loop = (time) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="App">
      <a href="#contenuto" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[300] fc-btn fc-btn-primary fc-btn-sm">
        {t.skip}
      </a>
      <ScrollManager />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

const PAGES = [
  { it: "", en: "", element: <Home /> },
  { it: "ai-adoption", en: "ai-adoption", element: <AiAdoption /> },
  { it: "ai-adoption/:slug", en: "ai-adoption/:slug", element: <AgentPage /> },
  { it: "ai-adoption-enterprise", en: "ai-adoption-enterprise", element: <Enterprise /> },
  { it: "servizi-digitali", en: "digital-services", element: <ServiziDigitali /> },
  { it: "settori", en: "industries", element: <Settori /> },
  { it: "chi-siamo", en: "about-us", element: <ChiSiamo /> },
  { it: "contatti", en: "contact", element: <Contatti /> },
  { it: "grazie", en: "thank-you", element: <Grazie /> },
  { it: "privacy", en: "privacy", element: <Legal doc="privacy" /> },
  { it: "cookie", en: "cookie", element: <Legal doc="cookie" /> },
  { it: "ai-agents", en: "ai-agents", element: null },
  { it: "*", en: "*", element: <NotFound /> },
];

const routesFor = (lang) =>
  PAGES.map((p) => {
    const path = p[lang];
    const element = p.element || <Navigate to={lang === "en" ? "/en/ai-adoption" : "/ai-adoption"} replace />;
    return <Route key={`${lang}-${path}`} index={path === ""} path={path || undefined} element={element} />;
  });

function App() {
  return (
    <BrowserRouter>
      <LanguageProvider>
        <ConsentProvider>
          <Routes>
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/en" element={<SiteLayout />}>
              {routesFor("en")}
            </Route>
            <Route path="/" element={<SiteLayout />}>
              {routesFor("it")}
            </Route>
          </Routes>
        </ConsentProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
