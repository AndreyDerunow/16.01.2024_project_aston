import { type AuthResponse } from '../../entities/auth/types/auth';
import { localStorageAPI } from '../api/store/services/localStorageApi';
import {
    AUTH_ERROR,
    BASE_REFRESH_AUTH_FIREBASE_TOKEN
} from '../constants/constants';

import {
    EXPIRES_KEY,
    REFRESH_KEY,
    TOKEN_KEY,
    USERID_KEY
} from './../constants/constants';

export const getActualAccessToken = async (): Promise<string> => {
    const expiresIn = localStorageAPI.getTokenExpiresDate();
    let token = localStorageAPI.getAccessToken();
    if (!expiresIn || !token) {
        return AUTH_ERROR;
    }

    if (+expiresIn < Date.now()) {
        const refreshToken = localStorageAPI.getRefreshToken();
        if (!refreshToken) {
            return AUTH_ERROR;
        }
        const refreshAnswer = await fetch(
            BASE_REFRESH_AUTH_FIREBASE_TOKEN +
                'token?' +
                new URLSearchParams({
                    key: import.meta.env.VITE_FIREBASE_API_KEY
                }),
            {
                method: 'POST',
                body: JSON.stringify({
                    grant_type: 'refresh_token',
                    refresh_token: refreshToken
                })
            }
        ).then(async data => await data.json());
        if (refreshAnswer.error) {
            return AUTH_ERROR;
        }
        const { access_token, expires_in, user_id, refresh_token } =
            refreshAnswer;
        const tokens = {
            data: {
                [TOKEN_KEY]: access_token,
                [REFRESH_KEY]: refresh_token,
                [EXPIRES_KEY]: expires_in,
                [USERID_KEY]: user_id
            }
        };
        localStorageAPI.setTokens(tokens as AuthResponse);
    } else {
        return token;
    }
    token = localStorageAPI.getAccessToken();
    if (!token) {
        return AUTH_ERROR;
    }
    return token;
};
