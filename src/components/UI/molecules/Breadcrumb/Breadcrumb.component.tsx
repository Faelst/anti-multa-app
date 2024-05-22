'use client';
import React, { FunctionComponent } from 'react';
import { BreadcrumbProps } from '.';
import Link from 'next/link';
import { Breadcrumbs } from '@mui/material';
import { useTheme } from 'next-themes';

export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({ items }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <Breadcrumbs
      className="flex"
      aria-label="Breadcrumb"
      sx={{
        '& .MuiBreadcrumbs-separator': {
          color: isDarkMode ? '#FFFFFFB2' : '#666666'
        }
      }}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.link}
          className={`inline-flex items-center text-sm font-medium ${
            index === items.length - 1
              ? 'text-[#EC0000]'
              : 'text-slate-900 md:dark:text-[#FFFFFFB2]'
          } hover:text-[#EC0000] `}
        >
          {item.label}
        </Link>
      ))}
    </Breadcrumbs>
  );
};
