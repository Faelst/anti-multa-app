import { Button } from '@/components';
import { MaskedInput, TextFormField } from '@/components/FormField';
import { useFormContext } from '@/context/formContext';
import { cpfMask, phoneMask, vehiclePlateMask } from '@/utils';

const QueryForm = () => {
  const { setValue, isSubmitting, setIsSubmitting } = useFormContext();

  const loading = () => {
    return (
      <div className="flex justify-center">
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      </div>
    );
  };

  return (
    <div className="space-y-2 bg-white md:dark:bg-[#15141b]">
      <TextFormField
        name="name"
        label="Nome do solicitante"
        placeholder="Ex: João da Silva"
        required
        InputProps={{ inputProps: { maxLength: 100 } }}
        onChange={({ target }) => {
          const value = target?.value ?? '';
          setValue('name', value);
        }}
      />
      <TextFormField
        name="cpf"
        label="CPF do solicitante"
        placeholder="Ex: 000.000.000-00"
        required
        InputProps={{
          inputComponent: MaskedInput,
          inputProps: { mask: cpfMask }
        }}
        onChange={({ target }) => {
          const value = target?.value ?? '';
          setValue('cpf', value);
        }}
      />
      <TextFormField
        name="phone"
        label="Telefone do solicitante"
        placeholder="Ex: (00) 00000-0000"
        required
        InputProps={{
          inputComponent: MaskedInput,
          inputProps: { mask: phoneMask }
        }}
        onChange={({ target }) => {
          const value = target?.value ?? '';
          setValue('phone', value);
        }}
      />
      <TextFormField
        name="vehiclePlate"
        label="Placa do veículo"
        placeholder="Ex: AAA-0000"
        required
        InputProps={{
          inputComponent: MaskedInput,
          inputProps: { mask: vehiclePlateMask }
        }}
        onChange={({ target }) => {
          const value = target?.value?.toUpperCase() ?? '';
          setValue('vehiclePlate', value);
        }}
      />
      <TextFormField name="chassi" label="Chassi" placeholder="Ex: 9B1234567C8901234" required />
      <Button
        fullWidth
        className="my-2 rounded-full"
        type="submit"
        onClick={() => {
          setIsSubmitting(true);
        }}
      >
        {isSubmitting ? loading() : 'Consultar'}
      </Button>
    </div>
  );
};

export default QueryForm;
