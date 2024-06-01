import dynamic from 'next/dynamic';
import { LoadingSpinner } from '../../../../components/LoadingSpinner';

const DynamicDocumentsPage = dynamic(() => import('@/components/pages/details'), {
  loading: () => <LoadingSpinner />
});

export default function Detalhes() {
  return <DynamicDocumentsPage />;
}
