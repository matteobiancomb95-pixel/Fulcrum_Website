import React from "react";
import { useLang } from "../../i18n";

/** scenario-tipo: "Oggi" vs "Con l'agente". Etichetta obbligatoria, mai un caso cliente. */
export const Scenario = ({ title, today, withAgent, testid = "scenario" }) => {
  const { t } = useLang();
  return (
    <div className="rounded-[20px] border hairline p-6 sm:p-8" style={{ borderWidth: 1 }} data-testid={testid}>
      <p className="fc-eyebrow" style={{ color: "var(--fc-accent)" }}>{t.scenarioLabel}</p>
      {title && <h3 className="fc-h3 mt-3">{title}</h3>}
      <p className="fc-caption mt-2">{t.scenarioNote}</p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        <div>
          <h4 className="fc-h4 fc-muted">{t.scenarioToday}</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {today.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="fc-square" aria-hidden="true" />
                <span className="fc-small fc-muted">{x}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:pl-8" style={{ borderLeft: "1px solid var(--fc-hairline)", paddingLeft: 24 }}>
          <h4 className="fc-h4">{t.scenarioWith}</h4>
          <ul className="mt-4 flex flex-col gap-3">
            {withAgent.map((x) => (
              <li key={x} className="flex gap-3">
                <span className="fc-tri" aria-hidden="true" />
                <span className="fc-small">{x}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
