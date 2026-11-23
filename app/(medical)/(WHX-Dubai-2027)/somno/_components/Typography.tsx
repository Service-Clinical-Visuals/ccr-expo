/**
 * Typography Component
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Semantic Mapping:
 *    - Renders native HTML heading elements (h1-h6), paragraphs (p), spans, or custom variants.
 * 2. Fluid REM Scaling:
 *    - Base typography styles are defined globally in `globals.css` and scale across 8 standard viewports.
 * 3. Color & Font Abstraction:
 *    - Headings use primary display font ('Squada One').
 *    - Body and subheadings use secondary reading font ('League Spartan').
 *    - Colors map to Somno design tokens: primary (#005781), dark (#212121), muted (#585858), white (#ffffff).
 */
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
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    dark: 'text-[#212121]',
    white: 'text-white',
    muted: 'text-[#585858]',
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

  const finalClassName = `${fontClass} ${colorClasses[color]} ${weight ? weightClasses[weight] : ''} ${className}`.trim();

  return React.createElement(Component, { className: finalClassName, ...props }, children);
}

