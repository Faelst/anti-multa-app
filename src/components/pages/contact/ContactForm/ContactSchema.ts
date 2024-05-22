import { InferType, object, string } from 'yup';

export function validationSchemaContactForm() {
  return object().shape({
    firstName: string()
      .required('Nome é obrigatório')
      .matches(/^[a-zA-Z\s]+$/, 'Nome precisa conter apenas letras alfabéticas'),
    lastName: string()
      .required('Sobrenome é obrigatório')
      .matches(/^[a-zA-Z\s]+$/, 'Sobrenome precisa conter apenas letras alfabéticas'),
    email: string()
      .email('E-mail inválido')
      .required('Email é obrigatório')
      .test('emailValidation', 'E-mail inválido', (value) => {
        if (!value) return true;
        const email = value as string;
        const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
        return emailRegex.test(email);
      }),
    message: string()
      .required('Mensagem é obrigatória')
      .min(10, 'Mensagem deve ter no mínimo 10 caracteres'),
    phoneNumber: string().required('Telefone é obrigatório')
  });
}

const inferedSchema = validationSchemaContactForm();
export type ContactProps = InferType<typeof inferedSchema>;

export const defaultValuesContactForm = {
  firstName: '',
  lastName: '',
  email: '',
  message: '',
  phoneNumber: ''
};
