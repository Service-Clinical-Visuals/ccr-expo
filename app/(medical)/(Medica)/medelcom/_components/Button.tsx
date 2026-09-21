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
  showArrow = true,
}: ButtonProps) {
  let buttonStyle = "bg-[#0287DC] text-white hover:bg-[#0275bd] shadow-md shadow-[#0287DC]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#0287DC] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#0287DC] border-1 border-[#0287DC] hover:bg-[#0287DC] hover:text-white";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-white border border-white hover:bg-white hover:text-[#202020]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[10px] rounded-[8px] px-[25px] py-[10px] w-[164px] h-[40px] select-none transition-all duration-200 group active:scale-95 cursor-pointer font-bold font-inter ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-inter">
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[8px] font-inter font-bold"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[8px] cursor-pointer font-inter font-bold"
    >
      {content}
    </button>
  );
}
