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
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border border-transparent",
    secondary:
      "bg-white text-[var(--color-primary)] hover:bg-gray-100 shadow-[0px_3px_8px_rgba(0,0,0,0.24)] border border-transparent",
    outline:
      "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  const content = (
    <div
      className={`flex items-center justify-center px-5 py-3 rounded-[10px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <img
          src="/medical/hermann/arrow.webp"
          alt=""
          className={`w-3.5 h-auto min-[3800px]:w-6 ml-2.5 min-[3800px]:ml-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0 object-contain ${
            variant === "secondary"
              ? "brightness-0 [filter:invert(14%)_sepia(87%)_saturate(6004%)_hue-rotate(357deg)_brightness(87%)_contrast(100%)]"
              : ""
          }`}
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
