import React, { useEffect } from "react";
import Lenis from "lenis";
import { LanguageProvider, useLang } from "@/i18n";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Impact } from "@/components/site/Impact";
import { Services } from "@/components/site/Services";
import { Method } from "@/components/site/Method";
import { Sectors } from "@/components/site/Sectors";
import { Trust } from "@/components/site/Trust";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { CookieBanner } from "@/components/site/CookieBanner";

function Site() {
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
      <Header />
      <main>
        <Hero />
        <Impact />
        <Services />
        <Method />
        <Sectors />
        <Trust />
        <Contact />
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Site />
    </LanguageProvider>
  );
}

export default App;
