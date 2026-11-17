"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "outline";
  type?: "button" | "submit";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  variant = "primary",
  type = "button",
}: ButtonProps) => {
  const variantStyles =
    variant === "primary"
      ? "bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-hover)] border border-transparent"
      : "bg-transparent border border-white text-white hover:bg-white/10";

  const classes = `inline-flex items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 min-[2500px]:px-9 min-[2500px]:py-4 min-[3800px]:px-12 min-[3800px]:py-6 uppercase tracking-wider cursor-pointer select-none transition-all duration-200 active:scale-95 ${variantStyles} ${className}`;

  const label = <span className="button whitespace-nowrap">{text}</span>;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {label}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {label}
    </button>
  );
};

export default Button;
