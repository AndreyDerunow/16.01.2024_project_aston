import { appendQueryStringParam } from '../../../shared/utils/appendQueryStringParam';
import { getActualAccessToken } from '../../../shared/utils/getActualAccessToken';

import {
    type BaseQueryFn,
    type FetchArgs,
    fetchBaseQuery,
    type FetchBaseQueryError
} from '@reduxjs/toolkit/query';
const userEndPoint = 'user/';

export const firebaseUserQueryWithReauth = (url: string) => {
    const baseQueryWithReauth: BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError
    > = async (args, api, extraOptions) => {
        const token = await getActualAccessToken();
        args = appendQueryStringParam(args, 'auth', token);
        const result = await fetchBaseQuery({ baseUrl: url + userEndPoint })(
            args,
            api,
            extraOptions
        );
        return result;
    };
    return baseQueryWithReauth;
};
