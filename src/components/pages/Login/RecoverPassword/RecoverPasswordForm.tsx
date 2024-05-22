import { Button } from '@/components';
import { TextFormField } from '@/components/FormField';
import { IconButton, InputAdornment } from '@mui/material';
import { FunctionComponent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import { Steps } from './RecoverPasswordSchema';
import { BsArrowLeftCircle } from 'react-icons/bs';
import { useTheme } from 'next-themes';

interface RecoverPasswordProps {
  setCurrentStep: React.Dispatch<React.SetStateAction<Steps>>;
}
export const RecoverPasswordForm: FunctionComponent<RecoverPasswordProps> = ({
  setCurrentStep
}) => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const isDark = theme === 'dark';
  const color = isDark ? '#FFFFFFB2' : '';

  const handleGoBack = () => setCurrentStep(0);
  return (
    <div className="space-y-2">
      {/* <TextFormField
        key="code"
        name="code"
        type="text"
        label="Código de confirmação"
        fullWidth
        required
        placeholder="Digite o código de confirmação"
      /> */}
      <TextFormField
        key="newPassword"
        name="newPassword"
        type={showPassword ? 'text' : 'password'}
        label="Nova senha"
        fullWidth
        placeholder="Digite sua nova senha"
        required
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiShow color={color} /> : <BiHide color={color} />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <TextFormField
        key="passwordConfirmation"
        name="passwordConfirmation"
        type={showPassword ? 'text' : 'password'}
        label="Confirmar nova senha"
        fullWidth
        required
        placeholder="Confirme sua nova senha"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <BiShow color={color} /> : <BiHide color={color} />}
              </IconButton>
            </InputAdornment>
          )
        }}
      />
      <Button type="submit" fullWidth>
        Salvar
      </Button>

      <Button
        variant="text"
        className="flex items-center justify-center px-0 font-sans text-sm font-medium text-red-900 hover:text-red-800"
        startIcon={<BsArrowLeftCircle size={17} />}
        onClick={handleGoBack}
      >
        Voltar
      </Button>
    </div>
  );
};
