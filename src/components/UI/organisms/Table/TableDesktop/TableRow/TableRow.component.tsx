import { FunctionComponent } from 'react';
import { Checkbox } from '@/components';
import { TableRowProps } from './TableRow.interface';

export const TableRow: FunctionComponent<TableRowProps> = ({
  columns,
  rowData,
  checkboxSelection,
  isChecked,
  onCheckboxChange,
  onRowSelectionChange
}) => {
  const handleCheckboxChange = () => {
    onCheckboxChange(rowData);
  };

  const handleRowClick = () => {
    onRowSelectionChange && onRowSelectionChange(rowData);
  };

  return (
    <tr
      className={`max-h-12 odd:bg-white even:bg-gray-50 md:dark:odd:bg-[#15141b] md:dark:even:bg-gray-700 ${
        checkboxSelection ? 'cursor-pointer' : ''
      }`}
      onClick={handleRowClick}
    >
      {checkboxSelection && (
        <td>
          <Checkbox
            checked={isChecked}
            onClick={handleCheckboxChange}
            formControlSX={{
              '&.MuiFormControlLabel-root': {
                marginRight: -2,
                marginLeft: 1
              }
            }}
          />
        </td>
      )}
      {columns.map((column) => {
        const cellWidth =
          rowData[column.field] && rowData[column.field].length > 40 ? 'w-10' : 'w-auto';
        return (
          <td
            key={column.key}
            className={`whitespace-nowrap px-6 py-3 text-${column.align} text-sm ${
              column.align === 'end' ? 'text-end' : ''
            } font-normal text-gray-800 md:dark:text-gray-200 ${cellWidth}`}
          >
            {column.action ? (
              <p className="flex max-h-1 items-center">{column.action(rowData)}</p>
            ) : (
              <p className={`truncate ${rowData[column.field].length > 40 ? 'w-[350px]' : ''}`}>
                {rowData[column.field]}
              </p>
            )}
          </td>
        );
      })}
    </tr>
  );
};
