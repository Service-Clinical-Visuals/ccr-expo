"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "white" | "outline" | "white-outline";
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
  showArrow = false,
}: ButtonProps) {
  let buttonStyle = "bg-[#65B5A0] text-[#FFFFFF] hover:bg-[#539986] shadow-md shadow-[#65B5A0]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#65B5A0] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#65B5A0] border border-[#65B5A0] hover:bg-[#65B5A0] hover:text-[#FFFFFF]";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-[#FFFFFF] border border-white hover:bg-white hover:text-[#65B5A0]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[10px] rounded-[10px] px-10 h-[56px] opacity-100 select-none transition-all duration-200 group active:scale-95 cursor-pointer font-bold font-inter ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-bold whitespace-nowrap font-inter">
        {children}
      </span>
      {showArrow && <ArrowRight className="w-8 h-8" />}
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] font-inter font-bold"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] cursor-pointer font-inter font-bold"
    >
      {content}
    </button>
  );
}
