import Button from '../../../shared/ui/button';
import { getFavoriteBtnClasses } from '../../../shared/utils/getFavoriteBtnClasses';
import React, { type MouseEvent } from 'react';

export const FavoriteButton = ({
    id,
    isFavorite,
    onClick
}: {
    id: string,
    isFavorite: boolean,
    onClick: (e: MouseEvent<HTMLButtonElement>) => void
}) => {
    return (
        <Button
            title='add to favorite'
            text='favorite!'
            classes={getFavoriteBtnClasses(isFavorite)}
            id={id}
            disabled={false}
            cb={e => onClick(e)}
        />
    );
};
