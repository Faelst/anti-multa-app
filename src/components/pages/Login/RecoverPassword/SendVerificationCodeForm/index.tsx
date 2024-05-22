import { Button } from '@/components';
import { TextFormField } from '@/components/FormField';
import { FunctionComponent } from 'react';

export const SendVerificationCodeForm: FunctionComponent = () => {
  return (
    <div className="space-y-2">
      <TextFormField
        name="email"
        label="E-mail"
        placeholder="Digite seu e-mail"
        fullWidth
        required
      />
      <Button type="submit" fullWidth>
        Enviar
      </Button>
    </div>
  );
};
