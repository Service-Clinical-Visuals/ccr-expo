"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
  fullWidth = false,
}: ButtonProps) {
  const hasDisplayOverride = /\b(hidden|flex|inline-flex|block|inline-block)\b/.test(className);
  const defaultDisplay = hasDisplayOverride ? "" : "inline-flex items-center justify-center";

  const baseClasses = `${defaultDisplay} bg-[#24a6a8] hover:bg-[#1f8e90] text-white font-medium rounded-md sm:rounded-lg px-6 py-2.5 transition-all duration-200 shadow-sm active:scale-95 select-none cursor-pointer ${
    fullWidth ? "w-full" : ""
  } ${className}`.trim();

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={`focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24a6a8] focus-visible:ring-offset-2 ${baseClasses}`}
      >
        <span className="btn-text whitespace-nowrap">{children}</span>
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      aria-label={ariaLabel}
      className={`border-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#24a6a8] focus-visible:ring-offset-2 ${baseClasses}`}
    >
      <span className="btn-text whitespace-nowrap">{children}</span>
    </button>
  );
}
