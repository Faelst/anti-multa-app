import { Button } from '@/components';
import { MaskedInput, TextFormField } from '@/components/FormField';
import { useFormContext } from '@/context/formContext';
import { vehiclePlateMask } from '@/utils';

const QueryForm = () => {
  const { setValue } = useFormContext();

  return (
    <div className="space-y-2 bg-white md:dark:bg-[#15141b]">
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
      <Button fullWidth className="my-2 rounded-full" type="submit">
        Consultar
      </Button>
    </div>
  );
};

export default QueryForm;
