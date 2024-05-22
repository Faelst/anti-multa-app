import React from 'react';
import PaymentHeader from './PaymentHeader';
import PaymentFormContainer from './Payment';

export default function PaymentPage() {
  return (
    <section className="grid grid-cols-1">
      <div className="col-span-1 space-y-8 sm:space-y-10">
        <PaymentHeader />
        <PaymentFormContainer />
      </div>
    </section>
  );
}
