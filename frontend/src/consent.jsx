import React, { createContext, useContext, useEffect, useState } from "react";

const KEY = "fulcrum-consenso-cookie";
const ConsentContext = createContext(null);

export const ConsentProvider = ({ children }) => {
  const [consent, setConsent] = useState(null); // "granted" | "denied" | null
  const [bannerOpen, setBannerOpen] = useState(false);

  useEffect(() => {
    let saved = null;
    try { saved = localStorage.getItem(KEY); } catch (e) { /* ignore */ }
    if (saved === "granted" || saved === "denied") setConsent(saved);
    else setBannerOpen(true);
  }, []);

  const decide = (value) => {
    setConsent(value);
    setBannerOpen(false);
    try { localStorage.setItem(KEY, value); } catch (e) { /* ignore */ }
  };

  return (
    <ConsentContext.Provider
      value={{ consent, granted: consent === "granted", bannerOpen, decide, openBanner: () => setBannerOpen(true) }}
    >
      {children}
    </ConsentContext.Provider>
  );
};

export const useConsent = () => useContext(ConsentContext);
