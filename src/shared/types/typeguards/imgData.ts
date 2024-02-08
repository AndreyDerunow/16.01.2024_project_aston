import { isObject } from './utils/typeguardUtils';
import { type TargetImgData } from '../ui';

export const isTargetImgData = (obj: unknown): obj is TargetImgData => {
    if (!isObject(obj)) {
        return false;
    }
    if (
        'name' in obj &&
        typeof obj.name === 'string' &&
        'value' in obj &&
        obj.value instanceof File &&
        'img' in obj &&
        typeof obj.img === 'string'
    ) {
        return true;
    }
    return false;
};
