import React from "react";

interface LogoProps {
  className?: string;
  /** Show the "Surgical Design Group, Inc." tagline under the wordmark */
  showTagline?: boolean;
}

/**
 * Inline SVG version of the Zinnanti Surgical wordmark.
 * Replace with /medical/zinnanti-surgical-1/logo.webp once the asset is available.
 */
export default function Logo({ className = "", showTagline = true }: LogoProps) {
  return (
    <svg
      viewBox="0 0 330 70"
      className={className}
      role="img"
      aria-label="Zinnanti Surgical Design Group, Inc."
    >
      <defs>
        <linearGradient id="zin-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#3cc4f0" />
          <stop offset="100%" stopColor="#0b6fa8" />
        </linearGradient>
      </defs>

      {/* Emblem: interlocking loops */}
      <g fill="none" stroke="url(#zin-logo-grad)" strokeWidth="5" strokeLinecap="round">
        <path d="M14 18 C 4 22, 4 40, 16 44 C 26 47, 32 38, 26 30 C 21 24, 12 28, 15 34" />
        <path d="M40 16 C 52 18, 56 34, 46 42 C 38 48, 28 44, 30 36" />
        <path d="M18 12 C 26 4, 42 6, 44 14" />
        <path d="M22 50 C 30 58, 46 54, 50 44" />
      </g>

      {/* Wordmark */}
      <text
        x="66"
        y="38"
        fill="url(#zin-logo-grad)"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 700,
          fontSize: "38px",
          letterSpacing: "1px",
        }}
      >
        ZINNANTI
      </text>

      {showTagline && (
        <text
          x="68"
          y="58"
          fill="#0b6fa8"
          style={{
            fontFamily: "'Outfit', sans-serif",
            fontWeight: 500,
            fontSize: "11.5px",
            letterSpacing: "0.6px",
          }}
        >
          SURGICAL DESIGN GROUP, INC.
        </text>
      )}
    </svg>
  );
}
