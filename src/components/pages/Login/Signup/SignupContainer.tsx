import { Modal } from '@/components';
import { FormProvider } from '@/context/formContext';
import React, { FC } from 'react';
import {
  SignupProps,
  defaultValuesSignupForm,
  validationSchemaSignupForm
} from './SignupFormSchema';
import { SignupForm } from './SignupForm';
import { useIdentity } from '@/context/identityContext';
import { Toaster } from 'sonner';

interface SingInProps {
  openModal: boolean;
  onCloseModal: () => void;
}

const SignupContainer: FC<SingInProps> = ({ openModal, onCloseModal }) => {
  const { registerUser } = useIdentity();

  const handleOnSubmit = async (values: SignupProps) => {
    const { email, password, firstName, lastName } = values;
    const name = `${firstName} ${lastName}`;
    const resp = await registerUser(email, password, name);
    if (resp.type === 'success') {
      onCloseModal();
    }
  };

  const validationSchema = validationSchemaSignupForm();
  const defaultValues = defaultValuesSignupForm;

  return (
    <div>
      <Modal
        open={openModal}
        onClose={onCloseModal}
        title="Cadastre-se"
        description="É rápido e fácil."
        content={
          <FormProvider
            validationSchema={validationSchema}
            defaultValues={defaultValues}
            onSubmit={handleOnSubmit}
          >
            <SignupForm />
          </FormProvider>
        }
      />
    </div>
  );
};

export default SignupContainer;
