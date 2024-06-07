import { Modal, Typography } from '@/components';
import React, { useState } from 'react';
import { termOfUseText } from './TermOfUse';
import { privacyPolicyText } from './PrivacyPolicy';

type IAction = 'termOfUse' | 'privacyPolicy' | undefined;

function TermOfUse() {
  const [openModal, setOpenModal] = useState<IAction>();

  const handleOnTermOfUso = () => {
    setOpenModal('termOfUse');
  };

  const handleOnPolitic = () => {
    setOpenModal('privacyPolicy');
  };

  const title = openModal === 'termOfUse' ? 'Termos de Uso' : 'Política de Privacidade';
  const open = openModal === 'termOfUse' || openModal === 'privacyPolicy';
  const onClose = () => setOpenModal(undefined);
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        title={title}
        content={openModal === 'termOfUse' ? termOfUseText : privacyPolicyText}
        heigthContent
        buttons={[
          {
            label: 'Fechar',
            onClick: onClose,
            variant: 'outlined',
            className: `
            flex items-center 
            justify-center 
            h-10 
            text-sm 
            text-gray-700 
            md:dark:text-[#FFFFFF]
            border 
            border-gray-300 
            rounded-lg 
            md:dark:bg-[#18171e]
            hover:bg-gray-100 my-5
            `
          }
        ]}
      />
      <Typography variant="xs" color="text-[#666666] md:dark:text-[#FFFFFF]">
        Ao prosseguir, você concorda com nossos{' '}
        <button className="text-red-700 hover:underline" onClick={handleOnTermOfUso}>
          termos de uso
        </button>{' '}
        e a&nbsp;
        <button className="text-red-700 hover:underline" onClick={handleOnPolitic}>
          política de privacidade.
        </button>
      </Typography>
    </div>
  );
}

export default TermOfUse;
