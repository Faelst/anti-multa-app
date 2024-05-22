import { Button, Typography } from '@/components';
import { MaskedInput, TextFormField } from '@/components/FormField';
import { useFormContext } from '@/context/formContext';
import { phoneMask } from '@/utils';
import { FunctionComponent } from 'react';

export const ContactForm: FunctionComponent = () => {
  const { setValue } = useFormContext();

  return (
    <div className="rounded-md border border-gray-200 bg-white p-6 md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow-xl">
      <div className="-mx-3 flex flex-wrap">
        <div className="mb-2 w-full px-2 md:w-1/2">
          <TextFormField name="firstName" label="Nome" placeholder="Seu nome" required />
        </div>
        <div className="mb-2 w-full px-2 md:w-1/2">
          <TextFormField name="lastName" label="Sobrenome" placeholder="Seu sobrenome" required />
        </div>
      </div>
      <div className="-mx-3 flex flex-wrap">
        <div className="mb-2 w-full px-2 md:w-1/2">
          <TextFormField
            name="phoneNumber"
            label="Telefone Celular"
            placeholder="(xx) xxxxx-xxxx"
            required
            InputProps={{
              inputComponent: MaskedInput,
              inputProps: { mask: phoneMask }
            }}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const { value } = event.target;
              const phoneNumber = value
                .replace(/\D/g, '')
                .replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');

              setValue('phoneNumber', (event.target.value = phoneNumber));
            }}
          />
        </div>
        <div className="mb-2 w-full px-2 md:w-1/2">
          <TextFormField fullWidth name="email" label="E-mail" placeholder="Seu e-mail" required />
        </div>
      </div>
      <div className="-mx-1 mb-5 flex flex-wrap">
        <TextFormField
          required
          fullWidth
          name="message"
          label="Mensagem"
          placeholder="Digite sua mensagem..."
          multiline
          rows={2}
        />
      </div>

      <Button fullWidth className="my-1 rounded-full" type="submit">
        Solicitar contato
      </Button>

      <div className="container my-2 max-w-md">
        <Typography variant="xs" className="md:dark:text-[#FFFFFFB2]">
          Prometemos não utilizar suas informações de contato para enviar qualquer tipo de SPAM.
        </Typography>
      </div>
    </div>
  );
};
