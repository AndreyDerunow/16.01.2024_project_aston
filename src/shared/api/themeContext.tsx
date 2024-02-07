import { createContext } from 'react';
import { type ThemeContext } from '../types/ui';

export const themeContext = createContext<ThemeContext>({
    theme: 'light',
    toggleTheme: () => {}
});
