"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  iconType?: "arrow-right" | "arrow-up-right";
  variant?: "gradient" | "primary" | "white" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  iconType = "arrow-up-right",
  variant = "gradient",
}: ButtonProps) => {
  const variantStyles = {
    gradient: "bg-gradient-to-r from-[#3EC19F] to-[#2B7AB7] text-white hover:opacity-95 shadow-md",
    primary: "bg-[#005EAC] text-white hover:bg-[#004d8c] shadow-md",
    white: "bg-white text-[#33363F] hover:bg-gray-100 shadow-md",
    outline: "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  const iconCircleBg = {
    gradient: "bg-white text-[#2A2421]",
    primary: "bg-white text-[#005EAC]",
    white: "bg-white text-[#0063A8]",
    outline: "bg-white text-[#005EAC]",
  }[variant];

  const IconComponent = iconType === "arrow-up-right" ? ArrowUpRight : ArrowRight;

  const content = (
    <div className={`inline-flex items-center group cursor-pointer select-none ${className}`}>
      {/* Figma Pill Body - Scales smoothly with text from mobile to 4K */}
      <div
        className={`h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] min-[1536px]:h-[60px] min-[1920px]:h-[68px] min-[2500px]:h-[84px] min-[3800px]:h-[116px] px-5 sm:px-6 md:px-7 min-[1536px]:px-8 min-[1920px]:px-9 min-[2500px]:px-12 min-[3800px]:px-16 rounded-full flex items-center justify-center transition-all duration-300 z-0 ${variantStyles}`}
      >
        <span className="button whitespace-nowrap">
          {text}
        </span>
      </div>

      {/* Figma Adjacent Circular Arrow Badge - Atomic hairline gap between pill and circle */}
      {showIcon && (
        <div
          className={`w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] lg:w-[52px] lg:h-[52px] min-[1536px]:w-[60px] min-[1536px]:h-[60px] min-[1920px]:w-[68px] min-[1920px]:h-[68px] min-[2500px]:w-[84px] min-[2500px]:h-[84px] min-[3800px]:w-[116px] min-[3800px]:h-[116px] ml-[1px] min-[1920px]:ml-[1.5px] min-[2500px]:ml-[2px] min-[3800px]:ml-[3px] rounded-full flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(0,0,0,0.24)] transition-all duration-300 group-hover:scale-105 z-10 ${iconCircleBg}`}
        >
          <IconComponent
            className="w-4.5 h-4.5 sm:w-5 sm:h-5 lg:w-[22px] lg:h-[22px] min-[1536px]:w-6 min-[1536px]:h-6 min-[1920px]:w-7 min-[1920px]:h-7 min-[2500px]:w-10 min-[2500px]:h-10 min-[3800px]:w-14 min-[3800px]:h-14"
            strokeWidth={2.5}
          />
        </div>
      )}
    </div>
  );

  const wrapperStyles = "inline-block outline-none active:scale-95 transition-transform duration-200";

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
