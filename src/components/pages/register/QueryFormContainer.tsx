import { FormProvider } from '@/context/formContext';
import {
  defaultValuesQueryForm,
  QueryFormProps,
  validationSchemaQueryForm
} from './validationSchema';
import QueryForm from './QueryForm';
import { useClient } from '../../../context/clientContext';
import { useRouter } from 'next/navigation';

const QueryFormContainer = () => {
  const route = useRouter();
  const { client } = useClient();

  const handleSubmit = (data: QueryFormProps) => {
    console.log(client);
    console.log(data);
    route.push('/infracoes/pagamento/documentos');
  };

  const validationSchema = validationSchemaQueryForm();

  const defaultValues = defaultValuesQueryForm;

  return (
    <div className="mt-5 space-y-8 p-5 md:dark:border-none md:dark:bg-[#15141b] md:dark:shadow-xl">
      <FormProvider
        validationSchema={validationSchema}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
      >
        <QueryForm />
      </FormProvider>
    </div>
  );
};

export default QueryFormContainer;
