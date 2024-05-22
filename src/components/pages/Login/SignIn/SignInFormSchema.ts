import { string, object, InferType, boolean } from 'yup';

export function ValidationSchemaSignInForm() {
  return object().shape({
    email: string()
      .email('E-mail inválido')
      .required('Email: Precisa ser preenchido.')
      .test('email', 'Email inválido', (value) => {
        if (value) {
          const email = value as string;
          const emailRegex = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

          return emailRegex.test(email);
        }

        return false;
      }),
    password: string().typeError('Senha inválida.').required('Senha: Precisa ser preenchido.'),
    rememberMe: boolean()
  });
}

const inferedSchema = ValidationSchemaSignInForm();
export type SignInProps = InferType<typeof inferedSchema>;

export const DefaultValuesSignInForm = {
  email: '',
  password: '',
  rememberMe: false
};
