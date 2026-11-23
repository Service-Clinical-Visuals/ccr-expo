/**
 * Button Component - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 *    - Primary variant uses Pajunk pine green (`#144835`) with lime accent text (`#DCE64D`).
 *    - Outline variant uses 1px solid white border (`border-white text-white`).
 * 3. Directional Icon Integration:
 *    - Inline SVG arrow with smooth hover slide animation (`group-hover:translate-x-1.5`).
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
  variant?: "primary" | "outline" | "white";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {
  let variantStyles = "";
  let arrowColor = "#DCE64D";

  if (variant === "primary") {
    variantStyles = "bg-[#144835] hover:bg-[#0E3225] text-[#DCE64D] border border-transparent shadow-sm hover:shadow-lg hover:shadow-[#144835]/25";
    arrowColor = "#DCE64D";
  } else if (variant === "outline") {
    variantStyles = "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-lg";
    arrowColor = "#FFFFFF";
  } else if (variant === "white") {
    variantStyles = "bg-white hover:bg-gray-100 text-[#144835] border border-gray-200 shadow-sm hover:shadow-md";
    arrowColor = "#144835";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-2.5 2k:gap-4 4k:gap-6 px-5 py-2.5 sm:px-6 sm:py-3 2k:!px-10 2k:!py-5 4k:!px-14 4k:!py-7 rounded-[5px] 2k:rounded-[8px] 4k:rounded-[12px] transition-all duration-300 ease-in-out ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <svg
          className="w-4 h-3 sm:w-4.5 sm:h-3.5 2k:w-7 2k:h-5 4k:w-10 4k:h-7 group-hover:translate-x-1.5 2k:group-hover:translate-x-3 4k:group-hover:translate-x-4 transition-transform duration-300 ease-out shrink-0"
          viewBox="0 0 20 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 6H18.5M18.5 6L13.5 1M18.5 6L13.5 11"
            stroke={arrowColor}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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

