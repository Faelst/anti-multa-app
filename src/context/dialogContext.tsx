'use client';
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DialogContextType {
  openDialogHomeForm: boolean;
  setOpenDialogHomeForm: (open: boolean) => void;
}

const DialogContext = createContext<DialogContextType>({
  openDialogHomeForm: false,
  setOpenDialogHomeForm: () => {}
});

export const useDialogContext = () => useContext(DialogContext);

interface InfractionsProviderProps {
  children: ReactNode;
}

export const DialogContextProvider = ({ children }: InfractionsProviderProps) => {
  const [openDialogHomeForm, setOpenDialogHomeForm] = useState(false);

  return (
    <DialogContext.Provider value={{ openDialogHomeForm, setOpenDialogHomeForm }}>
      {children}
    </DialogContext.Provider>
  );
};
