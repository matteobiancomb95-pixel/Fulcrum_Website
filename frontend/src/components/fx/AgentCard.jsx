import React from "react";
import { ArrowRight } from "lucide-react";
import { L, Reveal } from "./Bits";
import { useLang } from "../../i18n";

/** Card di recap di un agente. variant: "full" (hub) | "compact" (home, altri-agenti) */
export const AgentCard = ({ agent, variant = "compact", delay = 0 }) => {
  const { t } = useLang();
  return (
    <Reveal delay={delay} className="h-full">
      <L
        to={agent.href}
        className="fc-card group"
        data-testid={`agent-card-${agent.slug}`}
        aria-label={t.cta.exploreAria(agent.name)}
      >
        <p className="fc-eyebrow">{agent.eyebrow}</p>
        <h3 className="fc-h3">{agent.name}</h3>
        <p className="fc-small fc-muted">{agent.oneLiner}</p>
        {variant === "full" && (
          <>
            <ul className="mt-2 flex flex-col gap-2.5">
              {agent.caps.map((c) => (
                <li key={c} className="flex gap-3">
                  <span className="fc-tri" aria-hidden="true" />
                  <span className="fc-small">{c}</span>
                </li>
              ))}
            </ul>
            <p className="fc-caption mt-2">{agent.perChi}</p>
          </>
        )}
        <span className="fc-arrow mt-auto pt-4">
          <span>{t.cta.exploreAgent}</span>
          <ArrowRight size={16} />
        </span>
      </L>
    </Reveal>
  );
};

/** Tile di rimando: stile outline, mai usato per un agente di catalogo. */
export const TileLink = ({ title, body, cta, href, testid, delay = 0 }) => (
  <Reveal delay={delay} className="h-full">
    <L to={href} className="fc-card group relative" style={{ background: "transparent" }} data-testid={testid}>
      <span
        aria-hidden="true"
        className="absolute right-6 top-6 h-4 w-4 border-2 transition-colors group-hover:border-[var(--fc-accent)]"
        style={{ borderColor: "var(--fc-hairline)", clipPath: "polygon(50% 0, 100% 100%, 0 100%)" }}
      />
      <h3 className="fc-h3 pr-10">{title}</h3>
      <p className="fc-small fc-muted">{body}</p>
      <span className="fc-arrow mt-auto pt-4">
        <span>{cta}</span>
        <ArrowRight size={16} />
      </span>
    </L>
  </Reveal>
);
