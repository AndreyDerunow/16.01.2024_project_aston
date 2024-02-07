import { type NavigateFunction } from 'react-router';
import { updateArrAndReturnObj } from '../../../shared/utils/updateArrAndReturnObj';
import { type NormalizedUser, type UpdateUserObj } from '../types/user';

export const updateFavorite = (
    jokeId: string,
    updator: (arg: UpdateUserObj) => void,
    curUserData: NormalizedUser | undefined,
    navigate: NavigateFunction
): void => {
    if (curUserData && curUserData._id) {
        const { _id, favorites } = curUserData;
        const updatedFavorites = updateArrAndReturnObj(favorites, jokeId);
        updator({
            update: 'favorites',
            id: _id,
            value: updatedFavorites
        });
    } else {
        navigate('/register');
    }
};
