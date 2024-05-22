import { ReactNode } from 'react';
import { ButtonProps } from '../../atoms';

/**
 * Props para o componente Dialogs.
 * @type DialogsProps
 */
export interface DialogsProps {
  /**
   * Função para abrir o Dialog.
   * @type boolean
   */
  open: boolean;
  /**
   * Função para fechar o Dialog.
   * @type () => void
   */
  onClose: () => void;
  /**
   * Titulo do Dialog.
   * @type string
   */
  title: string;

  /**
   * Descrição do Dialog
   * @type String
   */
  description?: string;
  /**
   * Conteúdo do Dialog, pode conter elementos React, como botões e texto.
   * @type ReactNode
   */
  content?: ReactNode;
  /**
   * Botões de ação do Dialog.
   * @type DialogButton[]
   */
  buttons: DialogButton[];
  /**
   * Define a classe CSS adicional para estilização personalizada.
   * @type string
   */
  className?: string;
}

/**
 * Interface para definir as propriedades dos botões do Dialog.
 * @type DialogButton
 */
export interface DialogButton extends ButtonProps {
  label: string;
}
