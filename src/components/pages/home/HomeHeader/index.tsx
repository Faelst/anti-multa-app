import { Typography } from '@/components';

const HomeHeader = () => (
  <div className="flex flex-col">
    <Typography variant="h1" className="font-extrabold text-[#EC0000]">
      DETRAN-MG
    </Typography>
    <Typography variant="h2" className="font-sans md:dark:text-white">
      Consulta de Infrações
    </Typography>
    <Typography variant="sm" color="text-[#666666] md:dark:text-[#FFFFFF]" className="lg:w-[90%]">
      Verifique gratuitamente o status do seu veículo no Detran e regularize-o facilmente agora em
      até 12 vezes. Mantenha uma condução segura monitorando sua pontuação na CNH.
    </Typography>
  </div>
);
export default HomeHeader;
