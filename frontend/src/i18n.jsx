import React, { createContext, useContext, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import { SITE } from "./content/site";

const LangContext = createContext(null);

/** Slug canonici IT -> slug pubblicati sotto /en. Le rotte degli agenti restano identiche. */
export const EN_SLUGS = {
  "/ai-adoption": "/ai-adoption",
  "/ai-adoption-enterprise": "/ai-adoption-enterprise",
  "/servizi-digitali": "/digital-services",
  "/settori": "/industries",
  "/chi-siamo": "/about-us",
  "/contatti": "/contact",
  "/grazie": "/thank-you",
  "/privacy": "/privacy",
  "/cookie": "/cookie",
};

const IT_SLUGS = Object.fromEntries(Object.entries(EN_SLUGS).map(([it, en]) => [en, it]));

const split = (p) => {
  const [pathname, hash] = p.split("#");
  const [, first, ...tail] = pathname.split("/");
  return { first: `/${first}`, tail: tail.filter(Boolean).join("/"), hash };
};

/** Rende un path canonico IT nella sua forma pubblicata: localize("en", "/contatti") -> "/en/contact". */
export const localize = (lang, p) => {
  if (!p || p.startsWith("http") || p.startsWith("#") || p.startsWith("mailto:")) return p;
  if (lang !== "en") return p;
  const { first, tail, hash } = split(p);
  if (first === "/") return hash ? `/en#${hash}` : "/en";
  const mapped = EN_SLUGS[first] || first;
  const out = `/en${mapped}${tail ? `/${tail}` : ""}`;
  return hash ? `${out}#${hash}` : out;
};

/** Riporta un pathname pubblicato al path canonico IT. */
export const stripLang = (pathname) => {
  if (pathname === "/en" || pathname === "/en/") return "/";
  if (!pathname.startsWith("/en/")) return pathname || "/";
  const { first, tail } = split(pathname.slice(3));
  const mapped = IT_SLUGS[first] || first;
  return tail ? `${mapped}/${tail}` : mapped;
};

export const LanguageProvider = ({ children }) => {
  const { pathname } = useLocation();
  const lang = pathname === "/en" || pathname.startsWith("/en/") ? "en" : "it";
  const base = stripLang(pathname);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      t: SITE[lang],
      path: (p) => localize(lang, p),
      basePath: base,
      itHref: base,
      enHref: localize("en", base),
    }),
    [lang, base]
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
};

export const useLang = () => useContext(LangContext);
