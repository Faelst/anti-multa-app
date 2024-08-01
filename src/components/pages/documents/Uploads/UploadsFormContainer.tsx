'use client';
import React from 'react';
import UploadDropzone from './UploadDropzone';
import UploadForm from './UploadsForm';
import { FormProvider } from '@/context/formContext';
import { UploadsProps, defaultValuesDocForm, validationSchemaDocForm } from './UploadsFormSchema';
import { Button } from '@/components/UI/atoms';
import { Grid } from '@mui/material';
import { UploadIcon } from '@/components/UI/Icons';
import { extractAndConvertFiles } from '@/utils';
import { useRouter } from 'next/navigation';
import api from '../../../../service/api';
import { useSolicitationsContext } from '../../../../context/solicitationContext';

interface UploadsFormData {}

const UploadsFormContainer: React.FC<UploadsFormData> = () => {
  const route = useRouter();
  const { solicitation } = useSolicitationsContext();
  const [sendDocument, setSendDocument] = React.useState(true);

  const handleOnSubmit = async (value: UploadsProps) => {
    const formData = new FormData();

    formData.append('documentNotification', value.documentNotification[0].file as File);
    formData.append('documentCNH', value.documentCNH[0].file as File);
    formData.append('documentCRLV', value.documentCRLV[0].file as File);

    try {
      await api.uploadDocuments(solicitation.solicitation.id, formData);

      route.push('/infracoes/pagamento/check-out');
    } catch (error) {
      console.log(error);
    }
  };

  const validationSchema = validationSchemaDocForm();
  const defaultValues = defaultValuesDocForm;

  return (
    <FormProvider
      validationSchema={validationSchema}
      defaultValues={defaultValues}
      onSubmit={handleOnSubmit}
    >
      <>
        <div className="flex flex-col space-y-7 rounded-md border border-gray-300 bg-white p-6 sm:p-8 md:dark:bg-[#15141b]">
          <UploadDropzone setSendDocument={setSendDocument} />
          <UploadForm />
        </div>
        <Grid item display="flex" justifyContent={'flex-end'}>
          <Button
            disabled={sendDocument}
            type="submit"
            className="mt-6 flex items-center justify-center"
            startIcon={<UploadIcon sx={{ mr: 1 }} />}
          >
            Enviar documentos
          </Button>
        </Grid>
      </>
    </FormProvider>
  );
};

export default UploadsFormContainer;
