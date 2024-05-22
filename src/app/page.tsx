import dynamic from 'next/dynamic';

const DynamicHomePage = dynamic(() => import('@/components/pages/home'), {
  loading: () => <p>Please wait...</p>
});

export default function Home() {
  return <DynamicHomePage />;
}
