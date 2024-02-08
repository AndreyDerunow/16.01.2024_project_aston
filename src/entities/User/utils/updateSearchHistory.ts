import { type NavigateFunction } from 'react-router';
import { updateArrAndReturnObj } from '../../../shared/utils/updateArrAndReturnObj';
import { type NormalizedUser, type UpdateUserObj } from '../types/user';

export const updateSearchHistory = (
    query: string,
    updator: (arg: UpdateUserObj) => void,
    curUserData: NormalizedUser | undefined,
    navigate: NavigateFunction,
    navigateWithoutAuth: boolean = true
): void => {
    if (curUserData && curUserData._id) {
        const { _id, searchHistory } = curUserData;
        const updatedSearchHistory = updateArrAndReturnObj(
            searchHistory,
            query
        );
        updator({
            update: 'searchHistory',
            id: _id,
            value: updatedSearchHistory
        });
    } else {
        if (navigateWithoutAuth) {
            navigate('/register');
        }
    }
};
