import { MaskedInput, TextFormField } from '@/components/FormField';
import { cpfMask } from '@/utils';
import { Grid } from '@mui/material';
import React from 'react';

export default function PixForm() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextFormField
          label="CPF"
          name="registrationNumber"
          placeholder="000.000.000-00"
          required
          InputProps={{
            inputComponent: MaskedInput,
            inputProps: { mask: cpfMask }
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextFormField label="E-mail" name="email" placeholder="Seu email" required />
      </Grid>
    </Grid>
  );
}
