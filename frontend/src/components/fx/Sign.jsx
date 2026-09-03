import React from "react";

const BAR = { x: 14, y: 42, width: 112, height: 28, rx: 14, transform: "rotate(-19 70 56)" };
const FULCRUM = "M70,70.5 L106.4,111.8 L33.6,111.8 Z";
const HAIR = "rgba(0,0,0,0.16)";

const accessories = {
  hr: (
    <g>
      {[36, 54, 72].map((y, i) => (
        <rect key={y} x={2 + i * 4} y={y} width="34" height="8" rx="4" fill={HAIR} transform={`rotate(-19 19 ${y + 4})`} />
      ))}
    </g>
  ),
  finance: (
    <g fill="none" stroke={HAIR} strokeWidth="2">
      {[0, 1, 2].map((i) => (
        <rect key={i} x={2 + i * 8} y={38 + i * 14} width="30" height="22" rx="3" />
      ))}
    </g>
  ),
  procurement: (
    <g>
      <path d="M6 96 L44 82" stroke={HAIR} strokeWidth="1.5" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x={4 + i * 12} y={88 - i * 4.4} width="12" height="12" fill="none" stroke={HAIR} strokeWidth="2" />
      ))}
    </g>
  ),
  marketing: (
    <g fill="rgba(0,0,0,0.16)">
      <rect x="0" y="44" width="44" height="6" rx="3" transform="rotate(-19 22 47)" />
      <rect x="4" y="60" width="44" height="6" rx="3" transform="rotate(-19 26 63)" opacity="0.65" />
      <rect x="8" y="76" width="44" height="6" rx="3" transform="rotate(-19 30 79)" opacity="0.35" />
    </g>
  ),
  gtm: (
    <g fill="rgba(0,0,0,0.16)">
      {[0, 1, 2, 3].map((i) => {
        const h = 8 + i * 6;
        const x = 4 + i * 11;
        const y = 96 - i * 3.8;
        return <path key={i} d={`M${x + 5},${y - h} L${x + 10},${y} L${x},${y} Z`} />;
      })}
    </g>
  ),
  legal: (
    <g fill="none" stroke={HAIR} strokeWidth="2">
      <path d="M28,84 L52,117 L4,117 Z" />
      <path d="M28,146 L52,117 L4,117 Z" opacity="0.55" />
    </g>
  ),
  training: (
    <g fill="none" stroke={HAIR} strokeWidth="2">
      <path d="M8,105 L14,117 L2,117 Z" />
      <path d="M24,99 L33,117 L15,117 Z" />
      <path d="M44,93 L56,117 L32,117 Z" />
    </g>
  ),
};

/**
 * Segno grafico Fulcrum: barra a -19° appoggiata sul fulcro triangolare.
 * La geometria base non cambia mai: variano solo gli elementi accessori.
 */
export const Sign = ({ variant = "base", className = "", style }) => (
  <svg
    viewBox="0 0 240 160"
    className={className}
    style={{ width: "100%", height: "auto", ...style }}
    aria-hidden="true"
    focusable="false"
  >
    {accessories[variant] || null}
    <g transform="translate(50 12)">
      <rect {...BAR} fill="var(--fc-accent)" />
      <path d={FULCRUM} fill="var(--fc-copy)" transform={variant === "404" ? "translate(24 0)" : undefined} />
    </g>
  </svg>
);
