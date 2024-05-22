import { Typography } from '@/components';
import React from 'react';

interface InfractionData {
  infra: string;
  valorMulta: string;
  recursoSimples: number;
  recursoEspecial: number;
}

const InfractionDetails: React.FC<InfractionData> = ({
  infra,
  valorMulta,
  recursoSimples,
  recursoEspecial
}) => {
  return (
    <div className="mb-4 rounded-md border border-gray-200 p-4 shadow-md">
      <Typography variant="lg" className="mb-1 md:dark:text-white">
        {infra}
      </Typography>
      <Typography variant="md" className="font-bold md:dark:text-white">
        Valor da Multa: {valorMulta}
      </Typography>
      <Typography variant="md" className="font-bold md:dark:text-white">
        Recurso Simples: {recursoSimples}
      </Typography>
      <Typography variant="md" className="font-bold md:dark:text-white">
        Recurso Especial: {recursoEspecial}
      </Typography>
    </div>
  );
};

export default InfractionDetails;
