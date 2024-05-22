'use client';
import React from 'react';
import { Breadcrumb } from '@/components';
import { usePathname } from 'next/navigation';

const BreadcrumbLayout = () => {
  const pathname = usePathname();

  // Function to convert the route's pathname into breadcrumb items
  const generateBreadcrumbItems = () => {
    const paths = pathname?.split('/').filter((path) => path !== '');

    let breadcrumbItems = [{ label: 'Home', link: '/' }];

    // Iterate over pathname parts to generate breadcrumb items
    let path = '';
    paths?.forEach((pathPart, _) => {
      path += `/${pathPart}`;
      breadcrumbItems.push({ label: pathPart, link: path });
    });

    return breadcrumbItems;
  };

  const breadcrumbItems = generateBreadcrumbItems();

  return (
    <div className="mb-6">
      <Breadcrumb items={breadcrumbItems} />
    </div>
  );
};

export default BreadcrumbLayout;
