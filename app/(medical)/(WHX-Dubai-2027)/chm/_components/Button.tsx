/**
 * Button Component for ChM
 *
 * ARCHITECTURAL REFERENCE (from Inogen + Exact Figma Specification):
 * 1. Two-Piece Capsule & Circular Badge with Ultra-Tiny Hairline Gap:
 *    - Left Capsule: Elongated white pill (`rounded-full bg-white shadow-[0px_3px_8px_rgba(0,0,0,0.24)]`)
 *      holding the button label in 'Cal Sans'.
 *    - Right Circle: Circular red badge (`rounded-full bg-[#A41E27] shadow-[0px_3px_8px_rgba(0,0,0,0.24)]`)
 *      separated by an ultra-tiny hairline gap (`gap-[2px] sm:gap-[3px]`).
 * 2. Directional Vector Arrow:
 *    - Features the diagonal arrow (`↗`) pointing top-right.
 *    - Animated on group hover: `group-hover:translate-x-0.5 group-hover:-translate-y-0.5`.
 * 3. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 4. Responsive Scaling:
 *    - Fully responsive across mobile, tablet, desktop, 2K (`min-[2500px]`), and 4K (`min-[3800px]`).
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
  variant?: "white" | "primary" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "white",
}: ButtonProps) => {
  // Color configuration: Flat, crisp rendering matching Figma with visible border on white sections
  let pillBg = "bg-white text-[#2A2A2A] border border-black/20 hover:border-black/40 shadow-xs hover:bg-gray-50";
  let circleBg = "bg-[#A41E27] text-white group-hover:bg-[#85171F]";
  let arrowColor = "currentColor";

  if (variant === "primary") {
    pillBg = "bg-[#A41E27] text-white hover:bg-[#85171F]";
    circleBg = "bg-white text-[#A41E27] group-hover:bg-gray-100";
    arrowColor = "#A41E27";
  } else if (variant === "outline") {
    pillBg = "bg-transparent text-white border border-white/60 hover:bg-white/10";
    circleBg = "bg-white text-[#A41E27]";
    arrowColor = "#A41E27";
  } else if (variant === "secondary") {
    pillBg = "bg-[#2A2A2A] text-white hover:bg-black";
    circleBg = "bg-[#A41E27] text-white group-hover:bg-[#85171F]";
    arrowColor = "currentColor";
  }

  const content = (
    <div
      className={`inline-flex items-center gap-[1px] 2k:gap-[2px] 4k:gap-[3px] select-none ${className}`}
    >
      {/* Left White Pill Capsule */}
      <div
        className={`chm-btn-pill h-9 sm:h-10 md:h-11 lg:h-12 xl:h-[50px] min-[1920px]:h-14 2k:h-20 4k:h-28 px-3.5 sm:px-4 md:px-5 lg:px-6 xl:px-7 min-[1920px]:px-8 2k:px-12 4k:px-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out ${pillBg}`}
      >
        <span className="chm-btn-text font-primary text-[11px] sm:text-[13px] md:text-[14px] lg:text-[15px] xl:text-base min-[1920px]:text-[17px] 2k:text-[24px] 4k:text-[33px] whitespace-nowrap font-bold tracking-wide">
          {text}
        </span>
      </div>

      {/* Right Circular Badge with Scaled Diagonal Arrow */}
      {showIcon && (
        <div
          className={`chm-btn-circle w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 lg:w-12 lg:h-12 xl:w-[50px] xl:h-[50px] min-[1920px]:w-14 min-[1920px]:h-14 2k:w-20 2k:h-20 4k:w-28 4k:h-28 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ease-in-out ${circleBg}`}
        >
          <svg
            className="chm-btn-arrow w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 xl:w-[18px] xl:h-[18px] min-[1920px]:w-5 min-[1920px]:h-5 2k:w-8 2k:h-8 4k:w-12 4k:h-12 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 17L17 7M17 7H8M17 7V16"
              stroke={arrowColor === "currentColor" ? "white" : arrowColor}
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
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
