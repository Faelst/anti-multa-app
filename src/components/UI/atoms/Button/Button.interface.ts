import { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  /**
   * Estilo de variação para o botão.
   * @type {'text' | 'outlined' | 'contained'}
   */
  variant?: 'text' | 'outlined' | 'contained';

  /**
   * Tamanho do botão.
   * @type {'small' | 'medium' | 'large'}
   */
  size?: 'small' | 'medium' | 'large';

  /**
   * Define se o botão deve ocupar a largura total do seu contêiner.
   * @type {boolean}
   */
  fullWidth?: boolean;

  /**
   * Ícone a ser exibido no início do botão.
   * @type {React.ReactNode}
   */
  startIcon?: React.ReactNode;

  /**
   * Ícone a ser exibido no final do botão.
   * @type {React.ReactNode}
   */
  endIcon?: React.ReactNode;
}
