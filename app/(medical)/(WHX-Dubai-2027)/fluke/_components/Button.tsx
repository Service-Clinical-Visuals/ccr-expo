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
      "bg-secondary text-primary hover:bg-secondary-hover border border-transparent",
    secondary:
      "bg-primary text-white hover:bg-primary-hover border border-transparent",
    outline:
      "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  // Rounded rectangle (as in the header's Contact Us); padding, gap, radius and icon scale up to 4K
  const content = (
    <div
      className={`flex items-center justify-center gap-2 2xl:gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-5 px-3 py-1.5 sm:px-3 sm:py-1 2xl:px-[11px] 2xl:py-[5px] min-[2500px]:px-4 min-[2500px]:py-2 min-[3800px]:px-6 min-[3800px]:py-3 rounded-[6px] min-[2500px]:rounded-[9px] min-[3800px]:rounded-[12px] transition-all duration-300 ${variantStyles} ${className}`}
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
    <button type={type} onClick={onClick} className={wrapperStyles}>
      {content}
    </button>
  );
};

export default Button;
