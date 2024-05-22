'use client';
import { FunctionComponent, useState } from 'react';
import { FormProvider } from '@/context/formContext';
import { defaultValuesPaymentForm, validationSchemaPaymentForm } from './PaymentFormSchema';
import PaymentForm from './PaymentForm';
import { Button } from '@/components';
import { MdDone } from 'react-icons/md';
import { Grid } from '@mui/material';
import { FieldValues } from 'react-hook-form';
import { useRouter } from 'next/navigation';

const PaymentFormContainer: FunctionComponent = () => {
  const route = useRouter();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleNextPage = () => route.push('/infracoes/pagamento/documentos');

  const handleOnSubmit = (value: FieldValues) => {
    console.log({ value });
    handleNextPage();
  };

  const validationSchema = validationSchemaPaymentForm(paymentMethod);
  const defaultValues = defaultValuesPaymentForm;

  return (
    <FormProvider
      validationSchema={validationSchema}
      defaultValues={defaultValues}
      onSubmit={handleOnSubmit}
    >
      <>
        <PaymentForm paymentMethod={paymentMethod} setPaymentMethod={setPaymentMethod} />
        <Grid item display="flex" justifyContent={'flex-end'}>
          <Button
            type="submit"
            className="mt-6 flex items-center justify-center"
            startIcon={<MdDone size={22} />}
          >
            Finalizar Pagamento
          </Button>
        </Grid>
      </>
    </FormProvider>
  );
};

export default PaymentFormContainer;
