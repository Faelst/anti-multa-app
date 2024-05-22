'use client';
import { FunctionComponent } from 'react';
import { ContactForm } from './ContactForm';
import { FormProvider } from '@/context/formContext';
import {
  validationSchemaContactForm,
  defaultValuesContactForm,
  ContactProps
} from './ContactSchema';

const ContactContainer: FunctionComponent = () => {
  const handleOnSubmit = (value: ContactProps) => {
    console.log({ value });
  };

  const validationSchema = validationSchemaContactForm();
  const defaultValues = defaultValuesContactForm;

  return (
    <FormProvider
      validationSchema={validationSchema}
      defaultValues={defaultValues}
      onSubmit={handleOnSubmit}
    >
      <ContactForm />
    </FormProvider>
  );
};

export default ContactContainer;
