import { Typography } from '@/components';
import React from 'react';

const ContactHeader: React.FC = () => {
  return (
    <div>
      <Typography variant="h2" className="font-extrabold md:dark:text-white">
        Fale <span className="text-[#EC0000]">Conosco!</span>
      </Typography>
    </div>
  );
};

export default ContactHeader;
