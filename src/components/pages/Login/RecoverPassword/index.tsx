'use client';
import React, { FC, useEffect, useState } from 'react';
import {
  validationSchemaRecoverPasswordForm,
  defaultValuesRecoverPasswordForm,
  Steps
} from './RecoverPasswordSchema';
import { FormProvider } from '@/context/formContext';
import { RecoverPasswordForm } from './RecoverPasswordForm';
import RecoverPasswordHeader from './RecoverPasswordHeader';
import { SendVerificationCodeForm } from './SendVerificationCodeForm';
import { useIdentity } from '@/context/identityContext';
import { FieldValues } from 'react-hook-form';
import { useSearchParams, useRouter } from 'next/navigation';

interface ForgotProps {}

const RecoverPasswordContainer: FC<ForgotProps> = () => {
  const { forgotPassword, resetPassword } = useIdentity();
  const router = useRouter();
  const searchParams = useSearchParams();
  const oobCode = searchParams.get('oobCode');
  const [currentStep, setCurrentStep] = useState<Steps>(Steps.SendVerificationCode);

  const handleStepChange = (step: Steps) => {
    setCurrentStep(step);
  };

  useEffect(() => {
    if (oobCode) {
      handleStepChange(Steps.RecoverPassword);
    }
  }, [oobCode]);

  const handleOnSubmit = async (values: FieldValues) => {
    if (currentStep === Steps.SendVerificationCode) {
      await forgotPassword(values.email);
    } else if (currentStep === Steps.RecoverPassword) {
      handleOnResetPassword(values);
    }
  };

  const handleOnResetPassword = async (values: FieldValues) => {
    const { newPassword } = values;
    const code = oobCode as string;
    await resetPassword(code, newPassword);
    await router.push('/');
  };

  const validationSchema = validationSchemaRecoverPasswordForm(currentStep);
  const defaultValues = defaultValuesRecoverPasswordForm;

  return (
    <div className="flex h-full items-center justify-center">
      <div className="w-full max-w-md space-y-5 rounded-lg bg-white p-6 shadow-lg md:dark:bg-[#15141b]">
        <RecoverPasswordHeader currentStep={currentStep} />
        <FormProvider
          validationSchema={validationSchema}
          defaultValues={defaultValues}
          onSubmit={handleOnSubmit}
        >
          <>
            {currentStep === Steps.SendVerificationCode && <SendVerificationCodeForm />}
            {currentStep === Steps.RecoverPassword && (
              <RecoverPasswordForm setCurrentStep={setCurrentStep} />
            )}
          </>
        </FormProvider>
      </div>
    </div>
  );
};

export default RecoverPasswordContainer;
