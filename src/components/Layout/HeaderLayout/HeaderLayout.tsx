import React from 'react';
import { Navbar } from '..';
import BreadcrumbLayout from './BreadcrumbLayout';
import { InfracoesProvider } from '@/context/infracoesContext';
import { ThemeProvider } from '@/components';
import { Container } from '@mui/material';
import { IdentityProvider } from '@/context/identityContext';
import Hello from './Hello';
import { Toaster } from 'sonner';
import { ClientProvider } from '../../../context/clientContext';
import { DialogContextProvider } from '../../../context/dialogContext';

const HeaderLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      <IdentityProvider>
        <ClientProvider>
          <InfracoesProvider>
            <DialogContextProvider>
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
            </DialogContextProvider>
          </InfracoesProvider>
        </ClientProvider>
      </IdentityProvider>
    </ThemeProvider>
  );
};

export default HeaderLayout;
