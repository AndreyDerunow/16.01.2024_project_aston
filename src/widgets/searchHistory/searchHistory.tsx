import { AUTH_ERROR } from '../../shared/constants/constants';
import Button from '../../shared/ui/button';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Loader } from '../../shared/ui/loader';
import { updateSearchHistory } from '../../entities/User/utils/updateSearchHistory';
import { useNavigate } from 'react-router';
import { userAPI } from '../../entities/User/api/userApi';
import { useTheme } from '../../shared/hooks/useTheme';
import React, { type MouseEvent } from 'react';

export const SearchHistory = () => {
    const {
        data: curUserData,
        isLoading,
        error
    } = userAPI.useGetCurrentUserQuery();
    const [updateUser] = userAPI.useUpdateUserMutation();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const handleDeleteQuery = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        const query = (e.target as HTMLButtonElement).id;
        updateSearchHistory(query, updateUser, curUserData, navigate);
    };
    const containerClasses = classNames({
        'w-4/5 mx-auto rounded-md border-2': true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light'
    });
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{AUTH_ERROR}</div>;
    }
    if (curUserData && curUserData?.searchHistory.length > 0) {
        return (
            <div className={containerClasses}>
                {curUserData?.searchHistory.map((el: string) => {
                    return (
                        <Link
                            title='repeat search'
                            to={'/searchResults'}
                            state={{ query: el }}
                            className='flex items-center justify-between p-2 m-1 border-b-2 border-gray-100 text-ellipsis rounded-md whitespace-nowrap overflow-hidden cursor-pointer hover:whitespace-normal hover:bg-orange-400'
                            key={el}
                        >
                            <div className='w-full'>{el}</div>
                            <Button
                                id={el}
                                title='delete query'
                                text='Delete'
                                cb={e => handleDeleteQuery(e)}
                                disabled={false}
                            />
                        </Link>
                    );
                })}
            </div>
        );
    }
    return <p>There is nothing here... :(</p>;
};
