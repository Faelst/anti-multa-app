import { FunctionComponent } from 'react';
import { PaginationProps } from './Pagination.interface';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';
import { CgPushChevronLeft, CgPushChevronRight } from 'react-icons/cg';

export const Pagination: FunctionComponent<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  itemsPerPage,
  onItemsPerPageChange
}) => {
  const itemsPerPageOptions = [5, 10, 15, 20];

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newItemsPerPage = parseInt(e.target.value, 10);
    onItemsPerPageChange(newItemsPerPage);
  };

  const renderItemsPerPageOptions = () => (
    <select
      className="cursor-pointer text-xs md:dark:bg-[#15141b]"
      value={itemsPerPage}
      onChange={handleItemsPerPageChange}
    >
      {itemsPerPageOptions.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center">
        <button
          onClick={() => handlePageChange(1)}
          disabled={currentPage === 1}
          className="text-xl disabled:opacity-50"
        >
          <CgPushChevronLeft className="cursor-pointer" />
        </button>
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="disabled:opacity-50"
        >
          <FaAngleLeft className="cursor-pointer" />
        </button>
      </div>
      <div className="flex items-center">
        <span className="text-sm">
          {currentPage} de {totalPages || 1}
        </span>
      </div>
      <div className="flex items-center">
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="disabled:opacity-50"
        >
          <FaAngleRight className="cursor-pointer" />
        </button>
        <button
          onClick={() => handlePageChange(totalPages)}
          disabled={currentPage === totalPages}
          className="text-xl disabled:opacity-50"
        >
          <CgPushChevronRight className="cursor-pointer" />
        </button>
      </div>
    </div>
  );
};
