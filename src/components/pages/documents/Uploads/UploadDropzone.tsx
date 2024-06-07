import React, { useEffect } from 'react';
import UploadButton from './UploadButton';
import { useFormContext } from '@/context/formContext';

interface UploadDropzoneProps {
  setSendDocument: React.Dispatch<React.SetStateAction<boolean>>;
}

const UploadDropzone: React.FC<UploadDropzoneProps> = ({ setSendDocument }) => {
  const { setValue, watch } = useFormContext();
  const documentCNH = watch('documentCNH') ?? [];
  const documentNotification = watch('documentNotification') ?? [];
  const documentCRLV = watch('documentCRLV') ?? [];

  const handleCRLVUpload = (file: File) => {
    if (!file) return;

    const uploadCRLV = [{ file }];
    setValue('documentCRLV', uploadCRLV);
  };

  const handleCNHUpload = (file: File) => {
    if (!file) return;

    const uploadCNH = [{ file }];
    setValue('documentCNH', uploadCNH);
  };

  const handleNotificationUpload = (file: File) => {
    if (!file) return;

    const uploadNotification = [{ file }];
    setValue('documentNotification', uploadNotification);
  };

  useEffect(() => {
    if (documentCNH.length > 0 && documentNotification.length > 0 && documentCRLV.length > 0) {
      setSendDocument(false);
    } else {
      setSendDocument(true);
    }
  }, [documentCNH, documentNotification, documentCRLV, setSendDocument]);

  return (
    <>
      <UploadButton
        label="Clique aqui e faça o upload da sua CNH"
        onUpload={handleCNHUpload}
        typeOfDocument="CNH"
        hasUpload={!!documentCNH.length}
      />
      <UploadButton
        label="Clique aqui e faça o upload da sua Cópia da Notificação"
        onUpload={handleNotificationUpload}
        typeOfDocument="Notificação"
        hasUpload={!!documentNotification.length}
      />
      <UploadButton
        label="Clique aqui e faça o upload do seu CRLV"
        onUpload={handleCRLVUpload}
        typeOfDocument="CRLV"
        hasUpload={!!documentNotification.length}
      />
    </>
  );
};

export default UploadDropzone;
