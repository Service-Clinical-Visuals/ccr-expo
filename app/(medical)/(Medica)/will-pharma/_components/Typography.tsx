import React from "react";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "p"
  | "span"
  | "footer-heading"
  | "footer-body";

type Color = "primary" | "accent" | "dark" | "white" | "muted" | "none";
type Weight = "light" | "normal" | "medium" | "semibold" | "bold" | "extrabold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "dark",
  weight,
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body";
  }

  const colorClasses = {
    primary: "text-[var(--color-primary)]",
    accent: "text-[var(--color-accent)]",
    dark: "text-[#333333]",
    white: "text-white",
    muted: "text-[#4B5563]",
    none: "",
  };

  const weightClasses = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const selectedColor = colorClasses[color] || "";
  const selectedWeight = weight ? weightClasses[weight] : "";

  return (
    <Component
      className={`${selectedColor} ${selectedWeight} ${fontClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}
