/**
 * Button Component
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 *    - Primary variant uses theme primary color tokens (`var(--color-primary)`).
 * 3. Directional Icon Integration:
 *    - Supports dynamic arrow icons (`wa` white arrow, `ba` blue arrow) with hover slide animation (`group-hover:translate-x-1.5`).
 *    - Scaled responsively for standard and 4K displays.
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
  variant?: "primary" | "secondary";
  arrowType?: "wa" | "ba";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  arrowType,
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] border border-transparent text-white hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[#0B3090]/25"
      : "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-lg";

  const resolvedArrow = arrowType || (variant === "primary" ? "wa" : "ba");
  const arrowSrc = resolvedArrow === "ba" ? "/medical/inogen/ba.webp" : "/medical/inogen/wa.webp";

  const content = (
    <div className={`flex items-center justify-center px-6 py-3 rounded-md transition-all duration-300 ease-in-out ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src={arrowSrc}
          alt="arrow"
          className="w-[15px] h-[11px] min-[2500px]:w-[24px] min-[2500px]:h-[18px] min-[3800px]:w-[36px] min-[3800px]:h-[26px] ml-2 sm:ml-3 min-[2500px]:ml-5 min-[3800px]:ml-6 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
        />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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

