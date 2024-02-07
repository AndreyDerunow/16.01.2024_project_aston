import { type FetchArgs } from '@reduxjs/toolkit/query';

export const appendQueryStringParam = (
    args: string | FetchArgs,
    key: string,
    value: string
): string | FetchArgs => {
    let urlEnd = typeof args === 'string' ? args : args.url;

    if (urlEnd.indexOf('?') < 0) {
        urlEnd += '?';
    } else {
        urlEnd += '&';
    }

    urlEnd += `${key}=${value}`;

    return typeof args === 'string' ? urlEnd : { ...args, url: urlEnd };
};
