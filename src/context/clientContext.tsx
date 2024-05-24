'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ClientContextType {
  client: any;
  setClient: (data: any) => void;
}

const ClientContext = createContext<ClientContextType>({
  client: {},
  setClient: () => {}
});

export const useClient = () => useContext(ClientContext);

interface InfractionsProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: InfractionsProviderProps) => {
  const [client, setClient] = useState<any>(null);

  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};
