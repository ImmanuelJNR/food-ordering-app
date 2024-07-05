// MenuContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import menuData from '../../public/menu.json'; // Import the JSON data
import { MenuData } from '../types/types';

interface MenuContextProps {
  menu: MenuData;
}

const MenuContext = createContext<MenuContextProps | undefined>(undefined);

export const MenuProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [menu] = useState<MenuData>(menuData);

  return (
    <MenuContext.Provider value={{ menu }}>
      {children}
    </MenuContext.Provider>
  );
};

export const useMenu = (): MenuContextProps => {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
};
