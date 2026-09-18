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
  let buttonStyle = "bg-[#3BB3C3] text-white hover:bg-[#2f8f9c] shadow-md shadow-[#3BB3C3]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#3BB3C3] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#3BB3C3] border-1 border-[#3BB3C3] hover:bg-[#3BB3C3] hover:text-white";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-white border border-white hover:bg-white hover:text-[#202020]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[10px] rounded-[10px] px-[25px] py-[10px] w-[164px] h-[40px] select-none transition-all duration-200 group active:scale-95 cursor-pointer font-fraunces ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-fraunces">
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] font-fraunces"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] cursor-pointer font-fraunces"
    >
      {content}
    </button>
  );
}
