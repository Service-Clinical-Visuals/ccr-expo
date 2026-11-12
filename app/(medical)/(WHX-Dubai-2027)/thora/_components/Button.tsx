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
  target?: string;
  rel?: string;
  ariaLabel?: string;
}

/**
 * Orange outline button (Figma components 59–61).
 * Hover: fills orange, text turns white and an arrow slides in.
 */
export default function Button({
  children,
  href,
  onClick,
  className = "",
  type = "button",
  target,
  rel,
  ariaLabel,
}: ButtonProps) {
  const classes = `group/btn btn-text inline-flex items-center justify-center gap-0 hover:gap-[0.6em] rounded-[10px] px-[1.6em] py-[0.6em] border border-[var(--accent)] bg-white text-[var(--accent)] hover:bg-[var(--accent)] hover:text-white font-inter font-medium whitespace-nowrap select-none transition-all duration-300 active:scale-95 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${className}`;

  const content = (
    <>
      <span>{children}</span>
      <ArrowRight
        aria-hidden
        className="w-0 h-[1em] opacity-0 group-hover/btn:w-[1em] group-hover/btn:opacity-100 transition-all duration-300"
      />
    </>
  );

  if (href) {
    return (
      <Link href={href} target={target} rel={rel} aria-label={ariaLabel} className={classes}>
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
