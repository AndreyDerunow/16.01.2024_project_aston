import { ErrorPage } from '../../pages/Error/errorPage';
import { Loader } from '../../shared/components/loader/loader';
import { Main } from '../../pages/Main/mainPage';
import { MainLayout } from '../Layout/mainLayout';
import { Navigate } from 'react-router';
import { RequireAuth } from '../hoc/requireAuth';
import {
    LazyFavoritesPage,
    LazyInfo,
    LazyJokeCard,
    LazyLoginPage,
    LazyRegisterPage,
    LazySearchHistoryPage,
    LazySearchResultsPage
} from '../../pages/LazyPagex';
import React, { Suspense } from 'react';

export const routes = [
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Main />
            },
            {
                path: 'favorites',
                element: (
                    <RequireAuth>
                        <Suspense fallback={<Loader />}>
                            <LazyFavoritesPage />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'info',
                element: (
                    <RequireAuth>
                        <Suspense fallback={<Loader />}>
                            <LazyInfo />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'login',
                element: (
                    <Suspense fallback={<Loader />}>
                        <LazyLoginPage />
                    </Suspense>
                )
            },
            {
                path: 'register',
                element: (
                    <Suspense fallback={<Loader />}>
                        <LazyRegisterPage />
                    </Suspense>
                )
            },
            {
                path: 'searchHistory',
                element: (
                    <RequireAuth>
                        <Suspense fallback={<Loader />}>
                            <LazySearchHistoryPage />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'searchResults',
                element: (
                    <Suspense fallback={<Loader />}>
                        <LazySearchResultsPage />
                    </Suspense>
                )
            },

            {
                path: 'joke/:jokeid',
                element: (
                    <Suspense fallback={<Loader />}>
                        <LazyJokeCard />
                    </Suspense>
                )
            },
            {
                path: '*',
                element: <Navigate to='/' replace />
            }
        ]
    }
];
