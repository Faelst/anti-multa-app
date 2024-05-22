import { Metadata } from 'next';
import dynamic from 'next/dynamic';
const DynamicStoresLayout = dynamic(() => import('@/components/pages/stores'), {
  loading: () => <p>Please wait...</p>
});

export const metadata: Metadata = {
  title: 'Lojas de Atendimento - AntiMultasBrasil',
  description:
    'Encontre a loja mais próxima para obter suporte especializado em recursos de multas de trânsito.',
  keywords: [
    'lojas de atendimento',
    'AntiMultasBrasil',
    'multas de trânsito',
    'suporte especializado'
  ]
};

export default function Stores() {
  return <DynamicStoresLayout />;
}
