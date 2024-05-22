import { Modal } from '@/components';
import { FormProvider } from '@/context/formContext';
import React, { Dispatch, FC, SetStateAction } from 'react';
import SignInForm from './SignInForm';
import {
  DefaultValuesSignInForm,
  ValidationSchemaSignInForm,
  SignInProps
} from './SignInFormSchema';
import { useTheme } from 'next-themes';
import { useIdentity } from '@/context/identityContext';
import { Toaster } from 'sonner';

interface SingInProps {
  openModal: boolean;
  onCloseModal: () => void;
  setIsSignUpModal: Dispatch<SetStateAction<boolean>>;
}

const SignInContainer: FC<SingInProps> = ({ openModal, onCloseModal, setIsSignUpModal }) => {
  const { signIn } = useIdentity();
  const { theme } = useTheme();
  const logo = theme === 'dark' ? '/antimultasBrDark.png' : '/antimultasBr.png';

  const handleSignup = () => {
    onCloseModal();
    setIsSignUpModal(true);
  };

  const handleOnSubmit = async (values: SignInProps) => {
    const { email, password } = values;
    const resp = await signIn(email, password);
    if (resp.type === 'success') {
      onCloseModal();
    }
  };

  const validationSchema = ValidationSchemaSignInForm();
  const defaultValues = DefaultValuesSignInForm;

  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        hasLogo
        logo={logo}
        content={
          <FormProvider
            validationSchema={validationSchema}
            defaultValues={defaultValues}
            onSubmit={handleOnSubmit}
          >
            <SignInForm onSignup={handleSignup} onCloseModal={onCloseModal} />
          </FormProvider>
        }
      />
    </div>
  );
};

export default SignInContainer;
