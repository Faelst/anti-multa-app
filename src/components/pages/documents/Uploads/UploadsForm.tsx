import React from 'react';
import { TextFormField } from '@/components/FormField';

interface UploadFormProps {}

const UploadForm: React.FC<UploadFormProps> = () => {
  return (
    <div>
      <div className="-mx-3 flex flex-wrap">
        <div className="w-full px-2">
          <TextFormField
            fullWidth
            name="observation"
            label="Deixe seu relato (Opcional)"
            placeholder="Digite seu relato..."
            multiline
            rows={2}
          />
        </div>
      </div>
    </div>
  );
};

export default UploadForm;
