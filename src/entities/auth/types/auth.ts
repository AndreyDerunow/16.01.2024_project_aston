export interface AuthData {
    email: string;
    password: string;
    returnSecureToken: true;
}
export interface LoginData {
    email: string;
    password: string;
}
export interface RegisterData extends LoginData {
    image: string;
    sex: 'male' | 'female';
}
export interface Errors {
    password?: string;
    email?: string;
    auth?: string;
}
export interface AuthResponse {
    data: {
        idToken: string,
        email: string,
        refreshToken: string,
        expiresIn: string,
        localId: string,
        kind: string,
        registered?: boolean
    };
}

export interface Tokens {
    refreshToken: string;
    localId: string;
    idToken: string;
    expiresIn: string;
}

export interface RefreshAuthData {
    grant_type: 'refresh_token';
    refresh_token: string;
}
export interface AuthError {
    message: string;
    domain: string;
    reason: string;
}
export interface AuthErrorObj {
    error: {
        data: {
            error: {
                code: number,
                message: string,
                errors: AuthError[]
            }
        }
    };
}
