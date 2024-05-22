'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface InfracoesContextType {
  infractionsData: any[]; // Tipar conforme a estrutura dos dados das infrações
  setInfractionsData: (data: any) => void;
}

const InfracoesContext = createContext<InfracoesContextType>({
  infractionsData: [],
  setInfractionsData: () => {}
});

export const useInfractions = () => useContext(InfracoesContext);

interface InfractionsProviderProps {
  children: ReactNode;
}

export const InfracoesProvider = ({ children }: InfractionsProviderProps) => {
  const [infractionsData, setInfractionsData] = useState<any>(null);

  return (
    <InfracoesContext.Provider value={{ infractionsData, setInfractionsData }}>
      {children}
    </InfracoesContext.Provider>
  );
};
