import { AutocompleteProps as AutocompletePropsMUI } from '@mui/material';

export interface AutocompleteProps
  extends Omit<AutocompletePropsMUI<any, any, any, any>, 'renderInput'> {
  /**
   * Determina a Label do campo
   * @default ''
   * @type {string}
   */
  label?: string;

  /**
   * Indica se há um erro no campo.
   * @default false
   * @type boolean
   */
  error?: boolean;

  /**
   * Ativa o indicador de carregamento no campo.
   * @default false
   * @type boolean
   */
  loading?: boolean;

  /**
   * Define o tipo do ícone exibido no final do campo.
   * @type 'link' | 'submit' | undefined
   */
  endIconType?: 'link' | 'submit' | undefined;

  /**
   * Link associado ao ícone no final do campo (apenas se `endIconType` for 'link').
   * @type string | undefined
   */
  link?: string | undefined;

  /**
   * Função chamada quando o valor do campo é alterado (aplica-se a componentes "TextField").
   * @param event - Objeto de evento do React para a alteração no campo.
   * @type (event: React.ChangeEvent<HTMLInputElement>) => void
   */
  onChangeTextField: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /**
   * Nome identificador único do campo.
   * @type string
   */
  name: string;

  /**
   * Indica se o campo é obrigatório.
   * @default false
   * @type boolean
   */
  required?: boolean;
}
