import { UploadsProps } from '@/components/pages/documents/Uploads/UploadsFormSchema';
import infractionsTable from '../../../public/data/infractions-table.json';
import moment from 'moment';

export const serializeToListInfractions = (data: any) => {
  const infractions = data.data[0].multas
    .filter((multa: any) => moment(multa.data_defesa, 'DD/MM/YYYY').isAfter(moment()))
    .map((multa: any) => {
      const infractions = infractionsTable.find((item) => item.codDETRAN === multa.codigo);

      return {
        infra: `${multa.codigo} - ${multa.descricao}`,
        valorMulta: multa.normalizado_valor,
        recursoSimples: infractions?.rec_simples || 0,
        recursoEspecial: infractions?.rec_especial || 0,
        dataDaInfracao: `${multa.data} ${multa.hora}`
      };
    });

  const fines = data.data[0].autuacoes
    .filter((autuacoe: any) => moment(autuacoe.data_defesa, 'DD/MM/YYYY').isAfter(moment()))
    .map((autuacao: any) => {
      const infraction = infractionsTable.find((item) => item.codDETRAN === autuacao.codigo);

      return {
        infra: `${autuacao.codigo} - ${autuacao.descricao}`,
        valorMulta: Number(infraction?.valor || 0),
        recursoSimples: infraction?.rec_simples || 0,
        recursoEspecial: infraction?.rec_especial || 0,
        dataDaInfracao: `${autuacao.data} ${autuacao.hora}`
      };
    });

  return [...infractions, ...fines];
};

export const truncateText = (text: string, maxLength = 50) => {
  return text?.length > maxLength ? `${text.substring(0, maxLength)}...` : text;
};

export function getObjectPropertyValue(path: string, obj: Record<string, any>): any {
  const properties = path.split('.');
  return properties.reduce((previousValue, currentValue) => {
    if (previousValue && typeof previousValue === 'object') {
      return previousValue[currentValue];
    }
    return undefined;
  }, obj);
}

export function extractAndConvertFiles(data: UploadsProps) {
  const allFiles: File[] = [];

  data?.documentNotification!?.forEach((item) => {
    const file = item.file as File;
    allFiles.push(file);
  });

  data?.documentCNH!?.forEach((item) => {
    const file = item.file as File;
    allFiles.push(file);
  });

  const convertBase64 = (file: File) => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });
  };

  const fileConversions = allFiles.map((file) => convertBase64(file));
  return Promise.all(fileConversions);
}
