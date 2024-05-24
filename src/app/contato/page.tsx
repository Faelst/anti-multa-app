import { Metadata } from 'next';
import dynamic from 'next/dynamic';

import { LoadingSpinner } from '@/components/LoadingSpinner';

const DynamicContactLayout = dynamic(() => import('@/components/pages/contact'), {
  loading: () => <LoadingSpinner />
});

export const metadata: Metadata = {
  title: 'Entre em Contato conosco - AntiMultas',
  description:
    'Entre em contato conosco na AntiMultas para resolver suas questões de multas de trânsito. Nossa equipe está pronta para ajudar!',
  keywords: ['contato', 'AntiMultas', 'multas de trânsito', 'suporte', 'atendimento ao cliente']
};

export default function Contact() {
  return <DynamicContactLayout />;
}
