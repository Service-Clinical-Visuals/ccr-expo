"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  showArrow?: boolean;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "white" | "blue";
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  ariaLabel?: string;
  disabled?: boolean;
}

const Button = ({
  text,
  children,
  href,
  onClick,
  className = "",
  showIcon = true,
  showArrow,
  variant = "primary",
  type = "button",
  target,
  rel,
  ariaLabel,
  disabled = false,
}: ButtonProps) => {
  const displayArrow = showArrow !== undefined ? showArrow : showIcon;
  const buttonContent = children ?? text ?? "Request a PSI Case";

  const variantStyles: Record<string, string> = {
    primary:
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent shadow-sm",
    secondary:
      "bg-[var(--color-secondary)] text-white hover:bg-[var(--color-secondary-hover)] border border-transparent shadow-sm",
    outline:
      "bg-transparent text-[var(--color-primary)] border border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
    "outline-white":
      "bg-transparent text-white border border-white hover:bg-white/10",
    white:
      "bg-white text-[var(--color-primary)] hover:bg-gray-50 border border-transparent shadow-sm",
    blue:
      "bg-[#003470] text-white hover:bg-[#002654] border border-transparent shadow-sm",
  };

  const buttonClasses = `button inline-flex items-center justify-center gap-3.5 sm:gap-4 min-[2500px]:gap-6 min-[3800px]:gap-8 px-6 py-3 sm:px-8 sm:py-3.5 min-[2500px]:px-12 min-[2500px]:py-5 min-[3800px]:px-16 min-[3800px]:py-7 rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] transition-all duration-300 select-none group cursor-pointer active:scale-[0.98] outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] focus-visible:ring-offset-2 ${
    variantStyles[variant] || variantStyles.primary
  } ${disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""} ${className}`.trim();

  const innerContent = (
    <>
      <span className="button whitespace-nowrap text-center leading-none">
        {buttonContent}
      </span>
      {displayArrow && (
        <ArrowRight
          className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0"
          strokeWidth={2.2}
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target={target}
        rel={rel}
        aria-label={ariaLabel}
        className={buttonClasses}
        onClick={onClick}
      >
        {innerContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      className={buttonClasses}
    >
      {innerContent}
    </button>
  );
};

export default Button;
