import { FormProvider } from '@/context/formContext';
import { useRouter } from 'next/navigation';
import {
  defaultValuesQueryForm,
  QueryFormProps,
  validationSchemaQueryForm
} from './validationSchema';
import QueryForm from './QueryForm';
import { useClient } from '@/context/clientContext';
import api from '@/service/api';
import { useSolicitationsContext } from '../../../context/solicitationContext';

const QueryFormContainer = () => {
  const route = useRouter();
  const { client, setClient } = useClient();
  const { solicitation, setSolicitations } = useSolicitationsContext();

  const handleSubmit = async (data: QueryFormProps) => {
    try {
      console.log(solicitation);
      await api.updateCustomer(client.id, {
        rg: data.rg,
        email: data.email,
        expeditorRg: data.expeditorRg,
        occupation: data.occupation,
        cnhNumber: data.cnhNumber,
        cnhUf: data.cnhUf,
        civilState: data.civilState
      });

      await api.addAddress({
        street: data.street,
        number: data.number,
        neighborhood: data.neighborhood,
        city: data.city,
        state: data.uf,
        zipCode: data.cep,
        complement: data.complement,
        customerId: client.id
      });

      await api.updateSolicitation(solicitation.solicitation.id, {
        vehicleOwner: data.vehicleOwner
      });

      setSolicitations((prev: any) => ({
        ...prev,
        vehicleOwner: data.vehicleOwner
      }));

      setClient((prev: any) => ({
        ...prev,
        rg: data.rg,
        email: data.email,
        expeditorRg: data.expeditorRg,
        occupation: data.occupation,
        cnhNumber: data.cnhNumber,
        cnhUf: data.cnhUf,
        civilState: data.civilState,
        address: {
          street: data.street,
          number: data.number,
          neighborhood: data.neighborhood,
          city: data.city,
          state: data.uf,
          zipCode: data.cep,
          complement: data.complement
        }
      }));

      route.push('/infracoes/pagamento/documentos');
    } catch (error) {
      console.log(error);
    }
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
