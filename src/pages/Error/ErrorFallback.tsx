import { isErrorObj } from '../../shared/types/typeguards/error';

import React from 'react';
import { UNEXPECTED_ERROR } from '../../shared/constants/constants';

import { useErrorBoundary } from 'react-error-boundary';

export const ErrorFallBack = ({ error }: Record<string, unknown>) => {
    const { resetBoundary } = useErrorBoundary();
    return (
        <div>
            <p>{isErrorObj(error) ? error.message : UNEXPECTED_ERROR}</p>
            <button onClick={resetBoundary}>Try again</button>
        </div>
    );
};
