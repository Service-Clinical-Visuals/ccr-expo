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
  showIcon = true,
  variant = "primary",
}: ButtonProps) => {
  const variantStyles = {
    primary: "bg-white text-[#0C111D] hover:bg-gray-100 shadow-md",
    secondary: "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-md",
    outline: "bg-transparent border border-white/30 text-white hover:bg-white/10",
  }[variant];

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-3 rounded-md transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight
          className="w-5 h-5 min-[3800px]:w-10 min-[3800px]:h-10 ml-2 sm:ml-3 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
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
