import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

const DynamicDocumentsPage = dynamic(() => import('@/components/pages/documents'), {
  loading: () => <LoadingSpinner /> => <CircularProgress color="error" />
});

export default function Infracoes() {
  return <DynamicDocumentsPage />;
}
