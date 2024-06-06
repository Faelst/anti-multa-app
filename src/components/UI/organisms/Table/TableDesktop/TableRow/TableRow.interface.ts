import { TableColumn } from '../..';

/**
 * Propriedades para a linha da tabela.
 *
 * @typedef {Object} TableRowProps
 * @property {TableColumn[]} columns - Lista de colunas na tabela.
 * @property {Record<string, any>} rowData - Dados da linha.
 * @property {boolean} [checkboxSelectionMode] - Habilita o modo de seleção por checkbox para a tabela.
 * @property {Function} [onCheckboxChange] - Função chamada quando a seleção por checkbox é alterada.
 */
export interface TableRowProps {
  /**
   * Lista de colunas na tabela.
   */
  columns: TableColumn[];

  /**
   * Dados da linha.
   */
  rowData: any;

  /**
   * Indica se a opção de checkbox deve ser habilitada na tabela.
   * Se definido como true, os checkboxes serão exibidos na primeira coluna da tabela, permitindo a seleção individual de linhas ou a seleção de todas as linhas simultaneamente.
   *
   * @type {boolean}
   * @default false
   */
  checkboxSelection?: boolean;

  /**
   * Indica se o checkbox da linha está marcado.
   *
   * @type {boolean}
   */
  isChecked?: boolean;

  /**
   * Função chamada quando a seleção do checkbox da linha é alterada.
   *
   * @type {Function}
   */
  onCheckboxChange: (rowData: Record<string, any>, field: string) => void;

  /**
   * Função de retorno de chamada acionada quando a seleção de linhas na tabela muda.
   *
   * @type {(selectedRows: Record<string, any>[]) => void}
   * @default undefined
   */
  onRowSelectionChange?: (selectedRows: Record<string, any>[]) => void;
}
