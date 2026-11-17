/**
 * Button Component - Zinnanti Surgical
 * Master Reference: Inogen Development Standards
 *
 * 1. Dual Mode Rendering:
 *    - Renders as Next.js `<Link>` if `href` is supplied, or `<button>` for standard click handlers.
 * 2. Visual States & Transitions:
 *    - Standard hover lift: `hover:-translate-y-0.5 active:translate-y-0 active:scale-95`.
 * 3. Directional Icon Integration:
 *    - Arrow circle badge positioned near the end of the pill with tight end spacing.
 */
"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: (e?: any) => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "white" | "light" | "card";
  circleBg?: string;
  arrowColor?: string;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  circleBg,
  arrowColor,
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "bg-[#00578E] text-white hover:bg-[#004775] shadow-sm hover:shadow-lg hover:shadow-[#00578E]/25",
    secondary:
      "bg-transparent border border-white text-white hover:bg-white/10 hover:shadow-lg",
    white:
      "bg-[#FFFFFF] text-[#212121] hover:bg-[#F2F2F2] shadow-sm hover:shadow-md",
    light:
      "bg-[#F9F9F9] text-[#212121] hover:bg-white shadow-sm hover:shadow-md",
    card:
      "bg-[#00578E] text-white hover:bg-[#004775] shadow-sm hover:shadow-md",
  };

  // Default circle background and arrow color based on variant
  const defaultCircleBg =
    variant === "card" ? "bg-white" : "bg-[#01ADEF]";
  const defaultArrowColor =
    variant === "card" ? "text-[#00578E]" : "text-white";

  const resolvedCircleBg = circleBg || defaultCircleBg;
  const resolvedArrowColor = arrowColor || defaultArrowColor;

  const isFullWidth = className.includes("w-full");

  const content = (
    <div
      className={`inline-flex items-center justify-between gap-3 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 pl-5 sm:pl-6 min-[2500px]:pl-9 min-[3800px]:pl-12 pr-1.5 sm:pr-2 min-[2500px]:pr-3 min-[3800px]:pr-4 py-1.5 sm:py-2 min-[2500px]:py-3 min-[3800px]:py-4 rounded-full transition-all duration-300 ease-in-out ${variantStyles[variant]} ${className}`}
    >
      <span className="button whitespace-nowrap font-semibold text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl">
        {text}
      </span>
      {showIcon && (
        <div
          className={`w-7 h-7 sm:w-8 sm:h-8 min-[2500px]:w-12 min-[2500px]:h-12 min-[3800px]:w-16 min-[3800px]:h-16 rounded-full ${resolvedCircleBg} flex items-center justify-center shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300 ease-out shadow-sm ml-auto`}
        >
          <ArrowUpRight
            className={`w-3.5 h-3.5 sm:w-4 sm:h-4 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-9 min-[3800px]:h-9 ${resolvedArrowColor} stroke-[2.5]`}
          />
        </div>
      )}
    </div>
  );

  const wrapperStyles = `${isFullWidth ? "w-full flex" : "inline-block"} cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} className={wrapperStyles}>
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
