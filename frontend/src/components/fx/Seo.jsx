import { useEffect } from "react";
import { useLang } from "../../i18n";

const ORIGIN = "https://fulcrum-ai-adoption.emergent.host";

const setTag = (selector, create, attrs) => {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
  return el;
};

const meta = (name, content) =>
  setTag(`meta[name="${name}"]`, () => Object.assign(document.createElement("meta"), { name }), { name, content });

const og = (property, content) =>
  setTag(`meta[property="${property}"]`, () => {
    const el = document.createElement("meta");
    el.setAttribute("property", property);
    return el;
  }, { property, content });

const link = (rel, hreflang, href) => {
  const sel = hreflang ? `link[rel="${rel}"][hreflang="${hreflang}"]` : `link[rel="${rel}"]`;
  const attrs = hreflang ? { rel, hreflang, href } : { rel, href };
  return setTag(sel, () => Object.assign(document.createElement("link"), { rel }), attrs);
};

/** Title, description, canonical, hreflang e Open Graph per ogni pagina. */
export const Seo = ({ title, description, noindex = false }) => {
  const { lang, basePath, t } = useLang();
  const locale = t.locale;

  useEffect(() => {
    const clean = basePath === "/" ? "" : basePath;
    const itUrl = `${ORIGIN}${clean || "/"}`;
    const enUrl = `${ORIGIN}/en${clean}`;
    const canonical = lang === "en" ? enUrl : itUrl;

    document.title = title;
    meta("description", description);
    meta("robots", noindex ? "noindex, nofollow" : "index, follow");
    link("canonical", null, canonical);
    link("alternate", "it", itUrl);
    link("alternate", "en", enUrl);
    link("alternate", "x-default", itUrl);
    og("og:title", title);
    og("og:description", description);
    og("og:url", canonical);
    og("og:locale", locale || (lang === "en" ? "en_US" : "it_IT"));
    meta("twitter:title", title);
    meta("twitter:description", description);
  }, [title, description, noindex, lang, basePath, locale]);

  return null;
};
