import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body';
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
  outline = false,
  ...props
}: TypographyProps & { outline?: boolean } & React.HTMLAttributes<HTMLElement>) {
  
  let Component: any = variant;
  let fontClass = '';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body';
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    dark: 'text-[#121C22]',
    white: 'text-white',
    muted: 'text-[#111111]',
    none: '',
  };

  const weightClasses = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  };

  const outlineClass = outline ? (color === 'dark' || color === 'primary' ? 'text-outline-dark' : 'text-outline') : '';

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${outlineClass} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
