'use client';
import { Typography } from '@/components';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import React from 'react';
import { GiRotaryPhone } from 'react-icons/gi';

const StoresHeader: React.FC = () => {
  const { theme } = useTheme();
  const logo = theme === 'dark' ? '/antimultasBrDark.png' : '/antimultasBr.png';

  return (
    <div className="flex flex-col space-y-8">
      <Typography variant="h1" className="text-center sm:text-start md:dark:text-white">
        Conheça nossas unidades
      </Typography>
      <div className="flex flex-col gap-8 sm:flex-row">
        <div className="flex-1">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <GiRotaryPhone className="text-red-600" size={23} />
              <h2 className="text-base sm:text-lg md:dark:text-white">Fale conosco:</h2>
            </div>
            <h1 className="text-xl font-bold text-[#5C5C5C] sm:text-3xl md:dark:text-[#FFFFFFB2]">
              0800 580 2929
            </h1>
            <h2 className="text-lg font-medium text-[#5C5C5C] sm:text-2xl md:dark:text-[#FFFFFFB2]">
              ou (31)2559-6200
            </h2>
          </div>
        </div>
        <div className="hidden flex-1 md:block">
          <div className="flex justify-center">
            <Image src={logo} alt="An antimultas svg icon logo" height={150} width={220} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoresHeader;
