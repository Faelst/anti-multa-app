import dynamic from 'next/dynamic';

const DynamicDocumentsPage = dynamic(() => import('@/components/pages/documents'), {
  loading: () => <p>Please wait...</p>
});

export default function Infracoes() {
  return <DynamicDocumentsPage />;
}
