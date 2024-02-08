import { AUTH_ERROR } from '../../shared/constants/constants';
import classNames from 'classnames';
import { Loader } from '../../shared/ui/loader';
import React from 'react';
import { userAPI } from '../../entities/User/api/userApi';
import { useTheme } from '../../shared/hooks/useTheme';

export const Info = () => {
    const { data, isLoading, error } = userAPI.useGetCurrentUserQuery();
    const { theme } = useTheme();

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{AUTH_ERROR}</div>;
    }

    const containerClasses = classNames({
        'mx-auto w-1/2 rounded-md border-2': true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light'
    });
    return (
        <div className={containerClasses}>
            <div className='m-2 p-2'>User id: {data?._id}</div>
            <div className='m-2 p-2'>Email: {data?.email}</div>
            <img src={data?.image} />
            <div className='m-2 p-2'>Sex: {data?.sex}</div>
        </div>
    );
};
