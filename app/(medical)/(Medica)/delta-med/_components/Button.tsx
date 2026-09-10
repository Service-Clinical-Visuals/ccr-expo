"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface ButtonProps {
  text?: string;
  children?: React.ReactNode;
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  variant?: "primary" | "white" | "outline";
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
  iconVariant?: "dark" | "white";
}

const Button: React.FC<ButtonProps> = ({
  text,
  children,
  href,
  onClick,
  variant = "primary",
  className = "",
  showIcon = true,
  icon,
  type = "button",
  target,
  rel,
}) => {
  const variantStyles = {
    primary:
      "bg-[#1980AA] hover:bg-[#146e93] text-white shadow-[0_4px_12px_rgba(25,128,170,0.25)] hover:shadow-[0_6px_16px_rgba(25,128,170,0.32)]",
    white:
      "bg-white hover:bg-[#f8fafc] text-[#182C4A] shadow-[0_4px_12px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_16px_rgba(0,0,0,0.14)]",
    outline:
      "bg-white hover:bg-[#f8fafc] text-[#182C4A] border border-gray-300 hover:border-gray-400 shadow-sm",
  };

  const arrowColor = variant === "primary" ? "text-white" : "text-[#182C4A]";

  const baseStyles =
    "inline-flex items-center justify-center gap-2 sm:gap-2.5 px-5 sm:px-6 py-2.5 rounded-xl font-outfit font-medium text-xs sm:text-sm tracking-normal transition-all duration-200 active:scale-[0.98] select-none cursor-pointer group";

  const renderIcon = () => {
    if (!showIcon) return null;
    if (icon) return icon;
    return (
      <ArrowRight
        className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${arrowColor} group-hover:translate-x-1 transition-transform duration-200 shrink-0`}
        strokeWidth={2.2}
      />
    );
  };

  const content = (
    <>
      <span className="whitespace-nowrap">{children || text}</span>
      {renderIcon()}
    </>
  );

  const combinedClass = `${baseStyles} ${variantStyles[variant] || variantStyles.primary} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={combinedClass}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClass}
    >
      {content}
    </button>
  );
};

export default Button;
