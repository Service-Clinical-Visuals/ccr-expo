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

type Color =
  | "primary"
  | "secondary"
  | "dark"
  | "white"
  | "muted"
  | "didact"
  | "health"
  | "none";

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
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "footer-heading") {
    Component = "h3";
    fontClass = "footer-heading";
  } else if (variant === "footer-body") {
    Component = "p";
    fontClass = "footer-body";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[var(--color-primary)]",
    secondary: "text-[var(--color-secondary)]",
    dark: "text-[#1E1E1E]",
    white: "text-white",
    muted: "text-[#4B5563]",
    didact: "text-[#3AA5DD]",
    health: "text-[#DC64A1]",
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

  const outlineClass = outline
    ? color === "dark" || color === "primary"
      ? "text-outline-dark"
      : "text-outline"
    : "";

  const finalClassName = `${fontClass} ${colorClasses[color] || ""} ${
    weight ? weightClasses[weight] : ""
  } ${outlineClass} ${className}`.trim();

  return React.createElement(
    Component,
    { className: finalClassName, ...props },
    children
  );
}
