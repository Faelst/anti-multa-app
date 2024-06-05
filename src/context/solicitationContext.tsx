'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SolicitationsContextType {
  solicitation: any;
  setSolicitations: (data: any) => void;
}

const SolicitationsContext = createContext<SolicitationsContextType>({
  solicitation: [],
  setSolicitations: () => {}
});

export const useSolicitationsContext = () => useContext(SolicitationsContext);

interface ProviderProps {
  children: ReactNode;
}

export const SolicitationsProvider = ({ children }: ProviderProps) => {
  const [solicitation, setSolicitations] = useState<any[]>([]);

  return (
    <SolicitationsContext.Provider value={{ solicitation, setSolicitations }}>
      {children}
    </SolicitationsContext.Provider>
  );
};
