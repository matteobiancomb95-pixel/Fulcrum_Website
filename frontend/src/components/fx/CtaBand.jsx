import React from "react";
import { L, Reveal } from "./Bits";
import { useLang } from "../../i18n";

/** Unica sezione full-bleed viola della pagina. */
export const CtaBand = ({ eyebrow, heading, body, ctaLabel, ctaHref = "/contatti" }) => {
  const { t } = useLang();
  return (
    <section
      className="py-[clamp(64px,9vw,112px)]"
      style={{ background: "var(--fc-accent)", color: "var(--fc-copy-on-accent)" }}
      data-testid="cta-band"
    >
      <div className="fc-container">
        <Reveal>
          {eyebrow && <p className="fc-eyebrow" style={{ color: "var(--fc-on-accent-70)" }}>{eyebrow}</p>}
          <h2 className="fc-h2 mt-3 max-w-[24ch]">{heading}</h2>
          {body && <p className="mt-5 max-w-[58ch]" style={{ color: "var(--fc-on-accent-70)" }}>{body}</p>}
          <div className="mt-9 flex flex-col items-start gap-5">
            <L to={ctaHref} className="fc-btn fc-btn-inverted" data-testid="cta-band-primary">
              {ctaLabel || t.cta.call}
            </L>
            <L
              to="/contatti#form"
              className="fc-small underline"
              style={{ color: "var(--fc-copy-on-accent)", textUnderlineOffset: 4 }}
              data-testid="cta-band-form"
            >
              {t.cta.form}
            </L>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
