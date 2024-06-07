'use client';
import { Typography } from '@/components';
import { stores } from './StoresData';

const Stores: React.FC = () => {
  return (
    <div className="my-10 grid grid-cols-1 gap-8 sm:my-14 md:grid-cols-3">
      {stores.map((item, index) => {
        const { name, logradouro, zipcode } = item;
        return <StoreComponent key={index} name={name} logradouro={logradouro} zipcode={zipcode} />;
      })}
    </div>
  );
};

export default Stores;

interface StoreProps {
  name: string;
  logradouro: string;
  zipcode: string;
}

const StoreComponent: React.FC<StoreProps> = ({ name, logradouro, zipcode }) => {
  return (
    <div className="flex flex-col">
      <Typography variant="sm" className="font-sans font-bold md:dark:text-white">
        {name}
      </Typography>
      <Typography variant="xs" className="font-sans text-gray-500 md:dark:text-[#FFFFFF]">
        {logradouro}
      </Typography>
      <Typography variant="xs" className="font-sans text-gray-500 md:dark:text-[#FFFFFF]">
        {zipcode}
      </Typography>
    </div>
  );
};
