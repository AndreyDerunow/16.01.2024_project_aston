import { ErrorBoundary } from 'react-error-boundary';
import { ErrorFallBack } from '../pages/Error/ErrorFallback';
import React from 'react';
import { router } from './router/router';
import { RouterProvider } from 'react-router-dom';

import './App.css';

export const App = () => {
    return (
        <ErrorBoundary
            FallbackComponent={ErrorFallBack}
            onReset={() => router.navigate('/')}
        >
            <RouterProvider router={router} />
        </ErrorBoundary>
    );
};
