'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useClient } from '@/context/clientContext';
import { useSolicitationsContext } from '@/context/solicitationContext';

const DynamicDocumentsPage = dynamic(() => import('@/components/pages/documents'), {
  loading: () => <LoadingSpinner />
});

export default function Infracoes() {
  const route = useRouter();
  const { client } = useClient();

  if (!client.id) {
    route.push('/');
  }

  return <DynamicDocumentsPage />;
}
