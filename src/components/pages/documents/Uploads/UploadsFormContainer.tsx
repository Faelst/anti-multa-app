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

interface UploadsFormData {}

const UploadsFormContainer: React.FC<UploadsFormData> = () => {
  const [sendDocument, setSendDocument] = React.useState(true);

  const handleOnSubmit = async (value: UploadsProps) => {
    const base64Files = await extractAndConvertFiles(value);
    console.log('onsubmit', value);
    debugger;
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
