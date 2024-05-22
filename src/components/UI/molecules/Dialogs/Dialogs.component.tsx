import React, { FunctionComponent } from 'react';
import { DialogsProps } from './Dialogs.interface';
import { Button, Typography } from '../../atoms';

export const Dialogs: FunctionComponent<DialogsProps> = ({
  open,
  onClose,
  title,
  description,
  buttons,
  content
}) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={onClose}
          ></div>

          <div className="relative z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <div className="relative max-h-96 transform overflow-y-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-xl">
                <div
                  className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <Typography variant="xxl">{title}</Typography>
                      <div className="mt-2">
                        <Typography variant="sm">{description}</Typography>
                      </div>
                    </div>
                  </div>
                  <div className="my-4 flex justify-center">
                    <div>{content}</div>
                  </div>
                  <div className="flex justify-evenly px-4 py-3 sm:flex-row-reverse sm:justify-start sm:px-6">
                    {buttons.map((button, index) => {
                      return (
                        <Button key={index} {...button}>
                          {button.label}
                        </Button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
