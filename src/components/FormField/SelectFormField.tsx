import { useFormContext } from '@/context/formContext';
import { getObjectPropertyValue } from '@/utils';
import {
  Box,
  SelectChangeEvent,
  SelectProps as MuiSelectProps,
  InputAdornment,
  IconButton
} from '@mui/material';
import { FunctionComponent } from 'react';
import { SelectField, Typography } from '..';
import { MdOutlineCancel } from 'react-icons/md';
import { CiSearch } from 'react-icons/ci';

export interface SelectOption {
  label: string;
  value: string | number | undefined | boolean | null;
}

export interface SelectFormFieldProps extends MuiSelectProps {
  name: string;
  /**
   * Determina os items do select
   */
  options?: SelectOption[];

  /**
   * Determina o Label do campo
   */
  label?: string;

  /**
   * Determina se o campo é obrigatorio
   */
  required?: boolean;

  /**
   * Habilita um botão de pesquisa no final do campo
   */

  showEndAdornment?: boolean;

  /**
   * Habilita um botão para limpar o valor do campo
   */
  showButtonClearValue?: boolean;
}

export const SelectFormField: FunctionComponent<SelectFormFieldProps> = ({
  options,
  required,
  label,
  ...props
}) => {
  const name = props.name;
  const labels: string[] | undefined = options?.length
    ? options.map((i) => i?.label)
    : ['Nenhuma opção encontrada'];

  let value = undefined;
  var { validationErrors, setValue, watch, readOnly } = useFormContext();

  const errorsMessage = validationErrors && getObjectPropertyValue(name, validationErrors)?.message;

  if (watch) {
    const currentValue = watch(name);
    if (props.multiple) {
      const selectedItems = options?.filter((item) => currentValue?.includes(item?.value));
      const selectedLabels = selectedItems?.map((item) => item.label);
      value = selectedLabels ?? undefined;
    } else {
      const foundItem = options?.find((item) => item.value === currentValue);
      value = foundItem?.label ?? undefined;
    }
  }

  const onChange = (event: SelectChangeEvent<unknown>) => {
    if (props.multiple && options?.length) {
      const selectedOptions = event.target?.value as string[];
      const selectedValues: any[] = [];
      const selectedLabels: any[] = [];

      selectedOptions.forEach((val) => {
        const index = options.findIndex((i) => i?.label === val);
        if (index !== -1) {
          selectedValues.push(options[index]?.value);
          selectedLabels.push(options[index]?.label);
        }
      });
      setValue(name, selectedValues, { shouldDirty: true });
      setValue(`${name}Display`, selectedLabels, { shouldDirty: true });
    } else if (options?.length) {
      const value = event.target?.value as string;
      const index = options.findIndex((i) => i?.label === value);
      setValue(name, options[index]?.value, { shouldDirty: true });
      setValue(`${name}Display`, options[index]?.label, { shouldDirty: true });
    }
  };

  const labelWithRequired = required ? `${label} *` : label;
  const shrink = watch(name) ? true : false;

  return (
    <Box>
      <SelectField
        id={name}
        label={labelWithRequired}
        inputProps={{
          'aria-label': 'secondary select',
          shrink
        }}
        endAdornment={
          <>
            {props.showEndAdornment && (
              <InputAdornment position="end" sx={{ marginRight: 1.5 }}>
                <IconButton type="submit">
                  <CiSearch style={{ width: 25, height: 25 }} color="#666666" />
                </IconButton>
              </InputAdornment>
            )}
            {props.showButtonClearValue && (
              <>
                {!!value && !readOnly && (
                  <InputAdornment position="end" sx={{ marginRight: 1.5 }}>
                    <IconButton onClick={() => setValue(name, null)}>
                      <MdOutlineCancel style={{ width: 15, height: 15 }} color="#666666" />
                    </IconButton>
                  </InputAdornment>
                )}
              </>
            )}
          </>
        }
        key={`${name}${value}key`}
        error={!!errorsMessage}
        onChange={onChange}
        items={labels}
        value={value === undefined ? '' : value}
        disabled={!!readOnly}
        {...props}
      />
      <Typography variant="xs" className="mt-1 italic text-red-500">
        {errorsMessage}
      </Typography>
    </Box>
  );
};
