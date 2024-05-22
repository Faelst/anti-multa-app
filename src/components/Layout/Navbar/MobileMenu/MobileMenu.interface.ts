export interface MobileMenuProps {
  /**
   * Lista de links a serem exibidos no menu.
   * @type {string[]}
   */
  links: string[];

  /**
   * Função de manipulação de link.
   * @param {string} link - O link a ser manipulado.
   * @returns {string} - O link manipulado.
   */
  handleHref: (link: string) => string;

  /**
   * Função chamada ao fechar o menu.
   * @returns {void}
   */
  onClose: () => void;
}
