import React from "react";
import { Reveal } from "./Bits";

/** Griglia tipografica di blocchi head/body con hairline superiore. */
export const BlockGrid = ({ items, cols = 3, testid }) => (
  <div
    className={`grid gap-x-10 gap-y-10 ${cols === 2 ? "sm:grid-cols-2" : cols === 4 ? "sm:grid-cols-2 lg:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-3"}`}
    data-testid={testid}
  >
    {items.map((b, i) => (
      <Reveal key={b.head} delay={i * 0.04}>
        <div className="pt-6" style={{ borderTop: "1px solid var(--fc-hairline)" }}>
          <h3 className="fc-h4">{b.head}</h3>
          <p className="fc-small fc-muted mt-3">{b.body}</p>
        </div>
      </Reveal>
    ))}
  </div>
);

/** Elenco puntato con marcatore triangolare, usato per capacità e vincoli. */
export const TriList = ({ items, className = "" }) => (
  <ul className={`flex flex-col gap-3 ${className}`}>
    {items.map((x) => (
      <li key={x} className="flex gap-3">
        <span className="fc-tri" aria-hidden="true" />
        <span className="fc-small fc-muted">{x}</span>
      </li>
    ))}
  </ul>
);
