"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary" | "outline";
  arrowSrc?: string;
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  variant = "primary",
  arrowSrc,
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[#911920] hover:bg-[#731319] text-white shadow-sm hover:shadow-lg hover:shadow-[#911920]/25"
      : variant === "outline"
      ? "bg-transparent border border-[#911920] text-[#911920] hover:bg-[#911920] hover:text-white"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const content = (
    <div
      className={`inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 2k:px-8 2k:py-4 4k:px-12 4k:py-6 rounded-[5px] 2k:rounded-[8px] 4k:rounded-[12px] font-semibold transition-all duration-300 ease-in-out font-palanquin font-['Palanquin',sans-serif] ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && arrowSrc && (
        <img
          src={arrowSrc}
          alt="arrow"
          className="w-[14px] h-[10px] 2k:w-[22px] 2k:h-[16px] 4k:w-[32px] 4k:h-[24px] ml-2 sm:ml-3 2k:ml-4 4k:ml-6 group-hover:translate-x-1.5 transition-transform duration-300 ease-out shrink-0 object-contain"
        />
      )}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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
