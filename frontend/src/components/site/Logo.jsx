import React from "react";

// The Fulcrum mark: an angled bar (19° rising) floating above a triangular pivot.
export const FulcrumMark = ({ size = 40, color = "#5B3DF5", className = "", ...rest }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    className={className}
    aria-hidden="true"
    {...rest}
  >
    {/* angled bar */}
    <rect
      x="18"
      y="30"
      width="64"
      height="17"
      rx="8.5"
      fill={color}
      transform="rotate(-19 50 38.5)"
    />
    {/* triangular pivot with a gap below the bar */}
    <path d="M50 55 L78 88 L22 88 Z" fill={color} />
  </svg>
);

// Full horizontal lockup: mark + wordmark
export const FulcrumLogo = ({ mark = "#5B3DF5", text = "#000000", height = 30, className = "" }) => (
  <span className={`inline-flex items-center gap-2.5 ${className}`} style={{ height }}>
    <FulcrumMark size={height} color={mark} />
    <span
      style={{
        fontWeight: 700,
        fontSize: height * 0.72,
        letterSpacing: "-0.02em",
        color: text,
        lineHeight: 1,
      }}
    >
      FULCRUM
    </span>
  </span>
);
