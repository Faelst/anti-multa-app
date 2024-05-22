import { ComponentProps } from 'react';

/**
 * Representa um item em uma navegação de migalhas de pão (breadcrumb).
 * @type BreadcrumbItem
 */
interface BreadcrumbItem {
  /**
   * O rótulo do item da migalha de pão.
   * @type string
   */
  label: string;
  /**
   * O link associado ao item da migalha de pão.
   * @type string
   */
  link: string;
}

/**
 * Props para o componente Breadcrumb.
 * Estende as propriedades padrão de um elemento nav do React.
 * @type BreadcrumbProps
 */
export interface BreadcrumbProps extends ComponentProps<'nav'> {
  /**
   * Uma matriz de objetos BreadcrumbItem representando os itens da navegação de migalhas de pão.
   * @type BreadcrumbItem[]
   */
  items: BreadcrumbItem[];
}
