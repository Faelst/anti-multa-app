'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface SolicitationsContextType {
  solicitations: any[];
  setSolicitations: (data: any) => void;
}

const SolicitationsContext = createContext<SolicitationsContextType>({
  solicitations: [],
  setSolicitations: () => {}
});

export const useSolicitationsContext = () => useContext(SolicitationsContext);

interface ProviderProps {
  children: ReactNode;
}

export const SolicitationsProvider = ({ children }: ProviderProps) => {
  const [solicitations, setSolicitations] = useState<any[]>([]);

  return (
    <SolicitationsContext.Provider value={{ solicitations, setSolicitations }}>
      {children}
    </SolicitationsContext.Provider>
  );
};
