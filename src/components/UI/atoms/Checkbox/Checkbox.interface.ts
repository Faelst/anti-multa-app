import { CheckboxProps as MuiCheckbox } from '@mui/material';

export interface CheckboxProps extends MuiCheckbox {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   */
  label?: string;

  /**
   * Edita o style do FormControlLabel
   * @default ''
   * @type {any}
   */
  formControlSX?: any;
}
