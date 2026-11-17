"use client";

import React from "react";
import Link from "next/link";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  ariaLabel?: string;
}

/** WINFO button: solid magenta pill. */
export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  ariaLabel,
}: ButtonProps) {
  const classes = `btn-text inline-flex items-center justify-center rounded-full px-[1.45em] py-[0.5em] bg-[var(--primary)] text-white font-body font-semibold whitespace-nowrap select-none transition-all duration-300 hover:bg-[var(--primary-hover)] hover:shadow-[0_6px_18px_rgba(163,0,79,0.3)] active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 ${className}`;

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
