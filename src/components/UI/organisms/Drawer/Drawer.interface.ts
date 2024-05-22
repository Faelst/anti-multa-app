import { ReactNode } from 'react';

export interface DrawerProps {
  /**
   * Título exibido no cabeçalho do Drawer.
   * @type string
   */
  title?: string;

  /**
   * Descrição opcional do Drawer.
   * @type string
   */
  description?: string;

  /**
   * Componentes que compõem o conteúdo do Drawer.
   * @type ReactNode
   */
  children?: ReactNode;

  /**
   * Indica se o Drawer está aberto.
   * @type boolean
   */
  open: boolean;

  /**
   * Função chamada ao fechar o Drawer.
   * @type () => void
   */
  onClose?: () => void;

  /**
   * Determina o lado do componente onde o Drawer será ancorado.
   * Pode ser 'left', 'right', 'top' ou 'bottom'.
   * @type 'left' | 'right' | 'top' | 'bottom'
   */
  anchor: 'left' | 'right' | 'top' | 'bottom';

  /**
   * Controla a largura do segundo Drawer.
   * Quando definido como true, o segundo Drawer terá uma largura menor.
   * Quando definido como false, o segundo Drawer terá a largura padrão.
   * @type boolean
   * @default false
   */
  toggleDrawer?: boolean;
}
