"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  /** outline = dark outline (light sections), yellow = yellow outline (header), white = solid white (dark sections) */
  variant?: "outline" | "yellow" | "white";
  ariaLabel?: string;
}

const VARIANTS = {
  outline:
    "bg-transparent border-[var(--heading)] text-[var(--heading)] hover:bg-[var(--heading)] hover:text-white focus-visible:ring-[var(--heading)]",
  yellow:
    "bg-transparent border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--dark)] focus-visible:ring-[var(--primary)]",
  white:
    "bg-white border-white text-[var(--heading)] hover:bg-[var(--primary)] hover:border-[var(--primary)] focus-visible:ring-white",
};

export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  variant = "outline",
  ariaLabel,
}: ButtonProps) {
  const classes = `btn-text inline-flex items-center justify-center rounded-[8px] px-[1.3em] py-[0.6em] border font-head font-medium whitespace-nowrap select-none transition-colors duration-300 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${VARIANTS[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {children}
    </button>
  );
}
