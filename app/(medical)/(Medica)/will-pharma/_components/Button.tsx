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
      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-sm"
      : variant === "secondary"
      ? "bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-sm"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-2.5 min-[3800px]:px-12 min-[3800px]:py-5 rounded-[5px] min-[3800px]:rounded-[10px] transition-all duration-300 font-bold ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight
          className="w-4 h-4 min-[3800px]:w-8 min-[3800px]:h-8 ml-2 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
          strokeWidth={2.2}
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
