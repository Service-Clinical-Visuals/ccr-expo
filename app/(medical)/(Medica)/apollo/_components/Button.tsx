"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "solid";
  ariaLabel?: string;
}

/**
 * Apollo button: green outline (default) or solid green, with an arrow and a
 * small triangular notch in the bottom-right corner.
 * Hover: outline fills green; solid darkens. The arrow nudges right.
 */
export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  variant = "outline",
  ariaLabel,
}: ButtonProps) {
  const variantCls =
    variant === "solid"
      ? "bg-[var(--primary)] border-[var(--primary)] text-white hover:bg-[var(--primary-hover)] hover:border-[var(--primary-hover)] after:bg-white"
      : "bg-white border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white after:bg-[var(--primary)]";

  const classes = `group/btn relative btn-text inline-flex items-center justify-center gap-[0.7em] rounded-[10px] px-[1.4em] py-[0.5em] border font-head font-semibold whitespace-nowrap select-none transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--primary)] focus-visible:ring-offset-2 after:content-[''] after:absolute after:-right-px after:-bottom-px after:w-[0.4em] after:h-[0.4em] after:[clip-path:polygon(100%_0,100%_100%,0_100%)] ${variantCls} ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        className="w-[1em] h-[1em] transition-transform duration-300 group-hover/btn:translate-x-1"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} onClick={onClick} aria-label={ariaLabel} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={ariaLabel} className={classes}>
      {content}
    </button>
  );
}
