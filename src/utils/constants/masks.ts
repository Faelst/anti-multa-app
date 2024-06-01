export const vehiclePlateMask = [
  /[A-Za-z0-9]/,
  /[A-Za-z0-9]/,
  /[A-Za-z0-9]/,
  '-',
  /[A-Za-z0-9]/,
  /[A-Za-z0-9]/,
  /[A-Za-z0-9]/,
  /[A-Za-z0-9]/
];

export const phoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const cnpjMask = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '/',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
];

// /^(\d{1,2})(\d{3})(\d{3})([\dX])$/,'$1.$2.$3-$4'
export const rgMask = [
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /[A-Za-z0-9]/
];

export const cpfMask = [
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '.',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/
];

export const creditCardMask = [
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
  ' ',
  /\d/,
  /\d/,
  /\d/,
  /\d/
];

export const cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
