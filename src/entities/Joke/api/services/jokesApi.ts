import { BASE_CHUCK_API_URL } from '../../../../shared/constants/constants';
import { type Joke } from '../../types/jokes';

import { type QueryAnswer } from '../../types/jokes';

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = BASE_CHUCK_API_URL;
export const jokesAPI = createApi({
    baseQuery: fetchBaseQuery({ baseUrl }),
    reducerPath: 'jokesAPI',
    endpoints: builder => ({
        getJokes: builder.query<Joke, void>({
            query: () => ({ url: 'random' })
        }),
        findJoke: builder.query<QueryAnswer, string>({
            query: arg => ({ url: 'search', params: { query: arg } })
        })
    })
});

export const getJokeById = async (arr: string[]) => {
    const response = await Promise.all(
        arr.map(
            async el =>
                await fetch(BASE_CHUCK_API_URL + el, {
                    headers: new Headers({
                        'content-type': 'application/json'
                    })
                })
        )
    );
    const responseParsed = await Promise.all(
        response.map(async el => await el.json())
    );
    return responseParsed;
};
