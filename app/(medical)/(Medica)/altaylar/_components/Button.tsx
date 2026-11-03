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
  let buttonStyle = "bg-[#07A1A8] text-white hover:bg-[#006769]";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#07A1A8] hover:bg-slate-50";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#07A1A8] border border-[#07A1A8] hover:bg-[#07A1A8] hover:text-white";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-white border border-white hover:bg-white hover:text-[#07A1A8]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center rounded-[10px] px-[20px] py-[10px] w-auto h-[40px] shadow-[0px_1px_2px_0px_#0000000D] select-none transition-all duration-300 group active:scale-95 cursor-pointer font-bold font-raleway opacity-100 ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-raleway">
        {children}
      </span>
      {showArrow && (
        <span className="inline-flex items-center overflow-hidden max-w-0 opacity-0 -translate-x-2 transition-all duration-300 ease-out group-hover:max-w-6 group-hover:opacity-100 group-hover:translate-x-0 group-hover:ml-2 shrink-0">
          <ArrowRight className="w-4 h-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] font-raleway font-bold"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 rounded-[10px] cursor-pointer font-raleway font-bold"
    >
      {content}
    </button>
  );
}
