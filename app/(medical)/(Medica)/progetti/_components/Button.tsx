"use client";

import React from "react";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
}

const Button = ({
  text,
  href,
  onClick,
  className = "",
  showIcon = false,
  icon,
  variant = "primary",
}: ButtonProps) => {

  const variantStyles =
    variant === "primary"
      ? "bg-primary text-white border border-primary hover:bg-primary/90"
      : variant === "secondary"
        ? "bg-secondary text-white border border-secondary hover:bg-secondary/90"
        : "bg-transparent text-primary border border-primary hover:bg-primary/5";

  const content = (
    <div className={`button flex items-center justify-center px-[2em] py-[0.5em] rounded-full transition-colors ${variantStyles} ${className}`}>
      <span className={`whitespace-nowrap ${showIcon || icon ? "mr-[0.5em]" : ""}`}>{text}</span>
      {icon ? (
        <span className="text-[1.3em] shrink-0">{icon}</span>
      ) : showIcon ? (
        <FiArrowRight className="text-[1.3em] group-hover:translate-x-[0.3em] transition-transform duration-300 shrink-0" />
      ) : null}
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
