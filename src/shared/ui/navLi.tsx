import classNames from 'classnames';

import { LogOut } from '../../features/auth/components/logOut';
import { NavLink } from 'react-router-dom';
import React from 'react';
export const NavLi = ({ text }: { text: string }) => {
    if (text === 'Logout') {
        return <LogOut />;
    }
    const formatNavLinkTo = (text: string): string => {
        if (text === 'Main') {
            return '/';
        }
        return text[0].toLowerCase().concat(text.slice(1)).replace(/\s/gm, '');
    };

    return (
        <li className=' hover:-rotate-2 flex items-center justify-center mx-2'>
            <NavLink
                className={({ isActive }) =>
                    classNames({
                        'text-center mx-auto p-2 rounded-md': true,
                        'bg-blue-600': isActive
                    })
                }
                to={formatNavLinkTo(text)}
            >
                {text}
            </NavLink>
        </li>
    );
};
