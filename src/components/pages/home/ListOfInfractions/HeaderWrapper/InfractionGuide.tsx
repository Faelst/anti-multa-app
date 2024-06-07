import React from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Infraction } from '@/assets/icon';
import { useTheme } from 'next-themes';

const InfractionGuide: React.FC = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorIcon = isDark ? '#FFFFFF' : '#000000';

  return (
    <div className="flex flex-col justify-start space-y-2 p-4">
      <div className="flex items-center gap-2">
        <AiOutlineFileSearch size={30} className="text-gray-900 md:dark:text-[#FFFFFF]" />
        <span className="text-xs font-bold sm:text-sm">Detalhes da infração</span>
      </div>

      <div className="flex items-center gap-2">
        <Infraction height={30} width={30} color={colorIcon} />
        <span className="text-xs font-bold sm:text-sm">
          Diferença entre Recurso Simples e Especial
        </span>
      </div>

      <p className="text-xs text-gray-500 sm:text-sm md:dark:text-[#FFFFFF]">
        Para mais detalhes, clique no botão associado à infração na&nbsp;
        <span className="font-medium text-gray-700 md:dark:text-white">lista.</span>
      </p>
    </div>
  );
};

export default InfractionGuide;
