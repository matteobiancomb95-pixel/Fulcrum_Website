import React from "react";
import { Reveal, ArrowLink } from "./Bits";
import { useLang } from "../../i18n";

const icons = {
  shield: <path d="M12 3 20 7v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z" />,
  doc: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 9l4 7H8l4-7Z" />
    </>
  ),
  eu: (
    <>
      <rect x="2" y="8" width="20" height="8" rx="4" />
      <path d="M12 10l2.5 4h-5l2.5-4Z" />
    </>
  ),
  log: (
    <>
      <path d="M4 17 12 14" />
      <path d="M4 12 15 8" />
      <path d="M4 7 18 2.5" />
    </>
  ),
  dpo: (
    <>
      <path d="M12 6l6 10H6l6-10Z" />
      <path d="M3 21h18" />
    </>
  ),
  dpia: <path d="M4 4h12l4 4v12H4V4Z" />,
};

const TrustIcon = ({ name }) => (
  <svg
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="none"
    stroke="var(--fc-accent)"
    strokeWidth="2"
    strokeLinecap="butt"
    strokeLinejoin="miter"
    aria-hidden="true"
    focusable="false"
    className="flex-none"
  >
    {icons[name]}
  </svg>
);

/** 6 pillole di governance. variant "mini" = 3 pillole. */
export const TrustStrip = ({ heading, eyebrow, note, mini = false }) => {
  const { t } = useLang();
  const items = mini ? t.trust.items.filter((i) => ["shield", "eu", "dpo"].includes(i.icon)) : t.trust.items;
  return (
    <section className="fc-section-tight" data-testid="trust-strip">
      <div className="fc-container">
        {(eyebrow || heading) && (
          <div className="mb-10">
            {eyebrow && <p className="fc-eyebrow">{eyebrow}</p>}
            {heading && <h2 className="fc-h2 mt-3">{heading}</h2>}
          </div>
        )}
        <div className={`grid gap-3 ${mini ? "sm:grid-cols-3" : "sm:grid-cols-2 lg:grid-cols-3"}`}>
          {items.map((i, idx) => (
            <Reveal key={i.label} delay={idx * 0.03}>
              <div className="fc-pill w-full" style={{ minHeight: 52 }}>
                <TrustIcon name={i.icon} />
                <span>{i.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
        {note && <p className="fc-small fc-muted mt-6 max-w-[62ch]">{note}</p>}
      </div>
    </section>
  );
};

/** 4 prove qualitative al posto dei contatori. */
export const ProofStrip = ({ eyebrow, heading, lead, items, testid = "proof-strip" }) => (
  <section className="fc-section-tight border-y hairline" style={{ borderTopWidth: 1, borderBottomWidth: 1 }} data-testid={testid}>
    <div className="fc-container">
      {(eyebrow || heading) && (
        <div className="mb-12 max-w-[62ch]">
          {eyebrow && <p className="fc-eyebrow">{eyebrow}</p>}
          {heading && <h2 className="fc-h2 mt-3">{heading}</h2>}
          {lead && <p className="fc-lead mt-4">{lead}</p>}
        </div>
      )}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((i, idx) => (
          <Reveal key={i.key} delay={idx * 0.05}>
            <div
              className="lg:pl-6"
              style={idx > 0 ? { borderLeft: "1px solid var(--fc-hairline)", paddingLeft: 24 } : undefined}
            >
              <p className="fc-proof-key">{i.key}</p>
              <p className="fc-small fc-muted mt-3">{i.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

/** Wordmark testuali delle tecnologie usate. Nessun logo grafico. */
export const TechStrip = () => {
  const { t } = useLang();
  return (
    <section className="fc-section-tight" data-testid="tech-strip">
      <div className="fc-container">
        <p className="fc-eyebrow">{t.tech.eyebrow}</p>
        <h2 className="fc-h2 mt-3">{t.tech.heading}</h2>
        <p className="fc-small fc-muted mt-4 max-w-[62ch]">{t.tech.lead}</p>
        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-5">
          {t.tech.items.map((i) => (
            <li key={i} className="text-[1.125rem] font-medium tracking-[-0.01em]" style={{ color: "var(--fc-copy-faint)" }}>
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

/** 8 pillole settore + link. */
export const SectorPills = ({ items, ctaLabel, ctaHref }) => (
  <div>
    <ul className="flex flex-wrap gap-3">
      {items.map((s) => (
        <li key={s}>
          <span className="fc-pill" style={{ color: "var(--fc-copy-muted)" }}>{s}</span>
        </li>
      ))}
    </ul>
    {ctaHref && (
      <div className="mt-8">
        <ArrowLink to={ctaHref}>{ctaLabel}</ArrowLink>
      </div>
    )}
  </div>
);
