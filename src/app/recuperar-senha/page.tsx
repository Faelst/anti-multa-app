import dynamic from 'next/dynamic';

import { LoadingSpinner } from '@/components/LoadingSpinner';

const DynamicRecoverPasswordLayout = dynamic(
  () => import('@/components/pages/Login/RecoverPassword'),
  {
    loading: () => <LoadingSpinner />
  }
);

export default function RecoverPassword() {
  return <DynamicRecoverPasswordLayout />;
}
