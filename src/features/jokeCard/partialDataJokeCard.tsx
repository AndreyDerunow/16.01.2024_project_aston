import classNames from 'classnames';
import { type DataCardProps } from '../../shared/types/ui';

import { FavoriteButton } from '../../entities/Joke/components/favoriteButton';
import PropTypes from 'prop-types';
import React from 'react';

import { useTheme } from '../../shared/hooks/useTheme';

export const PartialDataJokeCard = ({
    id,
    value,
    url,
    categories,
    onClick,
    isFavorite,
    navigate
}: DataCardProps) => {
    const { theme } = useTheme();
    const handleShowAllIfo = () => {
        navigate(`/joke/${id}`, {
            state: { id, value, url }
        });
    };
    const containerClasses = classNames({
        'w-1/4 h-[315px] cursor-pointer flex flex-col border-2 rounded-md p-2 justify-evenly':
            true,
        'border-white': theme === 'dark',
        'border-black': theme === 'light'
    });
    return (
        <div
            title='show all info'
            onClick={() => handleShowAllIfo()}
            className={containerClasses}
        >
            <div className='m-2 p-2 text-ellipsis text-nowrap overflow-hidden'>
                Id: {id}
            </div>
            <div className='m-2 p-2'>
                {categories.length > 0 && (
                    <>
                        <p>Categories:</p>
                        {categories.map((el, index) => (
                            <p key={index}>{el}</p>
                        ))}
                    </>
                )}
            </div>
            <div className='m-2 p-2 text-ellipsis text-nowrap overflow-hidden'>
                Laugh here: {value}
            </div>
            <div
                title='check api'
                className='m-2 p-2 text-ellipsis text-nowrap overflow-hidden'
            >
                API reference: {url}
            </div>
            <FavoriteButton
                id={id}
                isFavorite={isFavorite}
                onClick={e => {
                    e.stopPropagation();
                    onClick(id);
                }}
            />
        </div>
    );
};

PartialDataJokeCard.propTypes = {
    id: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    url: PropTypes.string,
    categories: PropTypes.arrayOf(PropTypes.string).isRequired,
    onClick: PropTypes.func.isRequired,
    isFavorite: PropTypes.bool.isRequired,
    navigate: PropTypes.func.isRequired
};
