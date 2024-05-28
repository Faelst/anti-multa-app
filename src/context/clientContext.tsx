'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface ClientContextType {
  client: {
    cpf: string;
    name: string;
    phone: string;
    chassi: string;
    vehiclePlate: string;
    provisionalLicense: boolean;
  };
  setClient: (data: any) => void;
}

const ClientContext = createContext<ClientContextType>({
  client: {
    cpf: '',
    name: '',
    phone: '',
    chassi: '',
    vehiclePlate: '',
    provisionalLicense: false
  },
  setClient: () => {}
});

export const useClient = () => useContext(ClientContext);

interface InfractionsProviderProps {
  children: ReactNode;
}

export const ClientProvider = ({ children }: InfractionsProviderProps) => {
  const [client, setClient] = useState<any>({
    cpf: '',
    name: '',
    phone: '',
    chassi: '',
    vehiclePlate: '',
    provisionalLicense: false
  });

  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};
