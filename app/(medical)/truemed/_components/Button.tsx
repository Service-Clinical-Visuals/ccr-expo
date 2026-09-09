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
      ? "bg-transparent border border-white text-white hover:bg-white/10"
      : "bg-transparent border border-primary text-primary hover:bg-primary/5";

  const content = (
    <div className={`flex items-center justify-center px-6 py-3 rounded-xl transition-colors ${variantStyles} ${className}`}>
      <span className="button whitespace-nowrap mr-2 sm:mr-3">{text}</span>
      {showIcon && (
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 shrink-0" strokeWidth={2} />
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
