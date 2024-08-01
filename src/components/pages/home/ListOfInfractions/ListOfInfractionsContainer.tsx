'use client';
import { useInfractions } from '@/context/infracoesContext';
import ListOfInfractions from './ListOfInfractions';
import ListOfInfractionsHeader from './ListOfInfractionsHeader';
import { useState } from 'react';
import DrawerDetails from './Drawer/DrawerDetails';
import { useRouter } from 'next/navigation';
import FineSummary from '../../FineSummary';
import api from '@/service/api';
import { useClient } from '@/context/clientContext';
import { useSolicitationsContext } from '@/context/solicitationContext';

export type OpenDrawerDetails = 'infractionsDetails' | 'resourceDetails';

const ListOfInfractionsContainer = () => {
  const route = useRouter();
  const { client } = useClient();
  const { infractionsData } = useInfractions();
  const { setSolicitations } = useSolicitationsContext();
  const [rowData, setRowData] = useState();
  const [infractionsList, setInfractionsList] = useState<any[]>([]);
  const [openDrawer, setOpenDrawer] = useState<OpenDrawerDetails | undefined>();
  const [details, setDetails] = useState(false);

  const handleOnClose = () => setOpenDrawer(undefined);

  const handleBackClick = () => setDetails(false);

  const handleNextClick = async () => {
    const solicitations = await api.createSolicitation({
      customerId: client.id,
      indicator: client.indicator,
      infractions: infractionsList.map((infraction) => ({
        processamento: infraction.processamento,
        orgao: infraction.orgao,
        ait: infraction.ia,
        recurseType: infraction.recurseType,
        simpleAmount: infraction.recursoSimples,
        especialAmount: infraction.recursoEspecial,
        inflationAmount: infraction.valorMulta,
        paymentAmount: infraction[infraction.recurseType],
        type: infraction.type,
        description: infraction.descricao,
        vehiclePlate: client.vehiclePlate,
        chassis: client.chassi,
        date: infraction.date,
        hour: infraction.hour,
        dateInclude: infraction.dateInclude,
        defenseDate: infraction.defenseDate,
        situation: infraction.situation,
        code: infraction.code,
        location: infraction.location
      }))
    });

    setSolicitations(solicitations.data);

    route.push('/infracoes/pagamento/cadastro');
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
              details={details}
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
