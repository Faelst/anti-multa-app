import { ZipCodeData } from './zipcode.types';

type ClearValueType = (field: string, value: string | null) => void;
type TypeZipCode = 'zipCode' | 'zipCodeAddress';

export const queryZipCode = (zipCode: string): Promise<ZipCodeData> =>
  fetch(`https://viacep.com.br/ws/${zipCode}/json/`).then((res) => res.json());

const clearAddressValues = (setFieldValue: ClearValueType) => {
  setFieldValue('addressName', null);
  setFieldValue('district', null);
  setFieldValue('city', null);
  setFieldValue('uf', null);
};

export const queryZipCodeAndFillForm = async (
  zipCode: string,
  setFieldValue: ClearValueType,
  typeZipCode?: TypeZipCode
) => {
  setFieldValue(typeZipCode ?? 'zipCode', zipCode);
  if (zipCode.length === 8) {
    queryZipCode(zipCode)
      .then((result) => {
        if (result.erro !== true) {
          setFieldValue('addressName', result.logradouro);
          setFieldValue('district', result.bairro);
          setFieldValue('city', result.localidade);
          setFieldValue('uf', result.uf);
        }
      })
      .catch(() => clearAddressValues(setFieldValue));
  } else {
    clearAddressValues(setFieldValue);
  }
};
