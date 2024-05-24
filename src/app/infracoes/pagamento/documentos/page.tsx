import dynamic from 'next/dynamic';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';

const DynamicDocumentsPage = dynamic(() => import('@/components/pages/documents'), {
  loading: () => <LoadingSpinner />
});

export default function Infracoes() {
  return <DynamicDocumentsPage />;
}
