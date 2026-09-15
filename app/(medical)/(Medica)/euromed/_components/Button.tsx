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
  rounded?: "full" | "md" | "sm" | "lg" | "none";
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
  rounded = "full",
}: ButtonProps) {
  let buttonStyle = "bg-[#d40708] text-white hover:bg-[#b00506] shadow-md shadow-[#d40708]/20";

  if (variant === "white") {
    buttonStyle = "bg-white text-[#d40708] hover:bg-slate-50 shadow-md";
  } else if (variant === "outline") {
    buttonStyle = "bg-transparent text-[#d40708] border-2 border-[#d40708] hover:bg-[#d40708] hover:text-white";
  }

  const roundedStyle =
    rounded === "full"
      ? "rounded-full"
      : rounded === "md"
        ? "rounded-md"
        : rounded === "sm"
          ? "rounded-sm"
          : rounded === "lg"
            ? "rounded-lg"
            : "rounded-none";

  const content = (
    <div
      className={`inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-2.5 select-none transition-all duration-200 group active:scale-95 cursor-pointer ${buttonStyle} ${className}`}
    >
      <span className="btn-text font-semibold whitespace-nowrap font-outfit">
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
        className={`inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d40708] focus-visible:ring-offset-2 `}
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
      className={`inline-block bg-transparent p-0 border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#d40708] focus-visible:ring-offset-2 cursor-pointer`}
    >
      {content}
    </button>
  );
}
