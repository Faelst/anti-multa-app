import React from 'react';
import { Navbar } from '..';
import BreadcrumbLayout from './BreadcrumbLayout';
import { InfracoesProvider } from '@/context/infracoesContext';
import { ThemeProvider } from '@/components';
import { Container } from '@mui/material';
import { IdentityProvider } from '@/context/identityContext';
import Hello from './Hello';
import { Toaster } from 'sonner';

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <IdentityProvider>
        <InfracoesProvider>
          <header>
            <Navbar />
          </header>
          <main className="h-auto w-screen">
            <Container maxWidth="xl" className="max-w-screen-xl py-5">
              <Toaster position="top-right" richColors />
              <Hello />
              <BreadcrumbLayout />
              {children}
            </Container>
          </main>
        </InfracoesProvider>
      </IdentityProvider>
    </ThemeProvider>
  );
};

export default HeaderLayout;
