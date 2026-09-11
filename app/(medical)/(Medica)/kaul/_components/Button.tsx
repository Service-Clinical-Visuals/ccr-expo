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
  icon?: React.ReactNode;
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
  icon,
}: ButtonProps) {
  const isDarkBg = variant === "white" || variant === "outline-white";

  // Variant styles matching the user's screenshots
  const variantStyles = isDarkBg
    ? "border border-white text-white hover:bg-white/10"
    : "border border-[#FCC100] text-[#FCC100] hover:bg-[#FCC100]/10";

  const buttonContent = (
    <div
      className={`inline-flex items-center gap-2 px-6 py-2.5 rounded-[10px] transition-colors duration-300 font-poppins font-semibold group active:scale-95 select-none ${variantStyles} ${className}`}
    >
      <span className="btn-text whitespace-nowrap">
        {children || text}
      </span>
      {showIcon && (
        icon || <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0" />
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
        className="inline-block cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FCC100] focus-visible:ring-offset-2 rounded-md"
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
      className="inline-block bg-transparent p-0 border-0 cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#FCC100] focus-visible:ring-offset-2 rounded-md"
    >
      {buttonContent}
    </button>
  );
}
