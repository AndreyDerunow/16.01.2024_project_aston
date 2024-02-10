import { FavoriteButton } from '../../entities/Joke/components/favoriteButton';
import { jokesAPI } from '../../entities/Joke/api/services/jokesApi';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeFavorite } from '../../entities/User/utils/onChangeFavorite';
import React from 'react';
import { userAPI } from '../../entities/User/api/userApi';
import { useLocation, useNavigate } from 'react-router';

export const JokeCard = () => {
    const { state, pathname } = useLocation();
    const existsInLocationState = state !== null && state.id;
    const jokeId = existsInLocationState ? state.id : pathname.slice(6);
    const {
        data,
        error,
        isLoading: isJokeLoading
    } = jokesAPI.useGetJokeByIdQuery(jokeId, { skip: existsInLocationState });
    const { data: curUserData, isLoading } = userAPI.useGetCurrentUserQuery();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const navigate = useNavigate();
    const joke = existsInLocationState ? state : data;
    if (!joke || isLoading || isJokeLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>nothing found..:(</div>;
    }
    const { id, value, url } = joke;
    const isFavorite =
        (curUserData && curUserData.favorites.includes(jokeId)) || false;
    return (
        <div className='w-2/5 mx-auto'>
            <img
                src='https://api.chucknorris.io/img/chucknorris_logo_coloured_small@2x.png'
                alt='chuck'
            />
            <div className='m-2 p-2'>{value}</div>
            <a
                target='_blank'
                rel='noreferrer'
                href={url}
                className='hover:-rotate-2 block m-2 mb-6 p-2 break-words'
            >
                {url}
            </a>
            <FavoriteButton
                id={id}
                isFavorite={isFavorite}
                onClick={() =>
                    onChangeFavorite(id, onUpdateUser, curUserData, navigate)
                }
            />
        </div>
    );
};
