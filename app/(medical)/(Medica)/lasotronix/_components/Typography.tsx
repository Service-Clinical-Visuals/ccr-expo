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
type Color = "primary" | "white" | "muted" | "dark" | "secondary" | "none";
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
  color = "white",
  weight,
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  // Ensure ALL headings strictly use Anton font-primary
  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading font-primary";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body font-secondary";
  } else if (variant.startsWith("h")) {
    fontClass = "font-primary";
  } else {
    fontClass = "font-secondary";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[var(--color-primary)]",
    white: "text-white",
    muted: "text-white/70",
    dark: "text-[#121111]",
    secondary: "text-[var(--color-secondary)]",
    none: "",
  };

  const weightClasses: Record<Weight, string> = {
    light: "font-light",
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const finalClassName = `${fontClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
