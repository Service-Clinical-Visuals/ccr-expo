import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body' | 'quote' | 'navbar';
type Color = 'primary-red' | 'primary-blue' | 'dark' | 'white' | 'gray' | 'nav-gray' | 'none';
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
  let fontClass = '';

  if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body';
  } else if (variant === 'quote') {
    Component = 'p';
    fontClass = 'quote';
  } else if (variant === 'navbar') {
    Component = 'span';
    fontClass = 'navbar';
  }

  const colorClasses: Record<Color, string> = {
    'primary-red': 'text-[#A12624]',
    'primary-blue': 'text-[#005BAA]',
    dark: 'text-[#212121]',
    white: '!text-white',
    gray: 'text-[#666666]',
    'nav-gray': 'text-[#484848]',
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

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}
