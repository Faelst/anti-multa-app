'use client';
import type { FunctionComponent } from 'react';
import type { DrawerProps } from './Drawer.interface';
import { Stack, Drawer as DrawerMUI } from '@mui/material';
import { CloseButton, DrawerContent, DrawerHeader } from './Drawer.styled';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { Typography } from '../../atoms';

export const Drawer: FunctionComponent<DrawerProps> = ({
  title,
  description,
  children,
  open,
  onClose,
  anchor,
  toggleDrawer
}) => {
  return (
    <DrawerMUI
      open={open}
      onClose={onClose}
      anchor={anchor}
      PaperProps={{
        sx: {
          width: toggleDrawer ? 500 : 612,
          maxWidth: '100%'
        }
      }}
    >
      <DrawerContent>
        <DrawerHeader>
          <Stack>
            <Typography variant="xxl" className="mb-1">
              {title}
            </Typography>
            {description && (
              <Typography variant="md" className="mb-5 font-normal text-gray-600">
                {description}
              </Typography>
            )}
          </Stack>
          <CloseButton onClick={onClose}>
            <IoIosCloseCircleOutline color="#000000" />
          </CloseButton>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </DrawerMUI>
  );
};
