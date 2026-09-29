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
  let buttonStyle = "bg-[#1B489F] text-[#FFFFFF] hover:bg-[#153a82]";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#1B489F] hover:bg-slate-50";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#1B489F] border border-[#1B489F] hover:bg-[#1B489F] hover:text-[#FFFFFF]";
  } else if (variant === "white-outline") {
    buttonStyle = "bg-transparent text-[#FFFFFF] border border-white hover:bg-white hover:text-[#1B489F]";
  }

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-[10px] rounded-[16px] p-[18px] h-[40px] opacity-100 select-none transition-all duration-200 group active:scale-95 cursor-pointer font-regular font-dm-sans ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-regular whitespace-nowrap font-dm-sans">
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
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B489F] focus-visible:ring-offset-2 rounded-[16px] font-dm-sans font-regular"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1B489F] focus-visible:ring-offset-2 rounded-[16px] cursor-pointer font-dm-sans font-regular"
    >
      {content}
    </button>
  );
}

