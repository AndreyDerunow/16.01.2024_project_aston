import { themeContext } from '../../shared/api/themeContext';

import { useState } from 'react';
import React, { type PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = () => {
        setTheme(prev => {
            return prev === 'light' ? 'dark' : 'light';
        });
    };
    const value = { theme, toggleTheme };
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
};
