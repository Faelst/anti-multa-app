import { TextFormField } from '@/components/FormField';
import { IconButton, InputAdornment } from '@mui/material';
import React, { FC, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';
import SocialLogin from './SocialLogin';
import { useTheme } from 'next-themes';

interface SingInFormProps {
  onSignup: () => void;
  onCloseModal: () => void;
}

const SignInForm: FC<SingInFormProps> = ({ onSignup, onCloseModal }) => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const isDark = theme === 'dark';
  const color = isDark ? '#FFFFFFB2' : '';

  return (
    <div className="space-y-2">
      <TextFormField
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        fullWidth
        required
      />
      <TextFormField
        name="password"
        type={showPassword ? 'text' : 'password'}
        label="Senha"
        placeholder="Digite sua senha"
        fullWidth
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
      <SocialLogin onSignup={onSignup} onCloseModal={onCloseModal} />
    </div>
  );
};

export default SignInForm;
