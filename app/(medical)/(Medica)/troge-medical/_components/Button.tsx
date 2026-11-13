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
  const isPrimary = variant === "primary";

  const variantStyles = isPrimary
    ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent shadow-sm"
    : "bg-transparent border border-white text-white hover:bg-white/10";

  const arrowSrc = isPrimary
    ? "/medical/troge-medical/white_arrow.webp"
    : "/medical/troge-medical/black_arrow.webp";

  const content = (
    <div
      className={`flex items-center justify-center px-5 py-2.5 min-[2500px]:px-7 min-[2500px]:py-3.5 min-[3800px]:px-10 min-[3800px]:py-5 rounded-md transition-colors ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src={arrowSrc}
          alt=""
          className="w-[14px] h-[10px] min-[2500px]:w-[24px] min-[2500px]:h-[17px] min-[3800px]:w-[34px] min-[3800px]:h-[24px] ml-2.5 sm:ml-3 min-[2500px]:ml-5 min-[3800px]:ml-8 group-hover:translate-x-1 transition-transform duration-300 object-contain shrink-0"
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

