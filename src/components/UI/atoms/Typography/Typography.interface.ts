import { ReactNode } from 'react';

export interface TypographyProps {
  /**
   * Variante de estilo para o texto.
   * @default 'base'
   * @type {'h1' | 'h2' | 'xxl' | 'xl' | 'lg' | 'md' | 'base' | 'sm' | 'xs'}
   */
  variant: 'h1' | 'h2' | 'xxl' | 'xl' | 'lg' | 'md' | 'base' | 'sm' | 'xs';

  /**
   * Conteúdo a ser exibido dentro do componente.
   * @type {ReactNode}
   */
  children: ReactNode;

  /**
   * Cor do texto (opcional).
   * @type {string}
   */
  color?: string;

  /**
   * Classes adicionais para personalizar o estilo (opcional).
   * @type {string}
   */
  className?: string;
}
