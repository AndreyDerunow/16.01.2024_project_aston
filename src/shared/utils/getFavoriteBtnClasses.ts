import classNames from 'classnames';

export const getFavoriteBtnClasses = (isFavorite: boolean): string => {
    return classNames({
        'border-2 border-black rounded-md': true,
        'bg-red-600': isFavorite
    });
};
