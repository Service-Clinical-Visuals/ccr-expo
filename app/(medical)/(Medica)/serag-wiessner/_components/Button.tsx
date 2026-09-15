"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "outline";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
  showArrow = true,
}: ButtonProps) {
  let buttonStyle = "bg-[#e2007a] text-white hover:bg-[#c4006a] shadow-md shadow-[#e2007a]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#e2007a] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#e2007a] border-2 border-[#e2007a] hover:bg-[#e2007a] hover:text-white";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 sm:px-6 sm:py-2.5 select-none transition-all duration-200 group active:scale-95 cursor-pointer ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-exo2">
        {children}
      </span>
      {showArrow && (
        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2007a] focus-visible:ring-offset-2 rounded-full"
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e2007a] focus-visible:ring-offset-2 rounded-full cursor-pointer"
    >
      {content}
    </button>
  );
}
