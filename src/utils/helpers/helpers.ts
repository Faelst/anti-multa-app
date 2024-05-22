import { UploadsProps } from '@/components/pages/documents/Uploads/UploadsFormSchema';

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
