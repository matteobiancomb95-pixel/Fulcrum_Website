import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Hero } from "../components/site/Hero";
import { Impact } from "../components/site/Impact";
import { Services } from "../components/site/Services";
import { Method } from "../components/site/Method";
import { Sectors } from "../components/site/Sectors";
import { Trust } from "../components/site/Trust";
import { Contact } from "../components/site/Contact";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#contatti") {
      const id = setTimeout(() => document.getElementById("contatti")?.scrollIntoView({ behavior: "smooth" }), 250);
      return () => clearTimeout(id);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <Impact />
      <Services />
      <Contact />
      <Method />
      <Sectors />
      <Trust />
    </>
  );
}
