import { BASE_FIREBASE_URL } from '../../../shared/constants/constants';
import { createApi } from '@reduxjs/toolkit/query/react';
import { firebaseUserQueryWithReauth } from '../../auth/api/baseQueryWithAuth';
import { localStorageAPI } from '../../../shared/api/store/services/localStorageApi';
import { makeArrayFromArrayLikeObj } from '../../../shared/utils/makeArrayFromArrayLikeObj';
import { type NormalizedUser, type User } from '../types/user';

export const userAPI = createApi({
    baseQuery: firebaseUserQueryWithReauth(BASE_FIREBASE_URL),
    reducerPath: 'userAPI',
    tagTypes: ['User'],
    endpoints: builder => ({
        getCurrentUser: builder.query<NormalizedUser, void>({
            query: () => localStorageAPI.getUserId() + '.json',
            providesTags: ['User'],
            transformResponse: (response: User): NormalizedUser => {
                const favorites = makeArrayFromArrayLikeObj(
                    response?.favorites
                );
                const searchHistory = makeArrayFromArrayLikeObj(
                    response?.searchHistory
                );
                const newResponse: NormalizedUser = {
                    ...response,
                    favorites,
                    searchHistory
                };
                return newResponse;
            }
        }),
        createUser: builder.mutation<User, User>({
            query: user => ({
                url: user._id + '.json',
                body: user,
                method: 'PUT'
            }),
            invalidatesTags: ['User']
        }),
        updateUser: builder.mutation<
            Record<string, unknown>,
            { update: string, id: string, value: Record<string, unknown> }
        >({
            query: queryObj => ({
                url: queryObj.id + `/${queryObj.update}/` + '.json',
                body: queryObj.value,
                method: 'PUT'
            }),
            invalidatesTags: ['User']
        })
    })
});
