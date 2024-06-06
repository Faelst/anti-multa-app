import { Button, Typography } from '@/components';
import { Grid } from '@mui/material';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import InfractionDetails from './InfractionDetails';

interface InfractionData {
  infra: string;
  valorMulta: string;
  recursoSimples: number;
  recursoEspecial: number;
  recurseType: string;
}

interface FineSummaryProps {
  infractionsList: InfractionData[];
  onBackClick: () => void;
  onNextClick: () => void;
}

const calculateTotalFine = (infractionsList: InfractionData[]) => {
  return infractionsList.reduce((total, { recurseType, recursoEspecial, recursoSimples }) => {
    const value = parseFloat(
      String(recurseType === 'recursoSimples' ? recursoSimples : recursoEspecial)
        .replace('R$ ', '')
        .replace(',', '.')
    );
    return total + value;
  }, 0);
};

const FineSummary: React.FC<FineSummaryProps> = ({ infractionsList, onBackClick, onNextClick }) => {
  const totalFine = calculateTotalFine(infractionsList);

  return (
    <section className="mx-auto mt-8 max-w-3xl">
      <div className="grid grid-cols-1 gap-4 rounded-md border border-gray-300 bg-white p-6 sm:p-8 md:dark:bg-[#18171e]">
        <Typography variant="h2" className="font-extrabold md:dark:text-white">
          Resumo da Multa
        </Typography>
        {infractionsList.map((data, index) => (
          <InfractionDetails key={index} {...data} />
        ))}
        <Typography variant="xxl" className="text-right md:dark:text-white">
          Total a Pagar: R$ {totalFine.toFixed(2)}
        </Typography>
      </div>
      <Grid container className="mt-6 justify-end gap-4">
        <Button
          onClick={onBackClick}
          variant="outlined"
          size="small"
          className="flex items-center justify-center md:dark:bg-[#EC0000] md:dark:hover:bg-red-700 md:dark:focus:ring-red-800"
          startIcon={<HiChevronLeft size={22} />}
        >
          Voltar
        </Button>
        <Button
          onClick={onNextClick}
          size="small"
          className="flex items-center justify-center"
          endIcon={<HiChevronRight size={22} />}
        >
          Continuar
        </Button>
      </Grid>
    </section>
  );
};

export default FineSummary;
