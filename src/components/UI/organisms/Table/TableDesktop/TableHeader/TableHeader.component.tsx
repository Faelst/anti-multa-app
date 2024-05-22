import { FunctionComponent, useState } from 'react';
import { Checkbox } from '@/components';
import { TableHeaderProps } from './TableHeader.interface';

export const TableHeader: FunctionComponent<TableHeaderProps> = ({
  columns,
  checkboxSelection,
  onSelectAll
}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    onSelectAll(!isChecked);
  };

  return (
    <thead>
      <tr>
        {checkboxSelection && (
          <th>
            <Checkbox
              onChange={handleCheckboxChange}
              formControlSX={{
                '&.MuiFormControlLabel-root': {
                  marginRight: -1,
                  pl: 1
                }
              }}
            />
          </th>
        )}
        {columns.map((column) => (
          <th
            key={column.key}
            scope="col"
            className="px-5 py-3 text-start text-xs font-bold uppercase text-gray-900 md:dark:text-white"
          >
            {column.label}
          </th>
        ))}
      </tr>
    </thead>
  );
};
