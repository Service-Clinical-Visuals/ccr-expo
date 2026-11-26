import React from 'react';

type Variant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p'
  | 'span'
  | 'eyebrow'
  | 'footer-heading'
  | 'footer-body';

type Color = 'primary' | 'secondary' | 'dark' | 'white' | 'muted' | 'none';
type Weight = 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';

interface TypographyProps {
  variant?: Variant;
  color?: Color;
  weight?: Weight;
  className?: string;
  children: React.ReactNode;
}

export default function Typography({
  variant = 'p',
  color = 'dark',
  weight,
  className = '',
  children,
  ...props
}: TypographyProps & React.HTMLAttributes<HTMLElement>) {
  let Component: any = variant;
  let fontClass = 'font-dmsans font-secondary';

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'footer-heading'].includes(variant)) {
    fontClass = 'font-jakarta font-primary';
  } else if (variant === 'eyebrow') {
    Component = 'p';
    fontClass = 'eyebrow font-jakarta font-primary text-[#134093]';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body font-dmsans font-secondary';
  }

  const colorClasses: Record<Color, string> = {
    primary: 'text-[#134093]',
    secondary: 'text-[#111111]',
    dark: 'text-[#000000]',
    white: 'text-white',
    muted: 'text-[#555555]',
    none: '',
  };

  const weightClasses: Record<Weight, string> = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const finalClassName = `${fontClass} ${color !== 'none' && !fontClass.includes('text-') ? colorClasses[color] : ''} ${weight ? weightClasses[weight] : ''} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
