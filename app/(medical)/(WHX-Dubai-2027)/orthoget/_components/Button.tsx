/**
 * Button Component - OrthoGet
 *
 * ARCHITECTURAL REFERENCE (from Inogen):
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 *    - Variants:
 *      * 'primary': Blue background (`var(--color-primary)` #0624BF) with white text.
 *      * 'secondary' / 'outline': White outline with white text or dark outline with dark text.
 * 3. Directional Icon Integration:
 *    - Supports dynamic arrow icon with hover slide animation (`group-hover:translate-x-1.5`).
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
  variant?: "primary" | "secondary" | "outline-dark";
  icon?: React.ReactNode;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  icon,
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] border border-transparent text-white hover:bg-[var(--color-primary-hover)] hover:shadow-lg hover:shadow-[#0624BF]/25"
      : variant === "outline-dark"
      ? "bg-transparent border border-[#202020] text-[#202020] hover:bg-black/5"
      : "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-lg";

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-2.5 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] transition-all duration-300 ease-in-out ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        icon || (
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 2k:w-7 2k:h-7 4k:w-10 4k:h-10 ml-2 sm:ml-2.5 2k:ml-4 4k:ml-6 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0" />
        )
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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

