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
  variant?: "primary" | "secondary" | "outline" | "white";
  type?: "button" | "submit";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = true,
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const variantStyles = {
    primary:
      "bg-secondary text-white border border-secondary hover:bg-white hover:text-secondary",
    secondary:
      "bg-white text-primary hover:bg-[#FFF1E8] border border-transparent",
    outline:
      "bg-transparent border border-white text-white hover:bg-white/10",
    white:
      "bg-white text-primary hover:bg-[#FFF1E8] border border-transparent",
  }[variant];

  // Rounded rectangle; padding, gap, radius and icon scale up to 4K.
  // On hover the ↗ arrow rotates 45° to point → (primary also flips to white with orange text/border).
  const content = (
    <div
      className={`flex items-center justify-center gap-2.5 2xl:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-5 px-3.5 py-2 sm:px-4 2xl:px-4 2xl:py-2 min-[2500px]:px-6 min-[2500px]:py-3 min-[3800px]:px-8 min-[3800px]:py-4 rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button !font-medium whitespace-nowrap">{text}</span>
      {showIcon && (
        <FiArrowUpRight
          className="w-[18px] h-[18px] 2xl:w-5 2xl:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 group-hover:rotate-45 transition-transform duration-300"
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
    <button type={type} onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
