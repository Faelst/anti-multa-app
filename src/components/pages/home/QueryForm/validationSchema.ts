import { InferType, object, string, boolean } from 'yup';
import { isValidCPF } from '../../../../utils';

export function validationSchemaQueryForm() {
  return object().shape({
    vehiclePlate: string()
      .required('Placa do veículo: Precisa ser preenchido.')
      .typeError('Placa inválida.')
      .matches(
        /^[A-Za-z0-9]{3}-[A-Za-z0-9]{4}$/,
        'Placa do veículo: Deve ter 7 caracteres alfanuméricos, sem caracteres especiais como espaços, vírgulas, etc.'
      ),
    chassi: string()
      .required('Chassi: Precisa ser preenchido.')
      .matches(/^[A-HJ-NPR-Z0-9]{17}$/, 'Chassi: Precisa ter 17 caracteres alfanuméricos.')
      .max(17, 'Chassi: Tamanho máximo excedido.')
      .typeError('Chassi inválido.'),
    name: string()
      .required('Nome: Precisa ser preenchido.')
      .max(100, 'Nome: Tamanho máximo excedido.')
      .typeError('Nome inválido.'),
    phone: string()
      .required('Telefone: Precisa ser preenchido.')
      .matches(/^\(\d{2}\) \d{5}-\d{4}$/, 'Telefone: Formato inválido. Ex: (00) 00000-0000')
      .typeError('Telefone inválido.')
      .max(15, 'Telefone: Tamanho máximo excedido.'),
    cpf: string()
      .required('CPF: Precisa ser preenchido.')
      .typeError('CPF inválido.')
      .matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF: Precisa ser no formato 000.000.000-00')
      .test('is-valid-cpf', 'CPF inválido.', (value) => {
        if (!value) return true;
        return isValidCPF(value);
      })
      .max(14, 'CPF: Tamanho máximo excedido.'),
    provisionalLicense: boolean(),
    indicator: string()
  });
}

const inferedSchema = validationSchemaQueryForm();
export type QueryFormProps = InferType<typeof inferedSchema>;

export const defaultValuesQueryForm = {
  vehiclePlate: null,
  chassi: null,
  name: null,
  phone: null,
  cpf: null,
  provisionalLicense: false,
  indicator: null
};
