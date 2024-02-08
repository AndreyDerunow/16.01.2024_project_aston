import classNames from 'classnames';
import { formatNavLinkTo } from '../utils/formatNavLinkTo';
import { LogOut } from '../../features/auth/components/logOut';
import { NavLink } from 'react-router-dom';
import React, { memo } from 'react';

const UnmemoizedNavLi = ({ text }: { text: string }) => {
    if (text === 'Logout') {
        return <LogOut />;
    }
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
export const NavLi = memo(UnmemoizedNavLi);
