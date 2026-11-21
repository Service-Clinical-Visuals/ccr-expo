/**
 * Button Component - Vitrex Medical Group
 *
 * ARCHITECTURAL REFERENCE:
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 *    - Primary variant uses theme primary color tokens (`var(--color-primary)` #1B4298).
 * 3. Directional Icon Integration:
 *    - Supports dynamic arrow/icon with hover slide animation (`group-hover:translate-x-1.5`).
 *    - Scaled responsively for standard and 4K displays.
 */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline" | "expandable";
  icon?: React.ReactNode;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
  icon,
}: ButtonProps) => {
  if (variant === "expandable") {
    const resolvedIcon = icon || (
      <ArrowRight className="w-4 h-4 2k:w-7 2k:h-7 4k:w-10 4k:h-10 text-[#1B4298] group-hover:text-white group-hover:translate-x-1 transition-all duration-500 ease-in-out shrink-0" />
    );

    const content = (
      <div className={`inline-flex items-center justify-center rounded-[10px] 2k:rounded-[16px] 4k:rounded-[22px] border border-[#1B4298] bg-white hover:bg-[#1B4298] px-5 sm:px-6 py-2.5 sm:py-3 2k:px-9 2k:py-4 4k:px-12 4k:py-6 shadow-xs hover:shadow-lg hover:shadow-[#1B4298]/25 transition-all duration-500 ease-in-out cursor-pointer overflow-hidden ${className}`}>
        <span className="max-w-0 opacity-0 group-hover:max-w-[260px] 2k:group-hover:max-w-[380px] 4k:group-hover:max-w-[520px] group-hover:opacity-100 group-hover:mr-2.5 2k:group-hover:mr-4 4k:group-hover:mr-6 transition-all duration-500 ease-in-out overflow-hidden whitespace-nowrap text-white font-semibold text-[0.875rem] sm:text-[0.9375rem] lg:text-[1rem] 2k:text-[1.375rem] 4k:text-[1.875rem] tracking-tight">
          {text}
        </span>
        {resolvedIcon}
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
  }

  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] border border-transparent text-white hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[#1B4298]/25"
      : variant === "outline"
      ? "bg-transparent border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white hover:shadow-lg"
      : "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-lg";

  const content = (
    <div className={`flex items-center justify-center px-6 py-3 2k:px-10 2k:py-5 4k:px-14 4k:py-7 rounded-[10px] 2k:rounded-[16px] 4k:rounded-[22px] transition-all duration-300 ease-in-out ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && icon && (
        <span className="ml-2 sm:ml-3 2k:ml-5 4k:ml-7 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 [&>svg]:w-4 [&>svg]:h-4 2k:[&>svg]:w-7 2k:[&>svg]:h-7 4k:[&>svg]:w-10 4k:[&>svg]:h-10">
          {icon}
        </span>
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

