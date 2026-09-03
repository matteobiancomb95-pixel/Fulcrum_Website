import React from "react";
import { Seo } from "../components/fx/Seo";
import { PageHero } from "../components/fx/PageHero";
import { L, Reveal } from "../components/fx/Bits";
import { useLang } from "../i18n";

export default function NotFound() {
  const { t } = useLang();
  const c = t.notFound;

  return (
    <>
      <Seo title={c.metaTitle} description={c.metaDescription} noindex />
      <PageHero eyebrow={c.eyebrow} h1={c.h1} lead={c.lead} sign="404">
        <ul className="mt-10 flex flex-col" data-testid="notfound-links">
          {c.links.map((l, idx) => (
            <Reveal key={l.href} delay={idx * 0.05}>
              <li style={{ borderTop: "1px solid var(--fc-hairline)" }}>
                <L to={l.href} className="flex items-center justify-between gap-6 py-5 group" data-testid={`notfound-link-${idx}`}>
                  <span className="fc-h4">{l.label}</span>
                  <span className="fc-arrow"><span data-arrow>&rarr;</span></span>
                </L>
              </li>
            </Reveal>
          ))}
        </ul>
      </PageHero>
    </>
  );
}
