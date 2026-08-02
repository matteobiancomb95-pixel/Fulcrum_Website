import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, Outlet, useLocation } from "react-router-dom";
import Lenis from "lenis";
import { LanguageProvider, useLang } from "@/i18n";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";
import Home from "@/pages/Home";
import AiAdoption from "@/pages/AiAdoption";
import AiAgents from "@/pages/AiAgents";
import ServiziDigitali from "@/pages/ServiziDigitali";
import Settori from "@/pages/Settori";
import ChiSiamo from "@/pages/ChiSiamo";
import AdminPage from "@/admin/AdminPage";

function ScrollManager() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
}

function SiteLayout() {
  const { t } = useLang();
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
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
    <div className="App" style={{ background: "var(--bg)" }}>
      <a href="#hero" className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] btn btn-primary !py-2 !px-4">
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

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/ai-adoption" element={<AiAdoption />} />
            <Route path="/ai-agents" element={<AiAgents />} />
            <Route path="/servizi-digitali" element={<ServiziDigitali />} />
            <Route path="/settori" element={<Settori />} />
            <Route path="/chi-siamo" element={<ChiSiamo />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
