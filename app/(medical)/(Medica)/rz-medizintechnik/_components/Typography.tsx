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
  | "navbar"
  | "footer-heading"
  | "footer-body";

type Color = "primary" | "secondary" | "dark" | "white" | "muted" | "teal" | "none";
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
  color = "secondary",
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
  } else if (variant === "navbar") {
    Component = "span";
    fontClass = "navbar";
  }

  const colorClasses = {
    primary: "text-[#0099A1]",
    secondary: "text-[#111111]",
    dark: "text-[#000000]",
    white: "text-white",
    muted: "text-[#4C5157]",
    teal: "text-[#0099A1]",
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

  const finalClassName = `${fontClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(
    Component,
    { className: finalClassName, ...props },
    children
  );
}
