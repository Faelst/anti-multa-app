import dynamic from 'next/dynamic';
const DynamicRecoverPasswordLayout = dynamic(
  () => import('@/components/pages/Login/RecoverPassword'),
  {
    loading: () => <p>Please wait...</p>
  }
);

export default function RecoverPassword() {
  return <DynamicRecoverPasswordLayout />;
}
