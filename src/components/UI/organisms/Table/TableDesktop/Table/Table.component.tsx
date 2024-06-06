'use client';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { TableProps } from './Table.interface';
import { Pagination } from '../../../../molecules';
import { TableHeader } from '../TableHeader';
import { TableRow } from '../TableRow';

export const Table: FunctionComponent<TableProps> = ({
  columns,
  rows,
  totalValue,
  checkboxSelection,
  onSelectionChange,
  onSelectedRow
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [selectedRows, setSelectedRows] = useState<Record<string, any>[]>([]);

  const totalPages = Math.ceil(rows?.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentRows = rows?.slice(startIndex, endIndex) ?? [];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (newItemsPerPage: number) => {
    setItemsPerPage(newItemsPerPage);
    setCurrentPage(1);
  };

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      setSelectedRows([...currentRows]);
      onSelectionChange && onSelectionChange([...currentRows]);
    } else {
      setSelectedRows([]);
      onSelectionChange && onSelectionChange([]);
    }
  };

  const handleCheckboxChange = (rowData: Record<string, any>, field: string) => {
    const index = selectedRows.findIndex((row) => row.id === rowData.id);

    if (index === -1) {
      const updatedSelectedRows = [...selectedRows, { ...rowData, recurseType: field }];
      setSelectedRows(updatedSelectedRows);
      onSelectionChange && onSelectionChange(updatedSelectedRows);
      return;
    }

    const indexOfExistingWithSameField = selectedRows.findIndex(
      (row) => row.id === rowData.id && row.recurseType === field
    );

    if (indexOfExistingWithSameField === -1) {
      const updatedSelectedRows = selectedRows.map((row) => {
        if (row.id === rowData.id) {
          return { ...rowData, recurseType: field };
        }

        return row;
      });

      setSelectedRows(updatedSelectedRows);
      onSelectionChange && onSelectionChange(updatedSelectedRows);

      return;
    }

    const updatedSelectedRows = selectedRows.filter((row) => row.id !== rowData.id);

    setSelectedRows(updatedSelectedRows);
    onSelectionChange && onSelectionChange(updatedSelectedRows);
    return;
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-md border border-gray-300 bg-white p-10 md:dark:border-gray-700 md:dark:bg-[#15141b] md:dark:shadow-xl">
      <div className="overflow-x-auto">
        <table className="mb-4 w-full divide-y divide-gray-200 md:dark:divide-gray-700">
          <TableHeader
            columns={columns}
            checkboxSelection={checkboxSelection}
            onSelectAll={handleSelectAll}
          />
          <tbody>
            {currentRows?.map((rowData, index) => (
              <TableRow
                key={index}
                columns={columns}
                rowData={rowData}
                checkboxSelection={checkboxSelection}
                isChecked={selectedRows.includes(rowData)}
                onCheckboxChange={handleCheckboxChange}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className={`flex items-center justify-${totalValue ? 'between' : 'end'}`}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={handleItemsPerPageChange}
        />
        {totalValue && (
          <span className="text-sm font-medium text-gray-800 md:dark:text-white">
            Total: {totalValue}
          </span>
        )}
      </div>
    </div>
  );
};
