import { InferType, object, string } from 'yup';
import { isValidCPF } from '../../../utils';

export function validationSchemaQueryForm() {
  return object().shape({
    name: string()
      .required('Nome: Precisa ser preenchido.')
      .max(100, 'Nome: Tamanho máximo excedido.')
      .typeError('Nome inválido.'),
    cpf: string()
      .required('CPF: Precisa ser preenchido.')
      .typeError('CPF inválido.')
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF: Precisa ser no formato 000.000.000-00')
      .test('is-valid-cpf', 'CPF inválido.', (value) => {
        if (!value) return true;
        return isValidCPF(value);
      })
      .max(14, 'CPF: Tamanho máximo excedido.'),
    rg: string()
      .required('RG: Precisa ser preenchido.')
      .typeError('RG inválido.')
      .max(12, 'RG: Tamanho máximo excedido.'),
    profession: string()
      .required('Profissão: Precisa ser preenchido.')
      .max(50, 'Profissão: Tamanho máximo excedido.')
      .typeError('Profissão inválida.'),
    cep: string()
      .required('CEP: Precisa ser preenchido.')
      .typeError('CEP inválido.')
      .matches(/^\d{5}-\d{3}$/, 'CEP: Precisa ser no formato 00000-000')
      .max(9, 'CEP: Tamanho máximo excedido.'),
    uf: string()
      .required('UF: Precisa ser preenchido.')
      .typeError('UF inválido.')
      .max(2, 'UF: Tamanho máximo excedido.'),
    city: string()
      .required('Cidade: Precisa ser preenchido.')
      .max(100, 'Cidade: Tamanho máximo excedido.')
      .typeError('Cidade inválida.'),
    neighborhood: string()
      .required('Bairro: Precisa ser preenchido.')
      .max(100, 'Bairro: Tamanho máximo excedido.')
      .typeError('Bairro inválido.'),
    street: string()
      .required('Rua: Precisa ser preenchido.')
      .max(100, 'Rua: Tamanho máximo excedido.')
      .typeError('Rua inválida.'),
    number: string()
      .required('Número: Precisa ser preenchido.')
      .max(10, 'Número: Tamanho máximo excedido.')
      .typeError('Número inválido.'),
    complement: string()
      .required('Complemento: Precisa ser preenchido.')
      .max(100, 'Complemento: Tamanho máximo excedido.')
      .typeError('Complemento inválido.')
  });
}

const inferedSchema = validationSchemaQueryForm();

export type QueryFormProps = InferType<typeof inferedSchema>;

export const defaultValuesQueryForm = {
  name: null,
  phone: null,
  cpf: null,
  rg: null,
  cep: null,
  uf: null,
  city: null,
  neighborhood: null,
  street: null,
  number: null,
  complement: null
};
