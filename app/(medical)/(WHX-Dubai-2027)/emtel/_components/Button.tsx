/**
 * Button Component - EMTEL
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 *    - Primary variant uses theme primary color tokens (`var(--color-primary)`: #0F78AF, border-radius 20px).
 * 3. Directional Icon Integration:
 *    - Optional icon/arrow support with responsive scaling for standard, 2K and 4K displays.
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
  iconSrc?: string;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  iconSrc,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] border border-transparent text-white shadow-sm hover:shadow-lg hover:shadow-[#0F78AF]/25"
      : variant === "outline"
      ? "bg-transparent border border-white text-white shadow-sm hover:shadow-lg"
      : "bg-white border border-gray-200 text-[var(--color-secondary)] shadow-sm hover:shadow-md";

  const content = (
    <div
      className={`relative overflow-hidden isolate flex items-center justify-center px-6 py-2.5 sm:py-3 rounded-[20px] transition-all duration-300 ease-in-out ${variantStyles} ${className}`}
    >
      {/* Smooth Black Curtain Hover Fill: comes from top to bottom on hover; retracts to top on mouse leave revealing normal color from bottom to top */}
      <span
        className="absolute inset-0 bg-black -translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-in-out pointer-events-none z-0"
        aria-hidden="true"
      />
      <span className="button whitespace-nowrap relative z-10 transition-colors duration-300">
        {text}
      </span>
      {showIcon && iconSrc && (
        <img
          src={iconSrc}
          alt="icon"
          className="relative z-10 w-[14px] h-[10px] min-[2500px]:w-[22px] min-[2500px]:h-[16px] min-[3800px]:w-[32px] min-[3800px]:h-[24px] ml-2 sm:ml-3 min-[2500px]:ml-5 min-[3800px]:ml-6 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
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

