'use client';
import { useInfractions } from '@/context/infracoesContext';
import ListOfInfractions from './ListOfInfractions';
import ListOfInfractionsHeader from './ListOfInfractionsHeader';
import { useState } from 'react';
import DrawerDetails from './Drawer/DrawerDetails';
import { useRouter } from 'next/navigation';
import FineSummary from '../../FineSummary';
import api from '@/service/api';
import { useClient } from '../../../../context/clientContext';

export type OpenDrawerDetails = 'infractionsDetails' | 'resourceDetails';

const ListOfInfractionsContainer = () => {
  const route = useRouter();
  const { client } = useClient();
  const { infractionsData } = useInfractions();
  const [rowData, setRowData] = useState();
  const [infractionsList, setInfractionsList] = useState<any[]>([]);
  const [openDrawer, setOpenDrawer] = useState<OpenDrawerDetails | undefined>();
  const [details, setDetails] = useState(false);

  const handleOnClose = () => setOpenDrawer(undefined);

  const handleBackClick = () => setDetails(false);

  const handleNextClick = () => {
    // criar solicitação aqui
    console.log('infractionsData', infractionsData);
    console.log('infractionsList', infractionsList);
    // api.createSolicitation({
    //   customerId: 'clwv56mjp0000fjwwi7xipn4o',
    //   inflations: [
    //     {
    //       simpleAmount: infraction.recursoSimples,
    //       especialAmount: infraction.recursoEspecial,
    //       inflationAmount: infraction.valorMulta,
    //       paymentAmount: infraction[infraction.recurseType],
    //       type: 'multa',
    //       description: 'TRANSITAR EM VELOCIDADE SUPERIOR A MAXIMA PERMITIDA EM ATE 20',
    //       vehiclePlate: 'HCE7383',
    //       chassis: '3N1BC1AS2CL356451',
    //       date: '2025-08-21T00:00:00.000Z',
    //       hour: '14:47',
    //       dateInclude: '2023-11-06T00:00:00.000Z',
    //       defenseDate: '2021-12-06T00:00:00.000Z',
    //       situation: 'A PAGAR',
    //       code: '745-50'
    //     }
    //   ]
    // });

    // route.push('/infracoes/pagamento/cadastro');
  };

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
