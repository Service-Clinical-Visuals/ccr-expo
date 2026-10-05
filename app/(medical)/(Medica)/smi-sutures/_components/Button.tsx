"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
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
}: ButtonProps) {
  const variantStyle =
    variant === "primary"
      ? "bg-[#3a5da8] text-white hover:bg-[#2f4d8f] shadow-md shadow-[#3a5da8]/25"
      : "bg-white text-[#3a5da8] hover:bg-slate-100 shadow-md";

  const content = (
    <span
      className={`group inline-flex items-center gap-2 rounded-full px-5 py-2 sm:px-6 sm:py-2.5 select-none transition-all duration-200 active:scale-95 ${variantStyle} ${className}`}
    >
      <span className="btn-text font-medium whitespace-nowrap">{children}</span>
      <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform duration-200 group-hover:translate-x-1" />
    </span>
  );

  const focusStyle =
    "inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3a5da8] focus-visible:ring-offset-2";

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} aria-label={ariaLabel} className={focusStyle}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`${focusStyle} bg-transparent p-0 border-0 cursor-pointer`}
    >
      {content}
    </button>
  );
}
