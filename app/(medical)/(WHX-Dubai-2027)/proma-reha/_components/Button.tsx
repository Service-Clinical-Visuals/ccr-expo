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
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] border border-transparent text-white hover:bg-[var(--color-primary-hover)] shadow-sm"
      : variant === "outline"
      ? "bg-white border border-[var(--color-primary)] text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
      : "bg-[var(--color-secondary)] border border-transparent text-white hover:bg-[var(--color-secondary-hover)]";

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-2.5 sm:py-3 min-[2500px]:px-10 min-[2500px]:py-5 min-[3800px]:px-14 min-[3800px]:py-7 rounded-[10px] min-[2500px]:rounded-[16px] min-[3800px]:rounded-[22px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight
          className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-8 min-[2500px]:h-8 min-[3800px]:w-10 min-[3800px]:h-10 ml-2 sm:ml-2.5 min-[2500px]:ml-4 min-[3800px]:ml-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
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
