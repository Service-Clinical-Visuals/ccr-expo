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
      ? "bg-[#222D83] border border-transparent text-white hover:bg-[#1A2368]"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const content = (
    <div
      className={`h-[44px] sm:h-[48px] md:h-[50px] lg:h-[52px] min-[1920px]:h-[68px] min-[2500px]:h-[84px] min-[3800px]:h-[116px] px-5 sm:px-6 md:px-7 min-[1920px]:px-9 min-[2500px]:px-12 min-[3800px]:px-16 rounded-md min-[2500px]:rounded-xl min-[3800px]:rounded-2xl flex items-center justify-center transition-colors ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src="/medical/fisioline/right_arrow.webp"
          alt="arrow"
          className="w-3.5 sm:w-4 min-[1920px]:w-4.5 min-[2500px]:w-6 min-[3800px]:w-8 h-auto object-contain ml-2.5 min-[1920px]:ml-3.5 min-[2500px]:ml-5 min-[3800px]:ml-7 group-hover:translate-x-1 transition-transform shrink-0"
        />
      )}
    </div>
  );

  const wrapperStyles = "inline-block cursor-pointer outline-none active:scale-95 transition-transform duration-200 select-none group";

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
