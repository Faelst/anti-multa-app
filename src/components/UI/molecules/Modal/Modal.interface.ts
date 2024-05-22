import { ReactNode } from 'react';
import { ButtonProps } from '../../atoms';

/**
 * Props para o componente Modal.
 * @type ModalProps
 */
export interface ModalProps {
  /**
   * Função para abrir o Modal.
   * @type boolean
   */
  open: boolean;
  /**
   * Função para fechar o Modal.
   * @type () => void
   */
  onClose: () => void;
  /**
   * Titulo do Modal.
   * @type string
   */
  title?: string;

  /**
   * Descrição do Modal
   * @type String
   */
  description?: string;
  /**
   * Conteúdo do Modal, pode conter elementos React, como botões e texto.
   * @type ReactNode
   */
  content?: ReactNode;
  /**
   * Botões de ação do Modal.
   * @type ModalButton[]
   */
  buttons?: ModalButton[];
  /**
   * Define a classe CSS adicional para estilização personalizada.
   * @type string
   */
  className?: string;

  /**
   * Define se o modal incluirá um logo.
   * Quando definido como verdadeiro, o título e a descrição não serão exibidos.
   * @type boolean
   */
  hasLogo?: boolean;

  /**
   * Logo do Modal.
   * @type string
   */
  logo?: string;

  /**
   * Altura do conteúdo do Modal.
   * @type boolean
   */
  heigthContent?: boolean;
}

/**
 * Interface para definir as propriedades dos botões do Modal.
 * @type ModalButton
 */
export interface ModalButton extends ButtonProps {
  label: string;
}
