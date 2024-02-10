import { AUTH_ERROR } from '../../shared/constants/constants';
import classNames from 'classnames';
import { isResult } from '../../entities/Joke/types/typeguards/jokes';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeFavorite } from '../../entities/User/utils/onChangeFavorite';
import { PartialDataJokeCard } from '../../features/jokeCard/partialDataJokeCard';
import { useNavigate } from 'react-router';
import { userAPI } from '../../entities/User/api/userApi';
import { useTheme } from '../../shared/hooks/useTheme';
import {
    findJokesByIdFunc,
    getJokesById
} from '../../entities/Joke/api/slices/findJokesByIdSlice';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store';

export const FavoritesList = () => {
    const {
        data: curUserData,
        isLoading,
        error
    } = userAPI.useGetCurrentUserQuery();
    const dispatch = useAppDispatch();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const { theme } = useTheme();

    const navigate = useNavigate();
    useEffect(() => {
        if (curUserData) {
            dispatch(findJokesByIdFunc(curUserData.favorites));
        }
    }, [curUserData, dispatch, curUserData?.favorites]);
    const favorites = useAppSelector(getJokesById());

    const containerClasses = classNames({
        'w-4/5 p-4 mx-auto rounded-md border-2 flex flex-wrap items-center justify-evenly gap-10':
            true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light'
    });
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{AUTH_ERROR}</div>;
    }
    if (favorites && favorites.length > 0) {
        return (
            <div className={containerClasses}>
                {favorites.map(el => {
                    if (curUserData && curUserData.favorites && isResult(el)) {
                        const isFavorite = curUserData.favorites.includes(
                            el.id
                        );
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
                    }
                })}
            </div>
        );
    }
    return <p>There is nothing here... :(</p>;
};
