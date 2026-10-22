"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
      "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] border border-transparent",
    secondary:
      "bg-white text-[var(--color-primary)] hover:bg-[#EEF6FB] shadow-[0px_4px_10px_rgba(0,0,0,0.2)] border border-transparent",
    outline:
      "bg-transparent border border-white text-white hover:bg-white/10",
  }[variant];

  // Rounded top-right and bottom-left corners, square on the other two
  const content = (
    <div
      className={`flex items-center justify-center gap-2.5 2xl:gap-3 min-[2500px]:gap-4 min-[3800px]:gap-6 px-6 py-2.5  min-[2500px]:px-11 min-[2500px]:py-5 min-[3800px]:px-16 min-[3800px]:py-7 rounded-tr-[20px] rounded-bl-[20px] sm:rounded-tr-[24px] sm:rounded-bl-[24px] min-[2500px]:rounded-tr-[34px] min-[2500px]:rounded-bl-[34px] min-[3800px]:rounded-tr-[48px] min-[3800px]:rounded-bl-[48px] transition-all duration-300 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && (
        <ArrowUpRight
          className="w-4 h-4 sm:w-5 sm:h-5 min-[2500px]:w-7 min-[2500px]:h-7 min-[3800px]:w-10 min-[3800px]:h-10 shrink-0 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
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
