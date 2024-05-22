import type { MenuItemProps } from './MenuItem.interface';
import React, { FunctionComponent } from 'react';
import clsx from 'clsx';
import { CustomMenuItem } from './MenuItem.styled';

export const MenuItemMUI: FunctionComponent<MenuItemProps> = (props, ref) => {
  const { children, size, className, ...menuItemProps } = props;
  return (
    <CustomMenuItem ref={ref} {...menuItemProps} className={clsx(size, className)}>
      {children}
    </CustomMenuItem>
  );
};
