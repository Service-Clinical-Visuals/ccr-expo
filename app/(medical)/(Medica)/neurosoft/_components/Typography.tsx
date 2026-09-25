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
  | "button";

type Color = "primary" | "navy" | "dark" | "body" | "muted" | "white" | "none";
type Weight = "normal" | "medium" | "semibold" | "bold" | "extrabold";

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  font?: "baloo" | "outfit";
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = "p",
  color = "body",
  weight,
  font = "baloo",
  className = "",
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = "";

  if (variant === "navbar") {
    Component = "span";
    fontClass = "navbar";
  } else if (variant === "button") {
    Component = "span";
    fontClass = "button";
  }

  const colorClasses: Record<Color, string> = {
    primary: "text-[#0AADF9]",
    navy: "text-[#273644]",
    dark: "text-[#2A2A2A]",
    body: "text-[#4A4A4A]",
    muted: "text-[#727272]",
    white: "text-white",
    none: "",
  };

  const weightClasses: Record<Weight, string> = {
    normal: "font-normal",
    medium: "font-medium",
    semibold: "font-semibold",
    bold: "font-bold",
    extrabold: "font-extrabold",
  };

  const fontFamilyClass = font === "outfit" ? "font-outfit" : "font-baloo";

  const finalClassName = `${fontClass} ${fontFamilyClass} ${colorClasses[color]} ${
    weight ? weightClasses[weight] : ""
  } ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
