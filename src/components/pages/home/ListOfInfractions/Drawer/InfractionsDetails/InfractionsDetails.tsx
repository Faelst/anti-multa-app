import CardData from '@/components/Card';
import React, { FunctionComponent } from 'react';

interface InfractionsDetails {
  infractionsData: any;
}

const InfractionsDetails: FunctionComponent<InfractionsDetails> = ({ infractionsData }) => {
  const infra = infractionsData.infra;
  const valorMulta = infractionsData.valorMulta;
  const dataDaInfracao = infractionsData.dataDaInfracao;

  return (
    <>
      <CardData
        data={[
          { title: 'Infração', value: infra },
          { title: 'Valor da multa', value: valorMulta },
          { title: 'Data da infração', value: new Date(dataDaInfracao).toLocaleString('pt-BR') }
        ]}
        width="full"
      />
    </>
  );
};

export default InfractionsDetails;
