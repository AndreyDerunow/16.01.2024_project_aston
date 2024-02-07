export interface User {
    _id?: string;
    email: string;
    favorites: Record<string, string>;
    image?: string;
    sex: 'male' | 'female';
    searchHistory: Record<string, string>;
}

export interface NormalizedUser {
    _id?: string;
    email: string;
    image?: string;
    sex: 'male' | 'female';
    favorites: string[];
    searchHistory: string[];
}
export interface UpdateUserObj {
    update: string;
    id: string;
    value: Record<string, unknown>;
}
