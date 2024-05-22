import React from 'react';
import { TypographyProps } from './Typography.interface';
import { twMerge } from 'tailwind-merge';

export const Typography: React.FC<TypographyProps> = ({ className, variant, color, children }) => {
  const variantClasses = {
    h1: 'text-[32px] font-bold',
    h2: 'text-[28px] font-bold',
    xxl: 'text-2xl font-bold',
    xl: 'text-xl font-bold',
    lg: 'text-lg font-bold',
    md: 'text-base font-bold',
    base: 'text-base',
    sm: 'text-sm',
    xs: 'text-xs'
  };

  const classes = `${variantClasses[variant]} ${color ?? 'text-gray-900'}`;

  const variantTags = {
    h1: 'h1',
    h2: 'h2',
    xxl: 'h3',
    xl: 'h4',
    lg: 'h5',
    md: 'h6',
    base: 'h6',
    sm: 'p',
    xs: 'p'
  };

  const Tag = variantTags[variant];

  return React.createElement(Tag, { className: twMerge(classes, className) }, children);
};
