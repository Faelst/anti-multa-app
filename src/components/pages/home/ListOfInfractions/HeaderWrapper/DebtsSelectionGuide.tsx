import React from 'react';

const DebtsSelectionGuide: React.FC = () => {
  return (
    <div className="flex flex-col justify-start space-y-2 p-4">
      <p className="text-xs font-bold sm:text-sm">Selecione os débitos que deseja pagar:</p>
      <ul className="list-disc pl-5">
        <li className="text-xs sm:text-sm md:dark:text-[#FFFFFF] ">
          Clique no checkbox ao lado de cada débito para selecioná-lo.
        </li>
        <li className="text-xs sm:text-sm md:dark:text-[#FFFFFF]">
          Você também pode selecionar todos os débitos de uma vez clicando no checkbox na coluna de
          cabeçalho.
        </li>
      </ul>
    </div>
  );
};

export default DebtsSelectionGuide;
