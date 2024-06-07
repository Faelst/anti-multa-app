'use client';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import { LoadingSpinner } from '@/components/LoadingSpinner';
import { useSolicitationsContext } from '@/context/solicitationContext';
import { useClient } from '@/context/clientContext';

const DynamicListPage = dynamic(
  () => import('@/components/pages/home/ListOfInfractions/ListOfInfractionsContainer'),
  {
    loading: () => <LoadingSpinner />
  }
);

export default function Infracoes() {
  const route = useRouter();
  const { client } = useClient();

  if (!client.id) {
    route.push('/');
  }

  return <DynamicListPage />;
}
