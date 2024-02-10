import { type AuthResponse } from '../../../../entities/auth/types/auth';
import {
    AUTH_ERROR,
    EXPIRES_KEY,
    REFRESH_KEY,
    TOKEN_KEY,
    USERID_KEY
} from '../../../constants/constants';

export const setTokens = (res: AuthResponse) => {
    if (res.data) {
        const { localId, idToken, refreshToken, expiresIn } = res.data;
        const expiresDate = new Date().getTime() + +expiresIn * 1000 + '';
        localStorage.setItem(USERID_KEY, localId);
        localStorage.setItem(TOKEN_KEY, idToken);
        localStorage.setItem(REFRESH_KEY, refreshToken);
        localStorage.setItem(EXPIRES_KEY, expiresDate);
    } else {
        throw new Error(AUTH_ERROR);
    }
};

export const getAccessToken = () => {
    return localStorage.getItem(TOKEN_KEY);
};

export const getUserId = () => {
    return localStorage.getItem(USERID_KEY);
};

export const getRefreshToken = () => {
    return localStorage.getItem(REFRESH_KEY);
};

export const getTokenExpiresDate = () => {
    return localStorage.getItem(EXPIRES_KEY);
};
export const removeAuthData = () => {
    localStorage.removeItem(USERID_KEY);
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(REFRESH_KEY);
    localStorage.removeItem(EXPIRES_KEY);
};
