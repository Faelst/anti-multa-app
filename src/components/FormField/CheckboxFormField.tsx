'use client';
import { useFormContext } from '@/context/formContext';
import { Box, CheckboxProps } from '@mui/material';
import { FunctionComponent } from 'react';
import { Checkbox, Typography } from '..';
import { getObjectPropertyValue } from '@/utils';

export interface CheckboxFormFieldProps extends CheckboxProps {
  name: string;
  label: string;
}

export const CheckboxFormField: FunctionComponent<CheckboxFormFieldProps> = ({
  label,
  ...props
}) => {
  const name = props.name;
  let value = undefined;
  var { validationErrors, watch, setValue } = useFormContext();

  if (watch) {
    value = watch(name);
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setValue(name, newValue, { shouldDirty: true });
  };

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  return (
    <>
      <Checkbox
        label={label}
        onChange={onChange}
        checked={value === true}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }}
        {...props}
      />
      <Typography variant="xs" className="mt-1 italic text-red-500">
        {errorsMessage}
      </Typography>
    </>
  );
};
