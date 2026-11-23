/**
 * Typography Component - PAJUNK
 *
 * ARCHITECTURAL REFERENCE: INOGEN MASTER STANDARD
 * 1. Semantic Mapping:
 *    - Maps native HTML heading tags (h1-h6), paragraphs (p), spans, or custom variants
 *      ('footer-heading', 'footer-body', 'tag-badge').
 * 2. Fluid REM Scaling:
 *    - Global rem styles defined in `globals.css` scale across all 8 breakpoints.
 * 3. Token-Driven Coloring & Font Stacking:
 *    - Primary font: 'Bricolage Grotesque' (headings, buttons, tags).
 *    - Secondary font: 'DM Sans' (body copy, nav, lists).
 *    - Project color tokens: primary (#144835), accent (#DCE64D), dark (#003121), white (#FFFFFF), muted (#404944 / #555555).
 */
import React from 'react';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'footer-heading' | 'footer-body' | 'tag-badge';
type Color = 'primary' | 'secondary' | 'accent' | 'dark' | 'white' | 'muted' | 'olive' | 'none';
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

  if (['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(variant)) {
    fontClass = 'font-primary';
  } else if (variant === 'footer-heading') {
    Component = 'h3';
    fontClass = 'footer-heading font-primary';
  } else if (variant === 'footer-body') {
    Component = 'p';
    fontClass = 'footer-body font-secondary';
  } else if (variant === 'tag-badge') {
    Component = 'span';
    fontClass = 'tag-badge font-primary';
  } else {
    fontClass = 'font-secondary';
  }

  const colorClasses = {
    primary: 'text-[var(--color-primary)]',
    secondary: 'text-[var(--color-secondary)]',
    accent: 'text-[var(--color-accent)]',
    dark: 'text-[#111111]',
    white: 'text-white',
    muted: 'text-[#404944]',
    olive: 'text-[var(--color-olive-date)]',
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

