import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const DynamicPaymentPage = dynamic(() => import('@/components/pages/payment'), {
  ssr: true,
  loading: () => <p>Please wait...</p>
});

export const metadata: Metadata = {
  title: 'Pagamento - Formulário',
  description: 'Preencha o formulário de pagamento para concluir sua compra.',
  keywords: ['pagamento', 'formulário', 'compra']
};

export default function Payment() {
  return <DynamicPaymentPage />;
}
