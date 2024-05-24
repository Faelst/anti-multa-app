'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
  const [client, setClient] = useState<any>({});

  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};
