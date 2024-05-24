import { CircularProgress } from '@mui/material';
import dynamic from 'next/dynamic';

import { LoadingSpinner } from '@/components/LoadingSpinner';

const DynamicListPage = dynamic(
  () => import('@/components/pages/home/ListOfInfractions/ListOfInfractionsContainer'),
  {
    loading: () => <LoadingSpinner />
  }
);

export default function Infracoes() {
  return <CircularProgress color="error" size={10} />;
}
