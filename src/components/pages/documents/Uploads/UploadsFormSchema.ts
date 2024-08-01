import { object, InferType, mixed, string, array } from 'yup';

const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB in bytes
const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png', 'application/pdf'];

function createFieldSchema() {
  return object().shape({
    file: mixed()
      .required('O arquivo é obrigatório')
      .test(
        'fileSize',
        'O arquivo é muito grande',
        (value: any) => value && value?.size <= MAX_FILE_SIZE
      )
      .test(
        'fileFormat',
        'Formato de arquivo não suportado',
        (value: any) => value && SUPPORTED_FORMATS.includes(value.type)
      )
  });
}

export function validationSchemaDocForm() {
  return object().shape({
    documentNotification: array().of(createFieldSchema()),
    documentCNH: array().of(createFieldSchema()),
    observation: string().nullable(),
    documentCRLV: array().of(createFieldSchema())
  });
}

const inferedSchema = validationSchemaDocForm();

export type UploadsProps = InferType<typeof inferedSchema>;

export const defaultValuesDocForm = {
  documentNotification: [],
  documentCNH: [],
  documentCRLV: [],
  observation: null
};
