"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

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
      ? "bg-primary text-white hover:bg-primary-hover"
      : "bg-white text-primary border border-primary hover:bg-primary/5";

  const content = (
    <div className={`flex items-center justify-center px-8 py-3 rounded-full shadow-sm transition-colors ${variantStyles} ${className}`}>
      <div className="button whitespace-nowrap  mr-3 sm:mr-4">{text}</div>
      {showIcon && (
        <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2} />
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
