import classNames from 'classnames';
import { Loader } from '../../shared/components/loader/loader';
import { type Result } from '../../entities/Joke/types/jokes';
import { type ReturnedDataProps } from '../../shared/types/ui';
import { UNEXPECTED_ERROR } from '../../shared/constants/constants';
import { useTheme } from '../../shared/hooks/useTheme';
import { Link, useLocation } from 'react-router-dom';
import React, { memo } from 'react';

const UnmemoizedReturnedData = ({
    query,
    error,
    data,
    isLoading
}: ReturnedDataProps) => {
    const { theme } = useTheme();
    const { state } = useLocation();
    const dataClasses = classNames({
        'bg-gray-50 text-black': theme === 'dark',
        'bg-black text-gray-50': theme === 'light',
        'p-2 m-1 border-b-2 border-gray-100 text-ellipsis rounded-md whitespace-nowrap overflow-hidden cursor-pointer hover:whitespace-normal hover:bg-orange-400':
            true
    });
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>{UNEXPECTED_ERROR}</div>;
    }
    if (query.length < 3 || (data && data.total === 0)) {
        return <div>Nothing found...</div>;
    }

    if (data && data.total && data.total > 0) {
        return (
            <>
                {data.result.map((el: Result) => (
                    <Link
                        key={el.id}
                        to={`/joke/${el.id}`}
                        state={{
                            ...state,
                            id: el.id,
                            value: el.value,
                            url: el.url
                        }}
                    >
                        <div className={dataClasses}>{el.value}</div>
                    </Link>
                ))}
            </>
        );
    }
};

export const ReturnedData = memo(UnmemoizedReturnedData);
