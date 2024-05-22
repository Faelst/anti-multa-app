'use client';
import React, { FunctionComponent } from 'react';
import { SelectProps } from './Select.interface';
import { Checkbox } from '../Checkbox';
import { Box, InputLabel } from '@mui/material';
import { CustomSelect, CutomFormControl } from './SelectField.styled';
import { CustomMenuItem } from '../MenuItem/MenuItem.styled';
import { MdKeyboardArrowDown } from 'react-icons/md';

export const SelectField: FunctionComponent<SelectProps> = ({
  label,
  items,
  required,
  onChange,
  multiple,
  value,
  disabled,
  ...rest
}) => {
  const arrayValue = Array.isArray(value) ? value : (!!value && [value]) || [];

  return (
    <CutomFormControl fullWidth disabled={disabled} required={required} variant="outlined">
      {label && (
        <InputLabel id={`select-${label}`} required={required} variant="outlined">
          {label}
        </InputLabel>
      )}
      <CustomSelect
        id={`select-${label}`}
        value={multiple ? arrayValue : value}
        label={label}
        onChange={onChange}
        multiple={multiple}
        disabled={disabled}
        renderValue={multiple ? (selected) => (selected as string[]).join(', ') : undefined}
        variant="outlined"
        {...rest}
        labelId={`select-${label}`}
        IconComponent={MdKeyboardArrowDown}
        MenuProps={{
          elevation: 2,
          ...rest.MenuProps
        }}
      >
        {items?.map((item, index) => (
          <CustomMenuItem dense={!multiple} value={item} key={index}>
            {multiple ? (
              <Box sx={{ pointerEvents: 'none' }}>
                <Checkbox size="small" label={item} checked={arrayValue.indexOf(item) > -1} />
              </Box>
            ) : (
              item
            )}
          </CustomMenuItem>
        ))}
      </CustomSelect>
    </CutomFormControl>
  );
};
