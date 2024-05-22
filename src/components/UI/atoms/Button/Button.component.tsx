import { FunctionComponent } from 'react';
import { ButtonProps } from './Button.interface';
import { twMerge } from 'tailwind-merge';
import { buttonColors, buttonSizes, buttonVariants } from './Button.styled';

export const Button: FunctionComponent<ButtonProps> = ({
  className,
  children,
  variant = 'contained',
  color = 'primary',
  size = 'medium',
  disabled,
  fullWidth,
  startIcon,
  endIcon,
  ...rest
}) => {
  const styles = disabled
    ? 'bg-rose-600 text-white py-2 px-4 rounded opacity-50 cursor-not-allowed'
    : `${buttonColors[color]} ${buttonVariants[variant]} ${buttonSizes[size]}`;

  const buttonStyles = twMerge(
    `flex items-center justify-center space-x-2 font-sans leading-5 ${fullWidth ? 'w-full' : ''} `,
    styles,
    className
  );

  return (
    <button {...rest} className={buttonStyles}>
      {startIcon && <span className="mr-1">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-1">{endIcon}</span>}
    </button>
  );
};
