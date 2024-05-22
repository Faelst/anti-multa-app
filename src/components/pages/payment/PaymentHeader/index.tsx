'use client';
import { Typography } from '@/components';
import React from 'react';

const PaymentHeader: React.FC = () => {
  return (
    <Typography variant="h1" className="text-center sm:text-start md:dark:text-white">
      Escolha a forma de pagamento
    </Typography>
  );
};

export default PaymentHeader;
