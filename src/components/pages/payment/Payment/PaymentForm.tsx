'use strict';

import { Grid } from '@mui/material';
import { MdOutlinePix } from 'react-icons/md';
import { LiaCreditCardSolid } from 'react-icons/lia';
import { CardButton } from '@/components';
import CreditCardForm from './CreditCardForm';
import PixForm from './PixForm/Index';
import { useFormContext } from '@/context/formContext';

interface PaymentFormProps {
  paymentMethod: string;
  setPaymentMethod: (paymentMethod: string) => void;
}

export default function PaymentForm({ paymentMethod, setPaymentMethod }: PaymentFormProps) {
  const { reset } = useFormContext();
  const handleOnCreditCard = () => {
    // reset();
    setPaymentMethod('credit-card');
  };
  const handleOnPix = () => {
    // reset();
    setPaymentMethod('pix');
  };

  return (
    <div className="space-y-2 rounded-md border border-gray-300 bg-white p-6 drop-shadow-md sm:p-8 md:dark:bg-[#18171e]">
      <Grid container spacing={2} mb={2}>
        <Grid item>
          <CardButton
            icon={LiaCreditCardSolid}
            description="Cartão de Crédito"
            onClick={handleOnCreditCard}
            active={paymentMethod === 'credit-card'}
          />
        </Grid>
        <Grid item xs={0} sm={6}>
          <CardButton
            icon={MdOutlinePix}
            description="PIX"
            onClick={handleOnPix}
            active={paymentMethod === 'pix'}
          />
        </Grid>
      </Grid>

      {paymentMethod === 'credit-card' ? <CreditCardForm /> : <PixForm />}
    </div>
  );
}
