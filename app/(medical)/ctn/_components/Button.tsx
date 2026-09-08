"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
  const isPrimary = variant === "primary";

  // Pill styling
  const pillStyle = isPrimary
    ? "bg-[#3d57a5] text-white group-hover:bg-[#324787] shadow-md shadow-[#3d57a5]/25"
    : "bg-white text-[#1b2559] group-hover:bg-slate-100 shadow-md";

  // Circle badge styling
  const circleStyle = isPrimary
    ? "bg-white text-[#1b2559] shadow-md"
    : "bg-white text-[#3d57a5] shadow-md";

  const content = (
    <div className={`inline-flex items-center  group select-none transition-transform duration-200 active:scale-95 ${className}`}>
      {/* Pill with Button Text */}
      <div className={`rounded-full px-5 py-2 sm:px-6 sm:py-2.5 transition-all duration-200 flex items-center justify-center ${pillStyle}`}>
        <span className="btn-text font-semibold whitespace-nowrap">
          {children}
        </span>
      </div>

      {/* Circular Arrow Badge */}
      <div className={`w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg ${circleStyle}`}>
        <ArrowUpRight className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </div>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className="inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d57a5] focus-visible:ring-offset-2 rounded-full"
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
      className="inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#3d57a5] focus-visible:ring-offset-2 rounded-full cursor-pointer"
    >
      {content}
    </button>
  );
}
