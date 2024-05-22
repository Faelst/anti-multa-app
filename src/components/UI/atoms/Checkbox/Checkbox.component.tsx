'use client';
import type { FunctionComponent } from 'react';
import type { CheckboxProps } from './Checkbox.interface';
import { FormGroup } from '@mui/material';
import { StyledCheckbox, StyledFormControlLabel } from './Checkbox.styled';

export const Checkbox: FunctionComponent<CheckboxProps> = (props) => {
  const { label, formControlSX, ...rest } = props;

  return (
    <FormGroup>
      <StyledFormControlLabel
        sx={{ ...formControlSX }}
        control={<StyledCheckbox {...rest} />}
        label={label}
      />
    </FormGroup>
  );
};
