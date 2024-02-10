import { AUTH_ERROR } from '../../shared/constants/constants';
import { Button } from '../../shared/components/button/button';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeSearchHistory } from '../../entities/User/utils/onChangeSearchHistory';
import { useNavigate } from 'react-router';
import { userAPI } from '../../entities/User/api/userApi';
import { useTheme } from '../../shared/hooks/useTheme';
import React, { memo, type MouseEvent } from 'react';

const UnmemoizedSearchHistory = () => {
    const {
        data: curUserData,
        isLoading,
        error
    } = userAPI.useGetCurrentUserQuery();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const { theme } = useTheme();
    const navigate = useNavigate();
    const handleDeleteQuery = (e: MouseEvent<HTMLButtonElement>): void => {
        e.stopPropagation();
        const query = (e.target as HTMLButtonElement).id;
        onChangeSearchHistory(query, onUpdateUser, curUserData, navigate);
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
                        <div
                            key={el}
                            className='flex items-center justify-between p-2 m-1 border-b-2 border-gray-100 text-ellipsis rounded-md whitespace-nowrap overflow-hidden cursor-pointer hover:whitespace-normal hover:bg-orange-400'
                        >
                            <Link
                                title='repeat search'
                                to={`/searchResults?query=${el}`}
                                key={el}
                            >
                                <div className='w-full'>{el}</div>
                            </Link>
                            <Button
                                id={el}
                                title='delete query'
                                text='Delete'
                                cb={e => {
                                    e.stopPropagation();
                                    handleDeleteQuery(e);
                                }}
                                disabled={false}
                            />
                        </div>
                    );
                })}
            </div>
        );
    }
    return <p>There is nothing here... :(</p>;
};
export const SearchHistory = memo(UnmemoizedSearchHistory);
