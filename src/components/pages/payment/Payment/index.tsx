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
import api from '@/service/api';
import { useSolicitationsContext } from '../../../../context/solicitationContext';

const PaymentFormContainer: FunctionComponent = () => {
  const route = useRouter();
  const {
    solicitation: { solicitation }
  } = useSolicitationsContext();
  const [paymentMethod, setPaymentMethod] = useState('credit-card');

  const handleNextPage = () => route.push('/infracoes/pagamento/detalhes');

  const handleOnSubmit = async (value: FieldValues) => {
    console.log({ value });

    const payment = await api.createPayment({
      creditCard: {
        installments: value.installments,
        number: value.cardNumber,
        holderName: value.cardholderName,
        expMonth: Number(value.expirationDate.split('/')[0]),
        expYear: Number(value.expirationDate.split('/')[1]),
        cvv: value.cvv
      },
      solicitationId: solicitation.id
    });

    console.log(payment);

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
