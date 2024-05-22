'use client';
import { isValidCPF } from '@/utils';
import { object, string } from 'yup';

export function validationSchemaPaymentForm(paymentMethod: string) {
  if (paymentMethod === 'pix') {
    return object().shape({
      registrationNumber: string()
        .required('CPF: Precisa ser preenchido.')
        .typeError('CPF inválido.')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF: Precisa ser no formato 000.000.000-00')
        .test('is-valid-cpf', 'CPF inválido.', (value) => {
          if (!value) return true;
          return isValidCPF(value);
        }),
      email: string()
        .email('E-mail inválido')
        .required('E-mail: Precisa ser preenchido.')
        .typeError('E-mail inválido.')
        .test('emailValidation', 'E-mail inválido', (value) => {
          if (!value) return true;
          const email = value as string;
          const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
          return emailRegex.test(email);
        })
    });
  } else if (paymentMethod === 'credit-card') {
    return object().shape({
      cardNumber: string()
        .required('Número do cartão: Precisa ser preenchido.')
        .matches(/^\d{16}$/, 'Número do cartão: Precisa ter 16 dígitos')
        .typeError('Número do cartão é inválido.'),
      cardholderName: string()
        .required('Nome do titular do cartão: Precisa ser preenchido.')
        .typeError('Nome do titular do cartão é inválido.'),
      expirationDate: string()
        .required('Validade do cartão: Precisa ser preenchida')
        .typeError('Validade do cartão é inválida.')
        .matches(/^\d{2}\/\d{2}$/, 'Validade do cartão: Precisa ser no formato MM/YY'),
      cvv: string()
        .required('CVV: Precisa ser preenchido.')
        .typeError('CVV inválido.')
        .matches(/^\d{3}$/, 'CVV: Precisa ter 3 dígitos'),
      registrationNumber: string()
        .required('CPF: Precisa ser preenchido.')
        .typeError('CPF inválido.')
        .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF: Precisa ser no formato 000.000.000-00')
        .test('is-valid-cpf', 'CPF inválido.', (value) => {
          if (!value) return true;
          return isValidCPF(value);
        }),
      email: string()
        .email('E-mail inválido')
        .required('E-mail: Precisa ser preenchido.')
        .typeError('E-mail inválido.')
        .test('emailValidation', 'E-mail inválido', (value) => {
          if (!value) return true;
          const email = value as string;
          const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
          return emailRegex.test(email);
        }),
      installments: string()
        .required('Parcelas: Precisa ser preenchido.')
        .typeError('Parcelas: Precisa ser preenchido.')
    });
  }
}

export const defaultValuesPaymentForm = {};
