import { TableHTMLAttributes, ReactNode } from 'react';

/**
 * Representa uma coluna na tabela.
 *
 * @typedef {Object} TableColumn
 * @property {string} key - Chave única para a coluna.
 * @property {string} label - Rótulo de exibição.
 * @property {'start' | 'end'} [align=start] - Alinhamento ('start' para esquerda, 'end' para direita).
 * @property {string} field - Nome do campo nas linhas.
 * @property {(rowData: Record<string, any>) => ReactNode} [action] - Função para renderizar ação na coluna.
 * @property {boolean} [checkboxSelection] - Habilita a seleção de checkbox para a coluna.
 * @property {string} [flex] - Classe para controlar a largura da coluna.
 */

export interface TableColumn {
  /**
   * Chave única para a coluna.
   * @type {string}
   */
  key: string;

  isCheckbox?: boolean;

  /**
   * Display de exibição na tabela.
   * @type {string}
   */
  label: string;

  /**
   * Alinhamento do conteúdo ('start','end' ou 'center', padrão é 'start').
   * @type {'start' | 'end' | 'center'}
   * @default 'start'
   */
  align?: 'start' | 'end' | 'center';

  /**
   * Nome do campo para identificar dados nas linhas.
   * @type {string}
   */
  field: string;

  /**
   * Função para renderizar ação na coluna.
   * @type {(rowData: Record<string, any>) => ReactNode}
   */
  action?: (rowData: Record<string, any>) => ReactNode;

  /**
   * Habilita a seleção de checkbox para a coluna.
   */
  checkboxSelection?: boolean;

  /**
   * Classe CSS para controlar a largura da coluna.
   */
  flex?: number | string;
}

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  /**
   * Função de retorno de chamada acionada quando uma linha é selecionada.
   *
   * @type {(selectedRow: Record<string, any>) => void}
   * @default undefined
   */
  onSelectedRow?: (selectedRow: Record<string, any>) => void;
  /**
   * Uma matriz de objetos TableColumn que representa as colunas da tabela.
   *
   * @type {TableColumn[]}
   */
  columns: TableColumn[];

  /**
   * Uma matriz de objetos de dados que representa as linhas da tabela.
   *
   * @type {Record<string, any>[]}
   */
  rows: Record<string, any>[];

  /**
   * Componentes adicionais que compõem o conteúdo da tabela.
   *
   * @type {ReactNode}
   * @default undefined
   */
  children?: ReactNode;

  /**
   * Valor total a ser exibido como resultado final ou soma no rodapé da tabela.
   *
   * @type {(number | string | undefined)}
   * @default undefined
   */
  totalValue?: number | string | undefined;

  /**
   * Indica se a opção checkbox deve estar habilitada na tabela.
   * Se definido como verdadeiro, as caixas de seleção serão exibidas na primeira coluna da tabela, permitindo a seleção de linhas individuais ou a seleção de todas as linhas simultaneamente.
   *
   * @type {boolean}
   * @default false
   */
  checkboxSelection?: boolean;

  /**
   * Função de retorno de chamada acionada quando a seleção de linhas na tabela é alterada.
   *
   * @type {(selectedRows: Record<string, any>[]) => void}
   * @default undefined
   */
  onSelectionChange?: (selectedRows: Record<string, any>[]) => void;
}
