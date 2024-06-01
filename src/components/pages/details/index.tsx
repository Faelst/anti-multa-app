'use client';
import React from 'react';

import { Typography } from '@/components/UI/atoms';
import { Card, Grid } from '@mui/material';

interface DocumentsProps {}

const DocumentsPage: React.FC<DocumentsProps> = () => {
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
          <Typography variant="md" className=" md:dark:text-white">
            Número do pedido 160430543
          </Typography>
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
                João da Silva
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                CPF: 123.456.789-00
              </Typography>
              {/* endereço */}
              <Typography variant="sm" className=" md:dark:text-white">
                Rua das Flores, 123
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                Bairro dos Anjos
              </Typography>
              <Typography variant="sm" className=" md:dark:text-white">
                São Paulo, SP - 12345-678
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
                <img
                  src="https://s3-alpha-sig.figma.com/img/a05c/fd1e/5ccc033b4fb2a949e3352d4680c54acf?Expires=1717977600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j~gX5F4-1CYAW1asSPelN-2BQroZu5dVQ-LOdntWRcJaEPnjh4yxJjqZHu4OI1Q9nk-W9F3TbkvhSY7Ly3L7hv2qTyGIkWUUFVghPFwYc1tzWVgXNedH5eQucZBzN4~Yowzcq00olJrrcXhdRdp0co-zFtNindhYNB1L55A4-gQo9Zbbku6jDrYhwrMaYHcE0LT5X9ZLNZXMpIEN3C8yYch1jgI6LRyLzkNd~XtpQouo2XrIJqjE28DJnUCcbiGJdDEkiwz19CFjYfe~pqVGyfQAEPofaaltSr0BNWFA6LiImztT4Em6fKBVblCCN7QdT0IIPocAny9IFBfcqVpXcA__"
                  alt="visa"
                  className="h-8 w-8"
                  style={{ objectFit: 'contain' }}
                />
                <Typography variant="sm" className=" md:dark:text-white">
                  terminando em 9305
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography variant="md" className=" md:dark:text-white">
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
                  Simples
                </Typography>
              </div>
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
                  R$ 100,00
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
