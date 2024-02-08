import { AUTH_ERROR } from '../../shared/constants/constants';
import classNames from 'classnames';
import { Loader } from '../../shared/ui/loader';

import { PartialDataJokeCard } from '../../features/jokeCard/partialDataJokeCard';
import { type Result } from '../../entities/Joke/types/jokes';
import { updateFavorite } from '../../entities/User/utils/updateFavorite';
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
    const [updateUser] = userAPI.useUpdateUserMutation();
    const { theme } = useTheme();

    const navigate = useNavigate();
    useEffect(() => {
        if (curUserData && curUserData.favorites.length > 0) {
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
                {favorites.map((el: Result) => {
                    if (curUserData && curUserData.favorites) {
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
                                    updateFavorite(
                                        el.id,
                                        updateUser,
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
