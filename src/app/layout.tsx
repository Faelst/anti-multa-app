import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import dynamic from 'next/dynamic';

const DynamicLayout = dynamic(() => import('@/components/Layout/HeaderLayout/HeaderLayout'), {
  ssr: false
});

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  keywords:
    'anti multas, multas de trânsito, consulta de multas, pagamento de multas, trânsito, infrações, auto de infração',
  title: 'AntiMultas Brasil - Consulta e Pagamento de Multas de Trânsito Online',
  description: `Consulte e pague suas multas de trânsito online de forma rápida e segura com o AntiMultas Brasil. 
                Evite burocracias e multas desnecessárias. Serviço confiável com suporte especializado.`,
  icons: { icon: '' }
};

type RootLayoutProps = Readonly<{ children: React.ReactNode }>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} md:dark:bg-[#131219]`}>
        <DynamicLayout>{children}</DynamicLayout>
      </body>
    </html>
  );
}
