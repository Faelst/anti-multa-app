import { FormProvider } from '@/context/formContext';
import QueryForm from './QueryForm';
import {
  QueryFormProps,
  defaultValuesQueryForm,
  validationSchemaQueryForm
} from './validationSchema';
import TermOfUse from './TermOfUse';
import { useRouter } from 'next/navigation';
import { useInfractions } from '@/context/infracoesContext';
import api from '../../../../service/api';
import { useClient } from '../../../../context/clientContext';
import { serializeToListInfractions } from '../../../../utils';
import { useDialogContext } from '../../../../context/dialogContext';

const QueryFormContainer = () => {
  const router = useRouter();

  const { setInfractionsData } = useInfractions();
  const { setClient } = useClient();
  const { setOpenDialogHomeForm } = useDialogContext();

  const handleSubmit = async ({ chassi, vehiclePlate, cpf, name, phone }: QueryFormProps) => {
    setOpenDialogHomeForm(true);

    return;

    api
      .registerClient({
        cpf,
        name,
        phone
      })
      .catch((error) => {
        console.log(error);
      });

    setClient({
      cpf,
      name,
      phone
    });

    const { data } = await api.fetchTrafficInfractions({
      chassi,
      vehiclePlate
    });

    const trafficInfractions = serializeToListInfractions(data);

    await setInfractionsData(trafficInfractions);

    router.push('/infracoes');
  };

  const validationSchema = validationSchemaQueryForm();
  const defaultValues = defaultValuesQueryForm;

  return (
    <div className="space-y-3 rounded-md border border-gray-200 bg-white p-6 md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow-xl lg:w-11/12">
      <FormProvider
        validationSchema={validationSchema}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
      >
        <QueryForm />
      </FormProvider>
      <TermOfUse />
    </div>
  );
};

export default QueryFormContainer;
