"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children?: React.ReactNode;
  text?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "outline-primary" | "outline-white";
  className?: string;
  type?: "button" | "submit" | "reset";
  showIcon?: boolean;
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

export default function Button({
  children,
  text,
  href,
  onClick,
  variant = "outline-primary",
  className = "",
  type = "button",
  showIcon = true,
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const isDarkBg = variant === "white" || variant === "outline-white";

  // Variant styles matching the user's screenshots
  const variantStyles = isDarkBg
    ? "border border-white text-white hover:bg-white hover:text-[#155184]"
    : "border border-[#155184] text-[#155184] hover:bg-[#155184] hover:text-white";

  const buttonContent = (
    <div
      className={`inline-flex items-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2 sm:py-2.5 rounded-lg transition-all duration-300 font-raleway group active:scale-95 select-none ${variantStyles} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap">
        {children || text}
      </span>
      {showIcon && (
        <ArrowRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
      )}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#155184] focus-visible:ring-offset-2 rounded-lg"
      >
        {buttonContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#155184] focus-visible:ring-offset-2 rounded-lg"
    >
      {buttonContent}
    </button>
  );
}
