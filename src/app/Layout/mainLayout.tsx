import classNames from 'classnames';
import { Header } from '../../widgets/header/header';
import { Outlet } from 'react-router';
import React from 'react';
import { Search } from '../../widgets/search/search';
import { useTheme } from '../../shared/hooks/useTheme';

export const MainLayout = () => {
    const { theme } = useTheme();
    const themeClasses = classNames({
        'w-1/2 mx-auto min-h-[100vh] p-6': true,
        'bg-gray-50 text-black': theme === 'light',
        'bg-black text-gray-50': theme === 'dark'
    });
    return (
        <div className={themeClasses}>
            <Header />
            <Search />
            <Outlet />
        </div>
    );
};
