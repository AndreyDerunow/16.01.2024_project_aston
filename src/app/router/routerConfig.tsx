import { ErrorPage } from '../../pages/Error/errorPage';
import { lazily } from 'react-lazily';
import { Loader } from '../../shared/ui/loader';
import { Main } from '../../pages/Main/mainPage';
import { MainLayout } from '../Layout/mainLayout';
import { Navigate } from 'react-router';
import { RequireAuth } from '../hoc/requireAuth';
import React, { Suspense } from 'react';

const { Info } = lazily(() => import('../../pages/Info/infoPage'));
const { LoginPage } = lazily(() => import('../../pages/Login/loginPage'));
const { JokeCard } = lazily(() => import('../../features/jokeCard/jokeCard'));
const { FavoritesPage } = lazily(
    () => import('../../pages/Favorites/favoritesPage')
);
const { RegisterPage } = lazily(
    () => import('../../pages/Register/registerPage')
);
const { SearchHistoryPage } = lazily(
    () => import('../../pages/SerachHistory/searchHistoryPage')
);
const { SearchResultsPage } = lazily(
    () => import('../../pages/SearchResults/searchResultsPage')
);

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
                            <FavoritesPage />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'info',
                element: (
                    <RequireAuth>
                        <Suspense fallback={<Loader />}>
                            <Info />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'login',
                element: (
                    <Suspense fallback={<Loader />}>
                        <LoginPage />
                    </Suspense>
                )
            },
            {
                path: 'register',
                element: (
                    <Suspense fallback={<Loader />}>
                        <RegisterPage />
                    </Suspense>
                )
            },
            {
                path: 'searchHistory',
                element: (
                    <RequireAuth>
                        <Suspense fallback={<Loader />}>
                            <SearchHistoryPage />
                        </Suspense>
                    </RequireAuth>
                )
            },
            {
                path: 'searchResults',
                element: (
                    <Suspense fallback={<Loader />}>
                        <SearchResultsPage />
                    </Suspense>
                )
            },

            {
                path: 'joke/:jokeid',
                element: (
                    <Suspense fallback={<Loader />}>
                        <JokeCard />
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
