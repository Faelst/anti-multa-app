'use client';
import React from 'react';

import { Typography } from '@/components/UI/atoms';
import QueryFormContainer from './QueryFormContainer';

interface DocumentsProps {}

const DocumentsPage: React.FC<DocumentsProps> = () => {
  return (
    <section className="mx-auto grid max-w-5xl grid-cols-1 ">
      <div className="col-span-1 space-y-1">
        <Typography variant="h2" className="font-extrabold italic md:dark:text-white">
          PREENCHA OS DADOS
        </Typography>
        <Typography variant="h2" className="font-extrabold italic md:dark:text-white">
          PARA PROCURAÇÃO
        </Typography>
      </div>

      <QueryFormContainer />
    </section>
  );
};

export default DocumentsPage;
