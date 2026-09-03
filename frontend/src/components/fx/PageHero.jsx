import React from "react";
import { Sign } from "./Sign";
import { L, Reveal, ArrowLink } from "./Bits";
import { useLang } from "../../i18n";

/**
 * Hero di pagina. Colonna testo + segno grafico a destra.
 * `long` usa una scala di H1 ridotta per i nomi prodotto lunghi.
 */
export const PageHero = ({
  eyebrow,
  h1,
  lead,
  long = false,
  sign = "base",
  breadcrumb,
  primary,
  secondary,
  children,
}) => {
  const { t } = useLang();
  return (
    <section id="contenuto" className="pt-[calc(var(--fc-header-h)+clamp(48px,7vw,96px))] pb-[clamp(48px,7vw,96px)]" data-testid="page-hero">
      <div className="fc-container">
        <div className="grid items-center gap-12 lg:grid-cols-[8fr_4fr]">
          <div>
            {breadcrumb && (
              <nav aria-label={t.breadcrumbAria} className="fc-caption mb-5">
                <L to={breadcrumb.href} className="hover:underline">{breadcrumb.label}</L>
                <span aria-hidden="true" className="mx-2">/</span>
                <span>{breadcrumb.current}</span>
              </nav>
            )}
            <Reveal as="p" className="fc-eyebrow">{eyebrow}</Reveal>
            <Reveal delay={0.05}>
              <h1 className={long ? "fc-h1-long mt-5" : "fc-h1 mt-5"}>{h1}</h1>
            </Reveal>
            {lead && (
              <Reveal as="p" className="fc-lead mt-7 max-w-[46ch]" delay={0.1}>
                {lead}
              </Reveal>
            )}
            {(primary || secondary) && (
              <Reveal delay={0.15}>
                <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
                  {primary && (
                    <L to={primary.href} className="fc-btn fc-btn-primary" data-testid="hero-cta-primary">
                      {primary.label}
                    </L>
                  )}
                  {secondary && <ArrowLink to={secondary.href} testid="hero-cta-secondary">{secondary.label}</ArrowLink>}
                </div>
              </Reveal>
            )}
            {children}
          </div>
          <div className="order-first lg:order-none max-w-[200px] lg:max-w-[360px]">
            <Sign variant={sign} />
          </div>
        </div>
      </div>
    </section>
  );
};
