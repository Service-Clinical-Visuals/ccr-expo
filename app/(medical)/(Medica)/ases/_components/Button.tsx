"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline" | "outline-white" | "blue";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "bg-[var(--color-accent)] border border-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-sm",
    secondary:
      "bg-[var(--color-primary)] border border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
    outline:
      "bg-transparent border border-[var(--color-accent)] text-[var(--color-muted)] hover:bg-[var(--color-accent)]/10",
    "outline-white":
      "bg-transparent border border-white text-white hover:bg-white/10",
    blue: "bg-[var(--color-primary)] border border-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)]",
  }[variant];

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-2.5 rounded-[5px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap text-center font-semibold font-[var(--font-primary)]">
        {text}
      </span>
      {showIcon && (
        <ArrowRight
          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
          strokeWidth={2}
        />
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

  if (href) {
    return (
      <Link href={href} className={wrapperStyles}>
        {content}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
