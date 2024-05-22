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

const QueryFormContainer = () => {
  const router = useRouter();
  const { setInfractionsData } = useInfractions();

  const mockData = [
    {
      infra:
        '111-50 - Transitar na faixa ou via exclusiva regulam. p transporte publico coleti-vo de passageiros',
      valorMulta: 'R$ 250,53',
      recursoSimples: 114,
      recursoEspecial: 229
    },
    {
      infra:
        '222-50 - Transitar na faixa ou via exclusiva regulam. p transporte publicon coleti-vo de passageiros',
      valorMulta: 'R$ 550,52',
      recursoSimples: 114,
      recursoEspecial: 229
    },
    {
      infra:
        '333-50 - Transitar na faixa ou via exclusiva regulam. p transporte publicon coleti-vo de passageiros',
      valorMulta: 'R$ 550,52',
      recursoSimples: 114,
      recursoEspecial: 229
    },
    {
      infra:
        '444-50 - Transitar na faixa ou via exclusiva regulam. p transporte publicon coleti-vo de passageiros',
      valorMulta: 'R$ 550,52',
      recursoSimples: 114,
      recursoEspecial: 229
    },
    {
      infra:
        '555-50 - Transitar na faixa ou via exclusiva regulam. p transporte publicon coleti-vo de passageiros',
      valorMulta: 'R$ 550,52',
      recursoSimples: 114,
      recursoEspecial: 229
    }
  ];

  const handleSubmit = async (value: QueryFormProps) => {
    console.log({ value });
    //const data = await fetchData(value);
    await setInfractionsData(mockData);
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
