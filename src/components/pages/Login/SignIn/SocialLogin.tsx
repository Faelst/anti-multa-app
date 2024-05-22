import { Button } from '@/components';
import { CheckboxFormField } from '@/components/FormField/CheckboxFormField';
import { useIdentity } from '@/context/identityContext';
import Link from 'next/link';
import React, { FC } from 'react';
import { FaSquareFacebook } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

interface SocialLoginProps {
  onSignup: () => void;
  onCloseModal: () => void;
}

const SocialLogin: FC<SocialLoginProps> = ({ onSignup, onCloseModal }) => {
  const { signInFacebook, signInGoogle } = useIdentity();

  const handleOnSignInFacebook = async () => {
    await signInFacebook();
    await onCloseModal();
  };
  const handleOnSignInGoogle = async () => {
    await signInGoogle();
    await onCloseModal();
  };

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex flex-row items-center justify-between">
          <CheckboxFormField name="rememberMe" label="Lembrar senha" />
          <Link
            href="/recuperar-senha"
            onClick={onCloseModal}
            className="font-sans text-red-800 hover:underline md:dark:text-red-700"
          >
            Esqueceu a senha?
          </Link>
        </div>

        <Button fullWidth>Entrar</Button>

        <div className="flex items-center">
          <hr className="flex-grow border-t-2 border-gray-200 md:dark:border-gray-700" />
          <span className="mx-4 font-medium text-gray-600 md:dark:text-white">ou</span>
          <hr className="flex-grow border-t-2 border-gray-200 md:dark:border-gray-700" />
        </div>

        <div className="mx-auto">
          <Button
            variant="text"
            size="small"
            className="flex items-center justify-center font-sans font-medium text-black hover:text-gray-600"
            type="button"
            startIcon={<FcGoogle size={20} />}
            onClick={handleOnSignInGoogle}
          >
            Entrar com Google
          </Button>

          {/* <Button
            variant="text"
            className="flex items-center justify-center font-sans font-medium text-black hover:text-gray-600"
            type="button"
            size="small"
            startIcon={<FaSquareFacebook size={20} className="text-blue-700" />}
            onClick={handleOnSignInFacebook}
          >
            Entrar com Facebook
          </Button> */}
        </div>

        <div className="flex flex-row space-x-1 text-sm font-medium text-black md:dark:text-white">
          <span>Ainda não tem uma conta?</span>
          <Link
            href="#"
            onClick={onSignup}
            className="font-sans text-red-800 hover:underline md:dark:text-red-700"
          >
            Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
};

export default SocialLogin;
