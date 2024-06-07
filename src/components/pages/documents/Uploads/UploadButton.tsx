import { Typography } from '@/components/UI/atoms';
import { Paper, Button } from '@mui/material';
import { FiCheckCircle } from 'react-icons/fi';
import { toast } from 'sonner';

interface UploadProps {
  label: string;
  onUpload: (file: File) => void;
  typeOfDocument: 'CNH' | 'Notificação' | 'CRLV';
  hasUpload: boolean;
}

const UploadButton: React.FC<UploadProps> = ({ label, onUpload, typeOfDocument, hasUpload }) => {
  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.item(0);
    if (file) {
      onUpload(file);
      toast.success(`Upload do arquivo (${file.name}) realizado com sucesso!`);
    }
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => event.preventDefault();

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      const file = files[0];
      onUpload(file);
    }
  };

  const statusText = !hasUpload
    ? `${typeOfDocument}: não informado`
    : `${typeOfDocument}: informado`;

  return (
    <>
      <div className="flex items-center space-x-2">
        <p className="text-gray-600 dark:text-gray-400">{statusText}</p>
        {hasUpload && <FiCheckCircle className="h-5 w-5 text-green-500 dark:text-green-400" />}
      </div>
      <Paper sx={baseStyle} onDragOver={handleDragOver} onDrop={handleDrop}>
        {/*@ts-ignore */}
        <Button
          component="label"
          variant="text"
          size="large"
          fullWidth
          name="btn-dropzone-input"
          className="bg-transparent hover:bg-transparent hover:text-[#EC0000]"
        >
          <Typography variant="sm">{label}</Typography>
          <input
            name="dropzone-input"
            hidden
            type="file"
            accept=".pdf,.jpg,.png,.jpeg"
            onChange={handleUpload}
          />
        </Button>
      </Paper>
    </>
  );
};

export default UploadButton;

export const baseStyle = {
  cursor: 'pointer',
  display: 'block',
  padding: '20px',
  marginTop: 2,
  border: '1px dashed #EC0000',
  '&:hover': { border: '1px solid #ccc' },
  boxShadow: '0px 8px 32px rgba(186, 191, 208, 0.1)',
  borderRadius: '8px',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};
