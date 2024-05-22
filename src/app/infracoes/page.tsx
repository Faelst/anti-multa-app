import dynamic from 'next/dynamic';

const DynamicListPage = dynamic(
  () => import('@/components/pages/home/ListOfInfractions/ListOfInfractionsContainer'),
  {
    loading: () => <p>Please wait...</p>
  }
);

export default function Infracoes() {
  return <DynamicListPage />;
}
