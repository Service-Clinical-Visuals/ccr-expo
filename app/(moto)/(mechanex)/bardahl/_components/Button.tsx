"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";

interface ButtonProps {
  text?: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "pill" | "primary" | "secondary" | "circle";
  iconDirection?: "right" | "up-right";
  children?: React.ReactNode;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "pill",
  iconDirection = "up-right",
  children,
}: ButtonProps) => {
  const IconComponent = iconDirection === "up-right" ? ArrowUpRight : ArrowRight;

  let content: React.ReactNode;

  if (variant === "pill") {
    // Signature Bardahl pill button: grey capsule container with attached yellow circular icon badge
    content = (
      <div className={`inline-flex items-center ${className}`}>
        {/* Left: Grey Capsule with text */}
        <div className="h-11 sm:h-12 min-[2500px]:h-16 min-[3800px]:h-24 px-5 sm:px-6 min-[2500px]:px-9 min-[3800px]:px-14 rounded-full bg-[#4A4A4A] group-hover:bg-[#585858] transition-colors duration-300 flex items-center justify-center">
          <span className="text-white font-secondary font-medium tracking-wide text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl whitespace-nowrap">
            {text || children}
          </span>
        </div>

        {/* Right: Yellow circular arrow badge slightly touching */}
        {showIcon && (
          <div className="w-11 h-11 sm:w-12 sm:h-12 min-[2500px]:w-16 min-[2500px]:h-16 min-[3800px]:w-24 min-[3800px]:h-24 rounded-full bg-[#F8EA17] group-hover:bg-[#FFE600] flex items-center justify-center shrink-0 -ml-[1px] min-[2500px]:-ml-[2px] min-[3800px]:-ml-[3px] transition-all duration-300 group-hover:scale-105 z-10 shadow-sm">
            <IconComponent
              className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 text-black transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.5}
            />
          </div>
        )}
      </div>
    );
  } else if (variant === "circle") {
    // Circular action button
    content = (
      <div
        className={`w-14 h-14 md:w-16 md:h-16 min-[3800px]:w-28 min-[3800px]:h-28 rounded-full bg-white/20 hover:bg-[#F8EA17] border border-white/30 flex items-center justify-center transition-all duration-300 group ${className}`}
      >
        <IconComponent
          className="w-6 h-6 min-[3800px]:w-12 min-[3800px]:h-12 text-white group-hover:text-black transition-colors duration-300"
          strokeWidth={2}
        />
      </div>
    );
  } else if (variant === "secondary") {
    content = (
      <div
        className={`inline-flex items-center justify-center px-6 py-3 min-[3800px]:px-12 min-[3800px]:py-6 rounded-md bg-transparent border border-white/40 text-white hover:bg-white/10 transition-colors ${className}`}
      >
        <span className="button whitespace-nowrap">{text || children}</span>
        {showIcon && (
          <IconComponent
            className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 ml-2 sm:ml-3 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
            strokeWidth={2}
          />
        )}
      </div>
    );
  } else {
    // Primary (solid yellow)
    content = (
      <div
        className={`inline-flex items-center justify-center px-6 py-3 min-[3800px]:px-12 min-[3800px]:py-6 rounded-md bg-[#F8EA17] hover:bg-[#e5d710] text-black font-semibold transition-colors ${className}`}
      >
        <span className="button whitespace-nowrap text-black">{text || children}</span>
        {showIcon && (
          <IconComponent
            className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 ml-2 sm:ml-3 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0 text-black"
            strokeWidth={2.5}
          />
        )}
      </div>
    );
  }

  const wrapperStyles =
    "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
