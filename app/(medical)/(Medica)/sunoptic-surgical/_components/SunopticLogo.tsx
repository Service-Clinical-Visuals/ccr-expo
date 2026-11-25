import React from "react";

interface LogoProps {
  className?: string;
  variant?: "dark" | "white";
}

export default function SunopticLogo({ className = "h-9 w-auto", variant = "dark" }: LogoProps) {
  const isWhite = variant === "white";
  const textColor = isWhite ? "#FFFFFF" : "#00243E";
  const sunColor = "#911920";

  return (
    <div className={`flex items-center gap-2 select-none ${className}`}>
      <svg
        viewBox="0 0 260 55"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-auto"
      >
        {/* Sun burst icon positioned above "OPTIC" */}
        <g transform="translate(100, 2)">
          {/* Central sun rays */}
          <line x1="12" y1="2" x2="12" y2="8" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="16" x2="12" y2="22" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="2" y1="12" x2="8" y2="12" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="12" x2="22" y2="12" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="5" x2="9" y2="9" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="15" y1="15" x2="19" y2="19" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="5" y1="19" x2="9" y2="15" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <line x1="15" y1="9" x2="19" y2="5" stroke={sunColor} strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3" fill={sunColor} />
        </g>

        {/* Text: SUNOPTIC */}
        <text
          x="4"
          y="35"
          fill={textColor}
          fontFamily="'Palanquin', sans-serif"
          fontWeight="800"
          fontSize="28"
          letterSpacing="1.2"
        >
          SUNOPTIC
        </text>

        {/* Text: SURGICAL */}
        <text
          x="148"
          y="50"
          fill={textColor}
          fontFamily="'DM Sans', sans-serif"
          fontWeight="600"
          fontSize="11"
          letterSpacing="4"
        >
          SURGICAL
        </text>
      </svg>
    </div>
  );
}
