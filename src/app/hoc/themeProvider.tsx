import { themeContext } from '../../shared/api/themeContext';
import React, { type PropsWithChildren } from 'react';
import { useCallback, useMemo, useState } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const toggleTheme = useCallback(() => {
        setTheme(prev => {
            return prev === 'light' ? 'dark' : 'light';
        });
    }, []);
    const value = useMemo(
        () => ({
            theme,
            toggleTheme
        }),
        [theme, toggleTheme]
    );
    return (
        <themeContext.Provider value={value}>{children}</themeContext.Provider>
    );
};
