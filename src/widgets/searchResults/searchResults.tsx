import classNames from 'classnames';
import { jokesAPI } from '../../entities/Joke/api/services/jokesApi';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeFavorite } from '../../entities/User/utils/onChangeFavorite';
import { PartialDataJokeCard } from '../../features/jokeCard/partialDataJokeCard';
import React from 'react';
import { type Result } from '../../entities/Joke/types/jokes';
import { UNEXPECTED_ERROR } from '../../shared/constants/constants';
import { useNavigate } from 'react-router';
import { userAPI } from '../../entities/User/api/userApi';
import { useSearchParams } from 'react-router-dom';
import { useTheme } from '../../shared/hooks/useTheme';

export const SearchResults = () => {
    const [params] = useSearchParams();
    const query = params.get('query') || '';
    const navigate = useNavigate();
    const { data, isLoading, error } = jokesAPI.useFindJokeQuery(query, {
        skip: !query
    });
    const { data: curUserData, isLoading: isCurUserLoading } =
        userAPI.useGetCurrentUserQuery();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const { theme } = useTheme();
    const containerClasses = classNames({
        'w-4/5 p-4 h-[60vh] scrollbar-none mx-auto overflow-y-scroll rounded-md border-2 flex flex-wrap items-center justify-between gap-10':
            true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light'
    });
    if (!query) {
        return <p>Please type search query</p>;
    }
    if (isLoading || isCurUserLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{UNEXPECTED_ERROR}</div>;
    }
    if (data && data.result.length > 0) {
        return (
            <div title='scroll to see more' className={containerClasses}>
                {data.result.map((el: Result) => {
                    const isFavorite =
                        (curUserData &&
                            curUserData.favorites &&
                            curUserData.favorites.includes(el.id)) ||
                        false;
                    return (
                        <PartialDataJokeCard
                            navigate={navigate}
                            key={el.id}
                            {...el}
                            isFavorite={isFavorite}
                            onClick={() =>
                                onChangeFavorite(
                                    el.id,
                                    onUpdateUser,
                                    curUserData,
                                    navigate
                                )
                            }
                        />
                    );
                })}
            </div>
        );
    }
    return <p>There is nothing here... :(</p>;
};
