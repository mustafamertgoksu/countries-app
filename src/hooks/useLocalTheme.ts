import { useEffect, useState } from 'react';
import { themeType } from '../interfaces';

export const useLocalTheme = () => {
  const [theme, setTheme] = useState<themeType>('light');

  const toggleTheme = () => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', changeTheme);
    setTheme(changeTheme);
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    localTheme && setTheme(localTheme as themeType);
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
