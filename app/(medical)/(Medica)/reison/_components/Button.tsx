/**
 * Button Component - Reison Medical
 *
 * ARCHITECTURAL REFERENCE (from Inogen Master):
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 * 3. Figma Design Signature (Reison):
 *    - Main pill/card body with primary Navy (#2F3F5A) or White (#FFFFFF) background.
 *    - Distinctive 45-degree diamond accent icon container (#E53B14) with embedded arrow icon.
 *    - Responsive scaling across standard, ultra-wide, and 4K displays.
 */
"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "white" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {
  const isWhite = variant === "white";
  const isOutline = variant === "outline";

  const containerStyles = isWhite
    ? "bg-white text-[#2A2A2A] hover:bg-gray-100"
    : isOutline
    ? "bg-transparent border border-white text-white hover:bg-white/10"
    : "bg-[#2F3F5A] text-white hover:bg-[#1e2a3d]";

  const content = (
    <div
      className={`relative inline-flex items-center rounded-[10px] pl-5 sm:pl-6 pr-12 sm:pr-14 min-[2500px]:pl-8 min-[2500px]:pr-18 min-[3800px]:pl-12 min-[3800px]:pr-24 py-2.5 sm:py-3 min-[2500px]:py-4 min-[3800px]:py-6 shadow-sm hover:shadow-lg transition-all duration-300 ease-in-out font-primary select-none ${containerStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>

      {showIcon && (
        <div className="absolute -right-3.5 sm:-right-4 min-[2500px]:-right-6 min-[3800px]:-right-8 top-1/2 -translate-y-1/2 flex items-center justify-center">
          {/* 45-degree rotated diamond container */}
          <div className="w-[34px] h-[34px] sm:w-[37.5px] sm:h-[37.5px] min-[2500px]:w-[54px] min-[2500px]:h-[54px] min-[3800px]:w-[76px] min-[3800px]:h-[76px] bg-[#E53B14] rounded-[11px] sm:rounded-[13px] min-[2500px]:rounded-[18px] min-[3800px]:rounded-[26px] border border-black/20 shadow-md rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            {/* SVG Arrow rotated back to point diagonally/right */}
            <svg
              className="w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 text-white -rotate-45"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>
        </div>
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out group";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;

