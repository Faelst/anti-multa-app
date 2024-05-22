import React from 'react';
import { TextField, TextFieldProps, Typography } from '..';
import { useFormContext } from '@/context/formContext';
import { Controller } from 'react-hook-form';
import { getObjectPropertyValue } from '@/utils';

interface TextFormFieldProps extends TextFieldProps {
  name: string;
}

export const TextFormField = (props: TextFormFieldProps) => {
  const { name, ...rest } = props;
  const { register, control, validationErrors, watch } = useFormContext();

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;
  const shrink = watch(name) ? true : false;

  return (
    <>
      <Controller
        render={({ field }) => (
          <TextField
            {...register(name)}
            {...field}
            {...rest}
            className={`block w-full appearance-none border-[3px] text-white ${
              errorsMessage ? 'border-red-500 focus:shadow-none' : ''
            } mb-2 rounded px-4 py-3 leading-tight focus:outline-none 
                `}
          />
        )}
        name={name}
        control={control}
      />
      <Typography variant="xs" className="mt-1 italic text-red-500">
        {errorsMessage}
      </Typography>
    </>
  );
};
