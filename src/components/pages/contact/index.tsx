'use client';
import { FunctionComponent } from 'react';
import ContactContainer from './ContactForm/ContactContainer';
import ContactHeader from './ContactHeader';
import { Typography } from '@/components';
import QuestionHeader from './Questions/QuestionsHeader';
import Question from './Questions/QuestionAccordion';

const ContactPage: FunctionComponent = () => {
  return (
    <section className="flex flex-col items-center justify-center lg:items-stretch">
      <Typography variant="h1" className="mb-8 text-center md:dark:text-white">
        Como podemos te ajudar ?
      </Typography>
      <div className="mb-10 grid grid-cols-1 gap-12 sm:gap-7 lg:mb-0 lg:grid-cols-2">
        <div className="sticky flex flex-col items-center space-y-2 overflow-y-auto lg:h-screen">
          <ContactHeader />
          <ContactContainer />
        </div>
        <div className="flex flex-col space-y-2 sm:max-w-[500px]">
          <div className="flex items-center justify-center">
            <QuestionHeader />
          </div>
          <Question />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
