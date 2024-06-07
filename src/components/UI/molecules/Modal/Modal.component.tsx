import React, { FunctionComponent } from 'react';
import { Button, Typography } from '../../atoms';
import { ModalProps } from './Modal.interface';
import { MdClose } from 'react-icons/md';

export const Modal: FunctionComponent<ModalProps> = ({
  open,
  onClose,
  title,
  content,
  buttons,
  description,
  hasLogo,
  logo,
  heigthContent = false
}) => {
  return (
    <>
      {open && (
        <div
          id="authentication-modal"
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden"
          aria-hidden="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClose}
          ></div>
          <div className={`relative w-full max-w-md p-4`}>
            <div className="relative rounded-lg bg-white shadow md:dark:bg-[#15141b]">
              <div className="flex items-center justify-between rounded-t border-b p-4 md:dark:border-b-gray-700 md:dark:bg-[#15141b]">
                <div>
                  {hasLogo && logo ? (
                    <div className="mx-auto sm:ml-[140px]">
                      <img
                        src={logo}
                        width={110}
                        height={110}
                        alt="Picture of the antimultasBrasil logo"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div>
                      <Typography variant="xl" className="md:dark:font-sans md:dark:text-white">
                        {title}
                      </Typography>
                      <Typography
                        variant="sm"
                        className="text-[#666666] md:dark:font-sans md:dark:text-[#FFFFFF]"
                      >
                        {description}
                      </Typography>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  className={`end-2.5 ms-auto inline-flex h-8 w-8 items-center justify-center
                   rounded-lg bg-transparent text-sm text-gray-400
                    hover:bg-gray-200 hover:text-gray-900
                    dark:text-gray-500 dark:hover:bg-[#15141b]
                    `}
                  onClick={onClose}
                >
                  <MdClose
                    size={25}
                    className="transition duration-300 ease-in-out dark:hover:scale-125 dark:hover:text-gray-300"
                  />
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="flex flex-col justify-center space-y-4 p-4 md:p-5 md:dark:rounded-b md:dark:bg-[#15141b]">
                <div className={`${heigthContent ? `h-[400px]` : 'h-auto'} overflow-y-auto`}>
                  {content}
                </div>
                {buttons && (
                  <div className="flex flex-row justify-center gap-5">
                    {buttons.map((props, index) => {
                      return (
                        <Button key={index} {...props}>
                          {props.label}
                        </Button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
