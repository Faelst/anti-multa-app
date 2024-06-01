'use client';
import { useInfractions } from '@/context/infracoesContext';
import ListOfInfractions from './ListOfInfractions';
import ListOfInfractionsHeader from './ListOfInfractionsHeader';
import { useState } from 'react';
import DrawerDetails from './Drawer/DrawerDetails';
import { useRouter } from 'next/navigation';
import FineSummary from '../../FineSummary';

export type OpenDrawerDetails = 'infractionsDetails' | 'resourceDetails';

const ListOfInfractionsContainer = () => {
  const route = useRouter();
  const { infractionsData } = useInfractions();
  const [rowData, setRowData] = useState();
  const [infractionsList, setInfractionsList] = useState<any[]>([]);
  const [openDrawer, setOpenDrawer] = useState<OpenDrawerDetails | undefined>();
  const [details, setDetails] = useState(false);

  const handleOnClose = () => setOpenDrawer(undefined);
  const handleBackClick = () => setDetails(false);
  const handleNextClick = () => route.push('/infracoes/pagamento/cadastro');

  return (
    <>
      {details ? (
        <FineSummary
          infractionsList={infractionsList}
          onBackClick={handleBackClick}
          onNextClick={handleNextClick}
        />
      ) : (
        <div className="mb-10 grid grid-cols-1">
          <div className="col-span-1">
            <ListOfInfractionsHeader infractionsList={infractionsList} setDetails={setDetails} />
          </div>
          <div className="col-span-1">
            <ListOfInfractions
              data={infractionsData}
              setOpenDrawer={setOpenDrawer}
              setInfractionsList={setInfractionsList}
              setRowData={setRowData}
            />
            <DrawerDetails
              handleOnClose={handleOnClose}
              openDrawer={openDrawer}
              infractionsData={rowData}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ListOfInfractionsContainer;
