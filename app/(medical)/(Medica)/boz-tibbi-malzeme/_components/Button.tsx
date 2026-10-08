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
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_2px_4px_rgba(136,144,194,0.2),0px_5px_15px_rgba(37,44,97,0.15)]"
      : variant === "secondary"
      ? "bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-[0px_2px_4px_rgba(136,144,194,0.2),0px_5px_15px_rgba(37,44,97,0.15)]"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const content = (
    <div
      className={`flex items-center justify-center px-6 py-3 min-[3800px]:px-10 min-[3800px]:py-5 rounded-tr-[23px] rounded-bl-[23px] rounded-tl-none rounded-br-none transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button font-overpass whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowRight
          className="w-4 h-4 sm:w-5 sm:h-5 min-[3800px]:w-10 min-[3800px]:h-10 ml-2 sm:ml-3 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0"
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
