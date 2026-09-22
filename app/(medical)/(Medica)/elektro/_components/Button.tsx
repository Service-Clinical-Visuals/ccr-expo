"use client";

import React from "react";
import Link from "next/link";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  icon?: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "blue";
}

const CustomArrow = ({ className }: { className?: string }) => (
  <svg className={className} width="15" height="11" viewBox="0 0 15 11" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14.6 4.7V6H14C12.9 6 11.9 6.5 11.1 7.2C10.3 8 9.9 9 9.9 10.1V10.7H8.6V10.1C8.6 8.7 9.2 7.4 10.2 6.4C10.3 6.3 10.5 6.2 10.6 6H0V4.7H10.6C10.5 4.6 10.3 4.5 10.2 4.3C9.2 3.3 8.6 2 8.6 0.6V0H9.9V0.6C9.9 1.7 10.4 2.7 11.1 3.5C11.9 4.3 12.9 4.7 14 4.7H14.6Z" fill="currentColor" />
  </svg>
);

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
      ? "bg-[#252525] text-white font-regular hover:bg-[#1a1a1a] shadow-[0_4px_10px_rgba(0,0,0,0.15)]"
      : variant === "blue"
        ? "bg-[#173556] text-white font-regular hover:bg-[#112136]/90 shadow-sm border-none"
        : variant === "white"
          ? "bg-white font-regular text-[#173556] hover:bg-gray-100 shadow-sm"
          : "bg-white font-regular text-[#173556] border border-[#252525] hover:bg-gray-50 shadow-sm";

  const content = (
    <div className={`flex items-center justify-center font-regular px-4 py-2.5 transition-colors ${variantStyles} ${className}`}>
      <span className={`font-regular button whitespace-nowrap text-inherit ${showIcon || icon ? "mr-3" : ""}`}>{text}</span>
      {icon ? (
        <span className="shrink-0">{icon}</span>
      ) : showIcon ? (
        <CustomArrow className="group-hover:translate-x-1.5 transition-transform duration-300 shrink-0 font-regular" />
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
