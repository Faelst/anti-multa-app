import { string, object, ref, InferType } from 'yup';

export function validationSchemaSignupForm() {
  return object().shape({
    firstName: string().typeError('Nome inválido.').required('Nome é obrigatório.'),
    lastName: string().typeError('Sobrenome inválido.').required('Sobrenome é obrigatório.'),
    email: string()
      .typeError('E-mail inválido.')
      .required('E-mail é obrigatório.')
      .email('E-mail inválido.'),
    password: string()
      .typeError('Senha inválida.')
      .required('Senha é obrigatório.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, caracteres especiais e número'
      )
      .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres.'),
    passwordConfirmation: string()
      .typeError('Confirmar senha inválida.')
      .required('Confirmar senha é obrigatório.')
      .oneOf([ref('password'), ''], 'A senha e a confirmação de senha não conferem')
  });
}

const inferedSchema = validationSchemaSignupForm();
export type SignupProps = InferType<typeof inferedSchema>;

export const defaultValuesSignupForm = {
  email: '',
  firstName: null,
  lastName: null,
  password: null,
  passwordConfirmation: null
};
