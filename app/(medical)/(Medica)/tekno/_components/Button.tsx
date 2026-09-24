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
  let buttonStyle = "bg-[#D22840] text-[#FFFFFF] hover:bg-[#b02135] shadow-md shadow-[#D22840]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#D22840] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#D22840] border border-[#D22840] hover:bg-[#D22840] hover:text-[#FFFFFF]";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-[#FFFFFF] border border-white hover:bg-white hover:text-[#D22840]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[10px] rounded-[8px] p-[15px] h-[42px] opacity-100 select-none transition-all duration-200 group active:scale-95 cursor-pointer font-medium font-light font-manrope ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-medium font-light whitespace-nowrap font-manrope">
        {children}
      </span>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[8px] font-manrope font-medium font-light"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[8px] cursor-pointer font-manrope font-medium font-light"
    >
      {content}
    </button>
  );
}

