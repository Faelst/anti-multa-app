import { TableColumn } from '../Table/Table.interface';

export interface TableHeaderProps {
  /**
   * Lista de colunas na tabela.
   */
  columns: TableColumn[];

  /**
   * Indica se a opção checkbox deve estar habilitada na tabela.
   * Se definido como verdadeiro, as caixas de seleção serão exibidas na primeira coluna da tabela, permitindo a seleção de linhas individuais ou a seleção de todas as linhas simultaneamente.
   *
   * @type {boolean}
   * @default false
   */
  checkboxSelection?: boolean;

  /**
   * Função para lidar com a seleção de todas as linhas quando a caixa de seleção no cabeçalho está alternada.
   *
   * @type {Function}
   */
  onSelectAll: (isChecked: boolean) => void;
}
