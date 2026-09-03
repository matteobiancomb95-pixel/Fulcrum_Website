import React from "react";
import { Reveal, ArrowLink } from "./Bits";

/** metodo-4-step / processo-e2e-5-step: stessa grafica, nomi diversi. */
export const MethodSteps = ({ id, eyebrow, heading, lead, steps, note, cta, testid = "method-steps" }) => (
  <section id={id} className="fc-section" data-testid={testid}>
    <div className="fc-container">
      <div className="max-w-[62ch]">
        {eyebrow && <p className="fc-eyebrow">{eyebrow}</p>}
        {heading && <h2 className="fc-h2 mt-3">{heading}</h2>}
        {lead && <p className="fc-lead mt-4">{lead}</p>}
      </div>

      <div className="relative mt-14">
        <span
          aria-hidden="true"
          className="hidden lg:block absolute left-0 right-0"
          style={{ top: 13, height: 1, background: "var(--fc-hairline)" }}
        />
        <div className={`grid gap-10 sm:grid-cols-2 ${steps.length === 5 ? "lg:grid-cols-5" : "lg:grid-cols-4"}`}>
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.05}>
              <div className="relative" style={{ background: "var(--fc-bg)" }}>
                <span
                  className="block text-[1.5rem] font-bold leading-none"
                  style={{ color: "var(--fc-accent)", letterSpacing: "-0.02em" }}
                >
                  {s.n}
                </span>
                <h3 className="fc-h4 mt-4">{s.title}</h3>
                <p className="fc-small fc-muted mt-2">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {note && <p className="fc-small fc-muted mt-12 max-w-[62ch]">{note}</p>}
      {cta && (
        <div className="mt-6">
          <ArrowLink to={cta.href}>{cta.label}</ArrowLink>
        </div>
      )}
    </div>
  </section>
);
