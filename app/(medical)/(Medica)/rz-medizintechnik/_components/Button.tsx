"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline" | "white";
  className?: string;
  showArrow?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  variant = "primary",
  className = "",
  showArrow = false,
  onClick,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 h-[42px] min-[2500px]:h-[56px] min-[3800px]:h-[72px] px-5 sm:px-6 min-[2500px]:px-9 min-[3800px]:px-12 rounded-[8px] min-[2500px]:rounded-[12px] min-[3800px]:rounded-[16px] transition-all duration-300 cursor-pointer select-none whitespace-nowrap";

  const variantClasses = {
    primary:
      "bg-[#0099A1] text-white hover:bg-[#00828a] active:scale-[0.98] shadow-sm",
    outline:
      "border border-[#0099A1] text-[#0099A1] hover:bg-[#0099A1] hover:text-white active:scale-[0.98]",
    white:
      "bg-white text-[#0099A1] hover:bg-gray-100 active:scale-[0.98] shadow-sm",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const content = (
    <>
      <span className="button whitespace-nowrap">{children}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8" />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses} onClick={onClick}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedClasses} onClick={onClick}>
      {content}
    </button>
  );
}
