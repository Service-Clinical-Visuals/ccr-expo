import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline-orange" | "outline-white" | "solid";
  href?: string;
  className?: string;
  showArrow?: boolean;
  children: React.ReactNode;
}

export default function Button({
  variant = "outline-orange",
  href,
  className = "",
  showArrow = true,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2.5 button rounded-[10px] transition-all duration-300 font-semibold cursor-pointer select-none px-5 py-2.5 min-[2500px]:px-8 min-[2500px]:py-3.5 min-[3800px]:px-10 min-[3800px]:py-4";

  const variantClasses = {
    primary:
      "bg-[#F6821F] text-white border border-[#F6821F] hover:bg-[#e07110] hover:border-[#e07110] shadow-sm",
    solid:
      "bg-[#F6821F] text-white border border-[#F6821F] hover:bg-[#e07110] hover:border-[#e07110] shadow-sm",
    "outline-orange":
      "border border-[#F6821F] text-[#F6821F] hover:bg-[#F6821F] hover:text-white group",
    "outline-white":
      "border border-white text-white hover:bg-white hover:text-[#202020] group",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  const iconElement = showArrow ? (
    <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-8 min-[3800px]:h-8 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
  ) : null;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        <span>{children}</span>
        {iconElement}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      <span>{children}</span>
      {iconElement}
    </button>
  );
}
