import { Button } from '../../shared/components/button/button';
import { Link } from 'react-router-dom';
import { Loader } from '../../shared/components/loader/loader';
import { NavLi } from '../../shared/components/navLi';
import React from 'react';
import { userAPI } from '../../entities/User/api/userApi';
import { useTheme } from '../../shared/hooks/useTheme';

export const NavBar = () => {
    const { toggleTheme } = useTheme();
    const { error, isLoading } = userAPI.useGetCurrentUserQuery();
    const navLinks = error
        ? ['Main', 'SearchResults', 'Login', 'Register']
        : [
              'Main',
              'Info',
              'Favorites',
              'SearchHistory',
              'SearchResults',
              'Logout'
          ];
    if (isLoading) {
        return <Loader />;
    }
    return (
        <div className='h-[10%] mb-6 list-none w-full flex justify-between gap-7'>
            <Link className='w-[10%]' to='/'>
                <img
                    src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
                    alt='chuck norris logo'
                />
            </Link>
            {navLinks.map(el => (
                <NavLi key={el} text={el} />
            ))}
            <Button
                text='toggle Theme'
                disabled={false}
                className='rounded-md bg-blue-400 cursor-pointer'
                cb={toggleTheme}
            />
        </div>
    );
};
