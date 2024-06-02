'use client';
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface ClientContextType {
  client: {
    id: string;
    cpf: string;
    name: string;
    phone: string;
    chassi: string;
    vehiclePlate: string;
    provisionalLicense: boolean;
    address: {
      street: string;
      number: string;
      neighborhood: string;
      city: string;
      state: string;
      zipCode: string;
      complement: string;
    };
  };
  setClient: (data: any) => void;
}

const ClientContext = createContext<ClientContextType>({
  client: {
    id: '',
    cpf: '',
    name: '',
    phone: '',
    chassi: '',
    vehiclePlate: '',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
      complement: ''
    },
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
    id: '',
    cpf: '',
    name: '',
    phone: '',
    chassi: '',
    vehiclePlate: '',
    address: {
      street: '',
      number: '',
      neighborhood: '',
      city: '',
      state: '',
      zipCode: '',
      complement: ''
    },
    provisionalLicense: false
  });

  return <ClientContext.Provider value={{ client, setClient }}>{children}</ClientContext.Provider>;
};
