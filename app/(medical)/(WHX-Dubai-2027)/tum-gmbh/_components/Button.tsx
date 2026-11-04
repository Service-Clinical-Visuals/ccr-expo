"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  variant?: "primary" | "secondary";
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
      ? "bg-[var(--color-primary)] border border-transparent text-white hover:bg-[var(--color-primary-hover)] shadow-sm"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const content = (
    <div
      className={`flex items-center justify-center px-4 py-2 sm:px-4.5 sm:py-2.5 min-[1920px]:px-5.5 min-[1920px]:py-3 min-[2500px]:px-7.5 min-[2500px]:py-3.5 min-[3800px]:px-11 min-[3800px]:py-5.5 rounded-[4px] transition-colors ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src="/medical/tum-gmbh/arrow.webp"
          alt="arrow"
          className="w-[11px] h-auto sm:w-[13px] min-[1920px]:w-[14px] min-[2500px]:w-[19px] min-[3800px]:w-[27px] ml-2 sm:ml-2.5 min-[1920px]:ml-3 min-[2500px]:ml-4 min-[3800px]:ml-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0 object-contain"
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

