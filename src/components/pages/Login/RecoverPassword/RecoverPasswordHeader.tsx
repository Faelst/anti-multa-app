import { Typography } from '@/components';
import React, { FC } from 'react';
import { Steps } from './RecoverPasswordSchema';

interface RecoverPasswordHeaderProps {
  currentStep: Steps;
}
const RecoverPasswordHeader: FC<RecoverPasswordHeaderProps> = ({ currentStep }) => {
  const subtitle =
    currentStep === 0
      ? `Para recuperar sua senha, insira seu endereço de e-mail abaixo. Um código de verificação
  será enviado para o seu e-mail.`
      : `Para cadastrar uma nova senha, insira o código de verificação enviado para o seu e-mail e escolha uma nova senha.`;
  return (
    <div className="text-start">
      <Typography variant="h2" className="md:dark:text-white">
        Recuperar senha
      </Typography>
      <Typography variant="sm" color="text-[#666666] md:dark:text-[#FFFFFFB2]">
        {subtitle}
      </Typography>
    </div>
  );
};

export default RecoverPasswordHeader;
