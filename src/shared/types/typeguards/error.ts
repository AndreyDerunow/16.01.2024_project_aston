import { type ErrorObj } from '../ui';

import { isObject } from './utils/typeguardUtils';

export const isErrorObj = (obj: unknown): obj is ErrorObj => {
    if (!isObject(obj)) {
        return false;
    }
    if ('message' in obj && typeof obj.message === 'string') {
        return true;
    }
    return false;
};
