import React from 'react';
import { MaskedInput, TextFormField } from '@/components/FormField';
import { SelectFormField } from '@/components/FormField/SelectFormField';
import { Grid } from '@mui/material';
import { cpfMask, creditCardMask } from '@/utils';

export default function CreditCardForm() {
  const installmentsRE = [
    { value: 1, label: '1x R$ 789,00' },
    { value: 2, label: '2x R$ 394,50' },
    { value: 3, label: '3x R$ 263,00' },
    { value: 4, label: '4x R$ 197,25' },
    { value: 5, label: '5x R$ 157,80' },
    { value: 6, label: '6x R$ 131,50' },
    { value: 7, label: '7x R$ 112,71' },
    { value: 8, label: '8x R$ 98,63' },
    { value: 9, label: '9x R$ 87,67' },
    { value: 10, label: '10x R$ 78,90' },
    { value: 11, label: '11x R$ 71,73' },
    { value: 12, label: '12x R$ 65,75' }
  ];

  const installmentsRS = [
    { value: 1, label: '1x R$ 99,00' },
    { value: 2, label: '2x R$ 49,50' },
    { value: 3, label: '3x R$ 33,00' },
    { value: 4, label: '4x R$ 24,75' },
    { value: 5, label: '5x R$ 19,80' },
    { value: 6, label: '6x R$ 16,50' },
    { value: 7, label: '7x R$ 14,14' },
    { value: 8, label: '8x R$ 12,38' },
    { value: 9, label: '9x R$ 11,00' },
    { value: 10, label: '10x R$ 9,90' },
    { value: 11, label: '11x R$ 9,00' },
    { value: 12, label: '12x R$ 8,25' }
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} sm={6}>
        <TextFormField
          label="Nome do titular do cartão"
          name="cardholderName"
          placeholder="Nome do titular"
          required
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextFormField
          label="Número do cartão"
          name="cardNumber"
          placeholder="0000 0000 0000 0000"
          required
          InputProps={{
            inputComponent: MaskedInput,
            inputProps: { mask: creditCardMask }
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextFormField
          label="Expiração (MM/YY)"
          name="expirationDate"
          placeholder="MM/YY"
          required
        />
      </Grid>
      <Grid item xs={6}>
        <TextFormField label="CVV" name="cvv" placeholder="000" required />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
        <SelectFormField
          required
          name="installments"
          label="Parcelas"
          fullWidth
          options={installmentsRE}
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={4}>
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
      <Grid item xs={12} sm={12} lg={4}>
        <TextFormField label="E-mail" name="email" placeholder="Seu email" required />
      </Grid>
    </Grid>
  );
}
