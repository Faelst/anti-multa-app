import dynamic from 'next/dynamic';

import { LoadingSpinner } from '@/components/LoadingSpinner';

const DynamicHomePage = dynamic(() => import('@/components/pages/home'), {
  loading: () => <LoadingSpinner />
});

export default function Home() {
  return <DynamicHomePage />;
}
