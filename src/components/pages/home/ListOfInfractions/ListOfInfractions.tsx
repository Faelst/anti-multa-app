import { Table, TableColumn } from '@/components';
import { formatCurrency } from '@/utils';
import { Dispatch, SetStateAction } from 'react';
import { OpenDrawerDetails } from './ListOfInfractionsContainer';
import { IconButton } from '@mui/material';
import moment from 'moment';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { Infraction } from '@/assets/icon';
import { useTheme } from 'next-themes';

interface ListOfInfractionsProps {
  data: any[];
  setOpenDrawer: Dispatch<SetStateAction<OpenDrawerDetails | undefined>>;
  setInfractionsList: Dispatch<SetStateAction<any[]>>;
  setRowData: Dispatch<SetStateAction<any>>;
}
const ListOfInfractions: React.FC<ListOfInfractionsProps> = ({
  data,
  setOpenDrawer,
  setInfractionsList,
  setRowData
}) => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorIcon = isDark ? '#FFFFFFB2' : '#00000';

  const columns: TableColumn[] = [
    { key: 'infra', label: 'Infração', field: 'infra', align: 'center' },
    { key: 'valorMulta', label: 'Valor da Multa', field: 'valorMulta', align: 'center' },
    {
      key: 'dataDaInfracao',
      label: 'Data da infração',
      field: 'dataDaInfracao',
      align: 'center',
      action: (rowData) => {
        const dateOfInfraction = moment(rowData.dataDaInfracao).format('DD/MM/YY');
        return dateOfInfraction;
      }
    },
    {
      key: 'recursoSimples',
      label: 'Recurso Simples',
      field: 'recursoSimples',
      align: 'center',
      action: (rowData) => {
        const formattedCurrency = formatCurrency(9999 / 100);
        return (
          <div className="flex items-center space-x-2">
            <span>{formattedCurrency}</span>
          </div>
        );
      }
    },
    {
      key: 'recursoEspecial',
      label: 'Recurso Especial',
      field: 'recursoEspecial',
      align: 'center',
      action: (rowData) => {
        const formattedCurrency = formatCurrency(78989 / 100);
        return (
          <div className="flex items-center space-x-2">
            <span>{formattedCurrency}</span>
          </div>
        );
      }
    },
    {
      key: 'actions',
      label: 'Ações',
      field: 'actions',
      action: () => {
        return (
          <div className="-ml-4">
            <IconButton onClick={() => setOpenDrawer('infractionsDetails')}>
              <AiOutlineFileSearch size={28} className="text-gray-900 md:dark:text-[#FFFFFFB2]" />
            </IconButton>
            <IconButton onClick={() => setOpenDrawer('resourceDetails')}>
              <Infraction height={30} width={30} color={colorIcon} />
            </IconButton>
          </div>
        );
      }
    }
  ];

  const handleOnSelectionChange = (selectedRows: Record<string, any>[]) => {
    setInfractionsList(selectedRows);
  };

  return (
    <Table
      columns={columns}
      rows={data}
      totalValue={formatCurrency(52584)}
      checkboxSelection
      onSelectionChange={handleOnSelectionChange}
      onSelectedRow={(selectedRow) => setRowData(selectedRow)}
    />
  );
};

export default ListOfInfractions;
