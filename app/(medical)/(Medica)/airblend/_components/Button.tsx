"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline" | "white";
  target?: string;
}

/**
 * Button Component - Airblend
 *
 * EXACT FIGMA SPECIFICATION:
 * 1. Dual Element Shape:
 *    - Left: Pill capsule (rounded-full) containing the button text.
 *    - Right: Attached separate circle (rounded-full bg-black) touching the pill (gap-0).
 *    - Because both are rounded-full and 50px height, touching at the equator creates the signature notch/bubble junction.
 * 2. Dimensions & Responsive Scaling:
 *    - Mobile: h-[42px], circle: 42x42px, arrow: 20x20px
 *    - Desktop: h-[50px], circle: 50x50px, arrow: 24x24px (exact Figma 50px height, 100px radius)
 *    - 2K: h-[75px], circle: 75x75px, arrow: 36x36px
 *    - 4K: h-[100px], circle: 100x100px, arrow: 48x48px
 * 3. Color Tokens:
 *    - Primary Pill: #7BC142 (hover: #6BAE37) with bold white text.
 *    - Circle: Pure Black (#000000) with green directional arrow (#7BC142).
 */
const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  target,
}: ButtonProps) => {
  const variantStyles = {
    primary: {
      pill: "bg-[#7BC142] group-hover:bg-[#6BAE37] text-white",
      circle: "bg-black text-[#7BC142]",
      arrow: "text-[#7BC142]",
    },
    secondary: {
      pill: "bg-[#2A2A2A] group-hover:bg-[#1E1E1E] text-white",
      circle: "bg-black text-[#7BC142]",
      arrow: "text-[#7BC142]",
    },
    outline: {
      pill: "bg-transparent border border-white text-white group-hover:bg-white/10",
      circle: "bg-black text-white",
      arrow: "text-white",
    },
    white: {
      pill: "bg-white group-hover:bg-gray-100 text-[#2A2A2A]",
      circle: "bg-black text-[#7BC142]",
      arrow: "text-[#7BC142]",
    },
  }[variant];

  const content = (
    <div className={`inline-flex items-center gap-0 select-none ${className}`}>
      {/* 1. Left Pill Shape with text */}
      <div
        className={`h-[42px] sm:h-[50px] 2k:h-[75px] 4k:h-[100px] px-5 sm:px-7 2k:px-11 4k:px-16 rounded-full flex items-center justify-center transition-all duration-300 ease-in-out shadow-xs ${variantStyles.pill}`}
      >
        <span className="button whitespace-nowrap font-semibold tracking-wide">
          {text}
        </span>
      </div>

      {/* 2. Right Attached Circle with Arrow */}
      {showIcon && (
        <div
          className={`w-[42px] h-[42px] sm:w-[50px] sm:h-[50px] 2k:w-[75px] 2k:h-[75px] 4k:w-[100px] 4k:h-[100px] rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ease-in-out shadow-xs ${variantStyles.circle}`}
        >
          <ArrowUpRight
            className={`w-5 h-5 sm:w-6 sm:h-6 2k:w-9 2k:h-9 4k:w-12 4k:h-12 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${variantStyles.arrow}`}
            strokeWidth={2.75}
          />
        </div>
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

  if (href) {
    return (
      <Link href={href} target={target} className={wrapperStyles} onClick={onClick}>
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
