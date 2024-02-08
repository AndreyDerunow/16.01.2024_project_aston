import { isObject } from '../../../../shared/types/typeguards/utils/typeguardUtils';

import { type AuthErrorObj, type AuthResponse } from '../auth';

export const isAuthError = (authRes: unknown): authRes is AuthErrorObj => {
    if (!isObject(authRes)) {
        return false;
    }
    if (
        'error' in authRes &&
        typeof authRes.error === 'object' &&
        authRes.error !== null &&
        'data' in authRes.error &&
        typeof authRes.error.data === 'object' &&
        authRes.error.data !== null &&
        'error' in authRes.error.data &&
        typeof authRes.error.data.error === 'object' &&
        authRes.error.data.error !== null &&
        'code' in authRes.error.data.error &&
        typeof authRes.error.data.error.code === 'number' &&
        'message' in authRes.error.data.error &&
        typeof authRes.error.data.error.message === 'string'
    ) {
        return true;
    }

    return false;
};

export const isAuthResponse = (authRes: unknown): authRes is AuthResponse => {
    if (!isObject(authRes)) {
        return false;
    }
    if (!('data' in authRes)) {
        return false;
    }
    const { data } = authRes;
    if (!isObject(data)) {
        return false;
    }
    if (
        'idToken' in data &&
        typeof data.idToken === 'string' &&
        'email' in data &&
        typeof data.email === 'string' &&
        'refreshToken' in data &&
        typeof data.refreshToken === 'string' &&
        'localId' in data &&
        typeof data.localId === 'string' &&
        'expiresIn' in data &&
        typeof data.expiresIn === 'string'
    ) {
        return true;
    }
    return false;
};
