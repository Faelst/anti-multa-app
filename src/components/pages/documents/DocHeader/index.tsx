import { Typography } from '@/components';
import React from 'react';

const DocumentsHeader: React.FC = () => {
  return (
    <Typography variant="h2" className="font-extrabold md:dark:text-white">
      Anexar <span className="text-[#EC0000]">Documentos</span>
    </Typography>
  );
};

export default DocumentsHeader;
