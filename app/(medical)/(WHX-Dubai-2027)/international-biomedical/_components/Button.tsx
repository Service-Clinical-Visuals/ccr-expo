"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  text: string;
  href?: string;
  variant?: "primary" | "secondary" | "white";
  showArrow?: boolean;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-secondary text-white hover:bg-secondary-hover",
  white: "bg-white text-primary hover:bg-primary hover:text-white",
};

export default function Button({
  text,
  href = "#",
  variant = "primary",
  showArrow = true,
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`button group inline-flex items-center justify-center gap-2 min-[2500px]:gap-3 min-[3800px]:gap-5 rounded-full whitespace-nowrap px-4 py-2.5 2xl:px-5 2xl:py-3 min-[2500px]:px-8 min-[2500px]:py-4 min-[3800px]:px-12 min-[3800px]:py-6 transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {text}
      {showArrow && (
        <ArrowRight className="w-4 h-4 min-[2500px]:w-6 min-[2500px]:h-6 min-[3800px]:w-9 min-[3800px]:h-9 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </Link>
  );
}
