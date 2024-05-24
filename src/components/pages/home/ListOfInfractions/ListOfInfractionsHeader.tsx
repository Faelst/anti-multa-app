import { Button, Typography } from '@/components';
import { HiChevronRight } from 'react-icons/hi';
import BoxDetails from './HeaderWrapper/BoxDetails';
import { formatDocumentNumber } from '@/utils/format/formatDocumentNumber';
import { formatCurrency } from '@/utils';
import InfractionGuide from './HeaderWrapper/InfractionGuide';
import DebtsSelectionGuide from './HeaderWrapper/DebtsSelectionGuide';
import { Dispatch, SetStateAction, useState } from 'react';
import { useInfractions } from '../../../../context/infracoesContext';
import { useClient } from '../../../../context/clientContext';

interface ListOfInfractionsProps {
  infractionsList: any[];
  setDetails: Dispatch<SetStateAction<boolean>>;
}

const ListOfInfractionsHeader: React.FC<ListOfInfractionsProps> = ({
  infractionsList,
  setDetails
}) => {
  const { infractionsData } = useInfractions();
  const { client } = useClient();
  const [multaMeter] = useState(
    formatCurrency(infractionsData.reduce((acc, curr) => acc + Number(curr.valorMulta), 0))
  );

  const handleOnClicked = () => setDetails(true);

  return (
    <>
      <div className="flex flex-col gap-4 divide-x divide-gray-300 md:dark:divide-gray-700 md:dark:bg-[#15141b] md:dark:shadow lg:flex-row">
        <BoxDetails
          name={client.name}
          registrationNumber={formatDocumentNumber(client.cpf)}
          detran={'Detran MG'}
          multaMeter={multaMeter}
        />
        <InfractionGuide />
        <DebtsSelectionGuide />
      </div>

      <div className="my-4 mt-10 flex flex-row items-center justify-between">
        <Typography variant="h2" className="md:dark:text-white">
          Infrações
        </Typography>
        <Button
          disabled={!infractionsList?.length}
          variant="contained"
          endIcon={<HiChevronRight size={22} />}
          className="flex items-center justify-center"
          onClick={handleOnClicked}
        >
          Recorrer a multa
        </Button>
      </div>
    </>
  );
};
export default ListOfInfractionsHeader;
