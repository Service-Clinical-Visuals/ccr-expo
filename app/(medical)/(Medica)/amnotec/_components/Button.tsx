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
      ? "bg-[#134093] text-white hover:bg-[#0e2f6d] shadow-sm hover:shadow-md"
      : variant === "outline"
      ? "bg-transparent border border-[#134093] text-[#134093] hover:bg-[#134093]/10"
      : "bg-white text-[#134093] hover:bg-gray-100 shadow-sm";

  const content = (
    <div
      className={`inline-flex items-center justify-center px-5 py-2.5 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-12 min-[3800px]:py-6 rounded-[5px] min-[2500px]:rounded-[8px] min-[3800px]:rounded-[12px] text-sm sm:text-base min-[2500px]:text-xl min-[3800px]:text-3xl font-semibold transition-all duration-300 ease-in-out gap-2.5 min-[2500px]:gap-4 min-[3800px]:gap-6 ${variantStyles} ${className}`}
    >
      <span className="button whitespace-nowrap">{text}</span>
      {showIcon && icon}
    </div>
  );

  const wrapperStyles =
    "inline-block cursor-pointer outline-none hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 ease-in-out select-none group";

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
