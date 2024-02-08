import { FavoriteButton } from '../../entities/Joke/components/favoriteButton';
import { Loader } from '../../shared/components/loader/loader';
import { onChangeFavorite } from '../../entities/User/utils/onChangeFavorite';
import React from 'react';
import { userAPI } from '../../entities/User/api/userApi';
import { useLocation, useNavigate } from 'react-router';

export const JokeCard = () => {
    const { state } = useLocation();
    const { id, value, url } = state;
    const { data: curUserData, isLoading } = userAPI.useGetCurrentUserQuery();
    const [onUpdateUser] = userAPI.useUpdateUserMutation();
    const navigate = useNavigate();
    const isFavorite =
        (curUserData && curUserData.favorites.includes(id)) || false;

    if (isLoading) {
        return <Loader />;
    }
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
