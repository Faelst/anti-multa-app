import { string, object, InferType, ref } from 'yup';

export enum Steps {
  SendVerificationCode = 0,
  RecoverPassword = 1
}

let emailSchema = object().shape({
  email: string()
    .typeError('E-mail inválido.')
    .required('E-mail é obrigatório.')
    .email('E-mail inválido.')
});

let recoverPasswordSchema = object().shape({
  code: string().typeError('Código inválido.').notRequired(),
  newPassword: string()
    .typeError('Senha inválida.')
    .required('Nova Senha: Precisa ser preenchido.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'A senha deve conter pelo menos 8 caracteres, incluindo maiúsculas, minúsculas, caracteres especiais e números.'
    )
    .min(8, 'A senha é muito curta - deve ter no mínimo 8 caracteres.'),
  passwordConfirmation: string()
    .typeError('Confirmar senha inválida.')
    .required('Confirmar nova senha: Precisa ser preenchido.')
    .oneOf([ref('newPassword'), ''], 'A senha e a confirmação de senha não conferem')
});

export function validationSchemaRecoverPasswordForm(step: Steps) {
  var schema;
  if (step === Steps.SendVerificationCode) {
    schema = emailSchema;
  } else if (step === Steps.RecoverPassword) {
    schema = recoverPasswordSchema;
  }

  return schema;
}

// const inferedSchema = validationSchemaRecoverPasswordForm(Steps.SendVerificationCode);
// export type RecoverPasswordSchemaProps = InferType<typeof inferedSchema>;

export const defaultValuesRecoverPasswordForm = {
  email: null,
  code: null,
  newPassword: null,
  passwordConfirmation: null
};
