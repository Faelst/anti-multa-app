import React, { useEffect } from 'react';
import { MaskedInput, TextFormField } from '@/components/FormField';
import { SelectFormField } from '@/components/FormField/SelectFormField';
import { Grid } from '@mui/material';
import { cpfMask, creditCardMask, formatCurrency, installmentsRE } from '@/utils';
import { useSolicitationsContext } from '@/context/solicitationContext';

export default function CreditCardForm() {
  const { solicitation } = useSolicitationsContext();

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
          options={installmentsRE(solicitation.solicitation.amount_payment / 100)}
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
