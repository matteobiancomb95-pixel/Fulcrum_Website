import React from "react";
import { Reveal } from "./Bits";

export const Faq = ({ eyebrow, heading, items, testid = "faq" }) => (
  <section className="fc-section" data-testid={testid}>
    <div className="fc-container">
      <div className="max-w-[62ch]">
        {eyebrow && <p className="fc-eyebrow">{eyebrow}</p>}
        {heading && <h2 className="fc-h2 mt-3">{heading}</h2>}
      </div>
      <div className="fc-faq mt-12 max-w-[72ch]">
        {items.map((f, i) => (
          <Reveal key={f.q} delay={i * 0.03}>
            <details data-testid={`faq-item-${i}`}>
              <summary>{f.q}</summary>
              <p className="fc-small fc-muted pb-6 max-w-[68ch]">{f.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);
