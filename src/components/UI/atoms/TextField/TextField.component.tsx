'use client';
import type { FunctionComponent } from 'react';
import type { TextFieldProps } from './TextField.interface';
import { CustomTextField } from './TextField.styled';

export const TextField: FunctionComponent<TextFieldProps> = ({
  label,
  required,
  disabled,
  ...props
}) => {
  const labelWithRequired = required ? `${label} *` : label;
  return <CustomTextField variant="outlined" label={labelWithRequired} {...props} />;
};
