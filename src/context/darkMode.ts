import { createContext, useContext } from 'react';
import { themeType } from '../interfaces';

interface ContextProps {
  theme: themeType;
  toggleTheme: () => void;
}

export const DarkMode = createContext({} as ContextProps);

export const useDarkMode = () => {
  return useContext(DarkMode);
};
