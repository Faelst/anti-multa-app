'use client';
import { Button } from '@/components';
import { TextFormField } from '@/components/FormField';
import { Grid, IconButton, InputAdornment, Stack } from '@mui/material';
import { useTheme } from 'next-themes';
import { FunctionComponent, useState } from 'react';
import { BiHide, BiShow } from 'react-icons/bi';

export const SignupForm: FunctionComponent = () => {
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const isDark = theme === 'dark';
  const color = isDark ? '#FFFFFFB2' : '';

  return (
    <Stack spacing={1}>
      <Grid container gap={1.6} pb={0.7}>
        <Grid xs={12} lg={5.7}>
          <TextFormField name="firstName" label="Nome" placeholder="Seu nome" required />
        </Grid>
        <Grid xs={12} lg={5.8}>
          <TextFormField
            name="lastName"
            label="Sobrenome"
            placeholder="Seu sobrenome"
            required
            fullWidth
          />
        </Grid>
      </Grid>

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
        fullWidth
        required
        placeholder="Digite sua senha"
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
        name="passwordConfirmation"
        fullWidth
        type={showPassword ? 'text' : 'password'}
        label="Confirmar senha"
        placeholder="Confirme sua senha"
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

      <Grid container justifyContent="center" pt={1}>
        <Button type="submit">Cadastre-se</Button>
      </Grid>
    </Stack>
  );
};
