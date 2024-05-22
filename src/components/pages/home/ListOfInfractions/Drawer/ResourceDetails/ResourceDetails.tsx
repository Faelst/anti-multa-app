import { Typography } from '@/components';
import Image from 'next/image';
import React, { ReactNode } from 'react';

interface ResourceProps {}

const Resource: React.FC<ResourceProps> = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Card title="Recurso Simples">
          <div>
            <List title="Foco no cancelamento da infração">
              <ListItem text="Objetivo do recurso é o cancelamento da multa, a depender do julgamento do órgão autuado." />
              <ListItem
                text={
                  <span>
                    <span className="font-bold text-gray-950">Não</span> exige pagamento da infração
                    durante o recurso
                  </span>
                }
              />
            </List>
          </div>

          <div>
            <List title="Tranquilidade Durante o Processo">
              <ListItem text="Defesa nas três instâncias de julgamento: Defesa Prévia, Jari e CETRAN." />
            </List>
          </div>
          <List title="Limite de Tempo para queda da Pontuação" />
        </Card>

        <Card title="Recurso Especial">
          <div>
            <List title="Todas as características do Recurso Simples" />
            <div>
              <List title="Foco na eliminação de pontos na CNH">
                <ListItem text="O principal benefício é que a pontuação da infração objeto do recurso não seja inserida no prontuário do infrator (seja o proprietário ou condutor para o veículo)." />
                <ListItem text="Especialmente indicado para condutores com permissão para dirigir provisória, condutores com possibilidade de exceder o limite de pontos permitidos no período de um ano, motoristas profissionais, entre outros." />
                <ListItem text="Nossa garantia assegura que os serviços serão executados com o objetivo de evitar a inserção da pontuação no prontuário de habilitação por até 12 meses. Isso abrange todos os serviços essenciais para solucionar qualquer questão relacionada à pontuação da infração em questão. Além disso, oferecemos um compromisso de reembolso caso necessário." />
              </List>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Resource;

interface ListProps {
  title: string;
  children?: ReactNode;
}
interface ListItemProps {
  text: string | ReactNode;
}

interface CardProps {
  title: string;
  children: ReactNode;
}

const ListItem: React.FC<ListItemProps> = ({ text }) => (
  <li>
    <Typography variant="xs" className="font-sans font-semibold text-gray-500">
      {text}
    </Typography>
  </li>
);

const List: React.FC<ListProps> = ({ children, title }) => (
  <>
    <div className="mt-3 flex items-start">
      <Image src="/premium.svg" alt="A premium svg icon" height={17} width={17} className="mr-1" />
      <Typography variant="sm" className="font-semibold">
        {title}
      </Typography>
    </div>
    <ul className="ml-10 list-disc">{children}</ul>
  </>
);

const Card: React.FC<CardProps> = ({ title, children }) => (
  <div className="rounded-lg border border-gray-300 p-4">
    <Typography variant="xl" className="flex justify-center font-semibold">
      {title}
    </Typography>
    <div>{children}</div>
  </div>
);
