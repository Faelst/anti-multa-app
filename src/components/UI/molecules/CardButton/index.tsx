import { Button } from '@/components';
import { FC, MouseEventHandler } from 'react';
import { IconType } from 'react-icons/lib';

interface CardButtonProps {
  description: string;
  icon: IconType;
  onClick: MouseEventHandler<HTMLButtonElement> | undefined;
  active: boolean;
}

export const CardButton: FC<CardButtonProps> = ({ description, icon: Icon, onClick, active }) => {
  return (
    <div className="flex flex-row items-center">
      <Button
        onClick={onClick}
        className={`flex w-auto items-center justify-center border  ${active ? 'border-[#EC0000] bg-red-100 dark:bg-[#2d2b33]' : 'border-gray-300 bg-white dark:bg-[#18171e]'} 
          rounded-md p-2 text-black drop-shadow-sm hover:bg-gray-100
           dark:text-white dark:hover:bg-[#2d2b33] sm:w-56`}
        type="button"
      >
        <Icon className="mr-2 h-6 w-6" />
        {description}
      </Button>
    </div>
  );
};
