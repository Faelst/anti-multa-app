/**
 * @typedef {Object} PaginationProps
 * @property {number} currentPage - Número da página atual.
 * @property {number} totalPages - Número total de páginas.
 * @property {(page: number) => void} onPageChange - Função chamada quando a página é alterada.
 * @property {number} itemsPerPage - Número de itens por página.
 * @property {(itemsPerPage: number) => void} onItemsPerPageChange - Função chamada quando a quantidade de itens por página é alterada.
 */

export interface PaginationProps {
  /**
   * Número da página atual.
   * @type {number}
   */
  currentPage: number;

  /**
   * Número total de páginas.
   * @type {number}
   */
  totalPages: number;

  /**
   * Função chamada ao alterar a página.
   * @type {(page: number) => void}
   */
  onPageChange: (page: number) => void;

  /**
   * Número de itens por página.
   * @type {number}
   */
  itemsPerPage: number;

  /**
   * Função chamada ao alterar o número de itens por página.
   * @type {(itemsPerPage: number) => void}
   */
  onItemsPerPageChange: (itemsPerPage: number) => void;
}
