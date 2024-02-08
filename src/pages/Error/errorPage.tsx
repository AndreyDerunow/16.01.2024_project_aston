import React from 'react';
import { UNEXPECTED_ERROR } from '../../shared/constants/constants';

import { isRouteErrorResponse, useRouteError } from 'react-router';
export const ErrorPage = () => {
    const error = useRouteError();
    if (!isRouteErrorResponse(error)) {
        throw error;
    }
    return (
        <div className='w-12'>
            {error.data === 'string' ? error.data : UNEXPECTED_ERROR}
        </div>
    );
};
