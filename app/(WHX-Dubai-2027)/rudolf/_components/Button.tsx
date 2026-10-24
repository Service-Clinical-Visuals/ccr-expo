"use client";

import React from "react";
import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";

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
    primary:
      "bg-[#1A6AFF] text-white hover:bg-[#0F57E0] border border-transparent",
    secondary:
      "bg-white text-[#1A6AFF] hover:bg-[#EEF4FF] border border-transparent",
    outline:
      "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  // Pill shape; padding, gap and icon scale up to 4K
  const content = (
    <div
      className={`flex items-center justify-center gap-2 sm:gap-2.5 2xl:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 px-5 py-2 sm:px-6 sm:py-2.5 2xl:px-7 2xl:py-3 min-[2500px]:px-10 min-[2500px]:py-4 min-[3800px]:px-14 min-[3800px]:py-6 rounded-full transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <FiArrowUpRight
          className="w-4 h-4 sm:w-[18px] sm:h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
          strokeWidth={2.5}
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
