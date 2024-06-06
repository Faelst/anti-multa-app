import { Dispatch, SetStateAction, useState } from 'react';
import { AiOutlineFileSearch } from 'react-icons/ai';
import { useTheme } from 'next-themes';
import { IconButton } from '@mui/material';

import { Checkbox, Table, TableColumn } from '@/components';
import { Infraction } from '@/assets/icon';
import { formatCurrency } from '@/utils';
import { OpenDrawerDetails } from './ListOfInfractionsContainer';
import { useClient } from '../../../../context/clientContext';

interface ListOfInfractionsProps {
  data: any[];
  setOpenDrawer: Dispatch<SetStateAction<OpenDrawerDetails | undefined>>;
  setInfractionsList: Dispatch<SetStateAction<any[]>>;
  setRowData: Dispatch<SetStateAction<any>>;
  details: boolean;
}
const ListOfInfractions: React.FC<ListOfInfractionsProps> = ({
  data,
  setOpenDrawer,
  setInfractionsList,
  setRowData,
  details
}) => {
  const { client } = useClient();
  const [total] = useState(data.reduce((acc, curr) => acc + Number(curr.valorMulta), 0));
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const colorIcon = isDark ? '#FFFFFFB2' : '#00000';
  const columns: TableColumn[] = [
    { key: 'infra', label: 'Infração', field: 'infra', align: 'center' },
    {
      key: 'dataDaInfracao',
      label: 'Data da infração',
      field: 'dataDaInfracao',
      align: 'center',
      action: (rowData: any) => {
        return (
          <div className="flex items-center space-x-2">
            <span>{rowData.dataDaInfracao}</span>
          </div>
        );
      }
    },
    {
      key: 'valorMulta',
      label: 'Valor da Multa',
      field: 'valorMulta',
      align: 'center',
      action: (rowData: any) => {
        const formattedCurrency = formatCurrency(Number(rowData.valorMulta));
        return (
          <div className="flex items-center space-x-2">
            <span>{formattedCurrency}</span>
          </div>
        );
      }
    },
    {
      key: 'recursoSimples',
      label: 'Recurso Simples',
      field: 'recursoSimples',
      align: 'center',
      isCheckbox: true,
      action: (rowData: any) => {
        const formattedCurrency = formatCurrency(Number(rowData.recursoSimples));
        return (
          <div className="flex items-center">
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
      isCheckbox: true,
      action: (rowData: any) => {
        const formattedCurrency = formatCurrency(Number(rowData.recursoEspecial));
        return (
          <div className="flex items-center">
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
  ].filter((column) => {
    if (client.provisionalLicense) {
      return column.key !== 'recursoSimples';
    }
    return column;
  }) as TableColumn[];

  const handleOnSelectionChange = (selectedRows: Record<string, any>[]) => {
    setInfractionsList(selectedRows);
  };

  return (
    <Table
      columns={columns}
      rows={data}
      totalValue={formatCurrency(total)}
      onSelectionChange={handleOnSelectionChange}
    />
  );
};

export default ListOfInfractions;
