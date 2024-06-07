import { Metadata } from 'next';
import dynamic from 'next/dynamic';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useRouter } from 'next/navigation';
import { useClient } from '@/context/clientContext';

const DynamicPaymentPage = dynamic(() => import('@/components/pages/payment'), {
  ssr: true,
  loading: () => <LoadingSpinner />
});

export const metadata: Metadata = {
  title: 'Pagamento - Formulário',
  description: 'Preencha o formulário de pagamento para concluir sua compra.',
  keywords: ['pagamento', 'formulário', 'compra']
};

export default function Payment() {
  return <DynamicPaymentPage />;
}
