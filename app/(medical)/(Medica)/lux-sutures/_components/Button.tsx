"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "secondary" | "primary" | "white";
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

const VARIANT_STYLES: Record<NonNullable<ButtonProps["variant"]>, string> = {
  secondary: "bg-[#0071ce] text-white hover:bg-[#005ca8] shadow-md shadow-[#0071ce]/25",
  primary: "bg-[#deeefa] text-[#0071ce] hover:bg-[#cbe3f6]",
  white: "bg-white text-[#0071ce] hover:bg-slate-100 shadow-md",
};

export default function Button({
  children,
  href,
  onClick,
  variant = "secondary",
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const content = (
    <span
      className={`inline-flex items-center justify-center rounded-full px-5 py-2 sm:px-6 sm:py-2.5 select-none transition-all duration-200 active:scale-95 ${VARIANT_STYLES[variant]} ${className}`}
    >
      <span className="btn-text font-medium whitespace-nowrap">{children}</span>
    </span>
  );

  const focusStyle =
    "inline-block rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0071ce] focus-visible:ring-offset-2";

  if (href !== undefined) {
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
