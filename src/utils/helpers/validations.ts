import { string, addMethod, StringSchema } from 'yup';

declare module 'yup' {
  interface StringSchema {
    phoneNumberValidation(msg?: string): this;
  }
}

addMethod<StringSchema>(
  string,
  'phoneNumberValidation',
  function (msg: string = 'This field must be a number string.') {
    //@ts-ignore
    return this.test({
      name: 'phoneNumberValidation',
      message: msg,
      test: (value) => {
        if (!value) return true;
        const phone = value?.replace(/\D/g, '');
        return phone.length === 11;
      }
    });
  }
);

export const onlyNumbers = (str: string) => str.replace(/\D/g, '');

export const isValidCPF = (str: string) => {
  if (!str) return false;

  let sum;
  let rest;
  sum = 0;
  str = onlyNumbers(str);
  const invalidCpf = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
  ];

  if (invalidCpf.includes(str)) return false;

  for (let i = 1; i <= 9; i++) sum = sum + parseInt(str.substring(i - 1, i)) * (11 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(str.substring(9, 10))) return false;

  sum = 0;
  for (let i = 1; i <= 10; i++) sum = sum + parseInt(str.substring(i - 1, i)) * (12 - i);
  rest = (sum * 10) % 11;

  if (rest === 10 || rest === 11) rest = 0;
  if (rest !== parseInt(str.substring(10, 11))) return false;
  return true;
};

export const isValidCNPJ = (str: string) => {
  if (!str) return false;
  str = onlyNumbers(str);
  const invalidCnpj = [
    '00000000000000',
    '11111111111111',
    '22222222222222',
    '33333333333333',
    '44444444444444',
    '55555555555555',
    '66666666666666',
    '77777777777777',
    '88888888888888',
    '99999999999999'
  ];
  if (invalidCnpj.includes(str)) return false;

  let size = str.length - 2;
  let numbers = str.substring(0, size);
  const digits = str.substring(size);
  let sum = 0;
  let pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(0))) return false;

  size = size + 1;
  numbers = str.substring(0, size);
  sum = 0;
  pos = size - 7;
  for (let i = size; i >= 1; i--) {
    sum += parseInt(numbers.charAt(size - i)) * pos--;
    if (pos < 2) pos = 9;
  }
  result = sum % 11 < 2 ? 0 : 11 - (sum % 11);
  if (result !== parseInt(digits.charAt(1))) return false;

  return true;
};
