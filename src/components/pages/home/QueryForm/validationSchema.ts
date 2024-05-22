import { InferType, object, string } from 'yup';

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
      .typeError('Chassi inválido.')
  });
}

const inferedSchema = validationSchemaQueryForm();
export type QueryFormProps = InferType<typeof inferedSchema>;

export const defaultValuesQueryForm = {
  vehiclePlate: null,
  chassi: null
};
