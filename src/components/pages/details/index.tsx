'use client';
import React from 'react';

import { Typography } from '@/components/UI/atoms';
import { Card, Grid } from '@mui/material';
import { useClient } from '../../../context/clientContext';
import { useSolicitationsContext } from '../../../context/solicitationContext';
import { formatCurrency } from '../../../utils';

interface DocumentsProps {}

const DocumentsPage: React.FC<DocumentsProps> = () => {
  const { client } = useClient();
  const { solicitation } = useSolicitationsContext();

  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 ">
      <div className="col-span-1 space-y-1">
        <Typography variant="h2" className="font-extrabold italic md:dark:text-white">
          Detalhes da Solicitação
        </Typography>
      </div>

      <div className="mt-5 space-y-8 p-5 md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow-xl">
        <div className="flex justify-between">
          <Typography variant="sm" className=" md:dark:text-white">
            Pedido em 30 de fevereiro de 2024
          </Typography>
          {/* <Typography variant="md" className=" md:dark:text-white">
            Número do pedido 160430543
          </Typography> */}
        </div>

        <Card
          className="space-y-3 rounded border border-gray-300 bg-transparent p-6"
          style={{
            backgroundColor: 'transparent'
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={4}>
              <Typography variant="md" className=" md:dark:text-white">
                Dados do Solicitante:
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                {client.name}
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                CPF: {client.cpf}
              </Typography>

              <Typography variant="sm" className=" md:dark:text-white">
                {client.address.street}, {client.address.number}
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                {client.address.neighborhood}
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                {client.address.city} - {client.address.state}
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                Brasil
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="md" className=" md:dark:text-white">
                Forma de Pagamento:
              </Typography>
              <div
                className="mt-1 flex justify-start space-x-4"
                style={{
                  alignItems: 'center'
                }}
              >
                <Typography variant="sm" className=" md:dark:text-white">
                  Cartão de Crédito
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              {/* <Typography variant="md" className=" md:dark:text-white">
                Resumo do pedido:
              </Typography>
              <div
                className="mt-1 flex justify-between"
                style={{
                  alignItems: 'center'
                }}
              >
                <Typography variant="sm" className=" md:dark:text-white">
                  Recurso Solicitado:
                </Typography>
                <Typography variant="md" className=" md:dark:text-white">
                  123
                </Typography>
              </div> */}
              <div
                className="mt-1 flex justify-between"
                style={{
                  alignItems: 'center'
                }}
              >
                <Typography variant="sm" className=" md:dark:text-white">
                  Valor Pago:
                </Typography>
                <Typography variant="md" className="md:dark:text-white">
                  {formatCurrency(solicitation.solicitation.amount_payment / 100)}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Card>
      </div>
    </section>
  );
};

export default DocumentsPage;
