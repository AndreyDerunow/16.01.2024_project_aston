import { BASE_AUTH_FIREBASE_URL } from '../../../../shared/constants/constants';
import { localStorageAPI } from '../../../../shared/api/store/services/localStorageApi';
import { router } from '../../../../app/router/router';

import {
    type AuthData,
    type AuthResponse
} from '../../../../entities/auth/types/auth';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = BASE_AUTH_FIREBASE_URL;

export const authAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'authAPI',
    tagTypes: ['auth'],
    endpoints: builder => ({
        signIn: builder.mutation<AuthResponse, AuthData>({
            query: authData => ({
                url: baseUrl + 'signInWithPassword',
                method: 'POST',
                body: authData,
                params: {
                    key: import.meta.env.VITE_FIREBASE_API_KEY
                }
            })
        }),
        signUp: builder.mutation<AuthResponse, AuthData>({
            query: authData => ({
                url: baseUrl + 'signUp',
                method: 'POST',
                body: authData,
                params: {
                    key: import.meta.env.VITE_FIREBASE_API_KEY
                }
            })
        })
    })
});
export const logOut = () => {
    localStorageAPI.removeAuthData();
    router.navigate('/');
};
