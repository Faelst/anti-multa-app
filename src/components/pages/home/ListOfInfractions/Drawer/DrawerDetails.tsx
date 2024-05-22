import { Button, Drawer } from '@/components';
import Resource from './ResourceDetails/ResourceDetails';
import { OpenDrawerDetails } from '../ListOfInfractionsContainer';
import InfractionsDetails from './InfractionsDetails/InfractionsDetails';
import { ReactNode } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';

interface DialogsDetailsProps {
  openDrawer: OpenDrawerDetails | undefined;
  handleOnClose: () => void;
  infractionsData: any;
}

const DrawerDetails: React.FC<DialogsDetailsProps> = ({
  openDrawer,
  handleOnClose,
  infractionsData
}) => {
  const childrenDrawer: { [key: string]: ReactNode } = {
    infractionsDetails: <InfractionsDetails infractionsData={infractionsData} />,
    resourceDetails: <Resource />
  };

  const open = openDrawer === 'resourceDetails' || openDrawer === 'infractionsDetails';
  const drawerContent = {
    title:
      openDrawer === 'resourceDetails'
        ? 'Recurso Simples e Recurso Especial'
        : 'Detalhes da infração',
    description:
      openDrawer === 'resourceDetails'
        ? 'Entenda a diferença entre um Recurso Simples e um Recurso Especial.'
        : 'Detalhes sobre as infrações cometidas.'
  };

  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={handleOnClose}
      title={drawerContent.title}
      description={drawerContent.description}
      children={
        <>
          {childrenDrawer[openDrawer!]}
          <div className="my-4 flex justify-end">
            <Button
              variant="outlined"
              className="flex items-center justify-center"
              startIcon={<IoCloseCircleOutline size={22} />}
              onClick={handleOnClose}
            >
              Fechar
            </Button>
          </div>
        </>
      }
    />
  );
};

export default DrawerDetails;
