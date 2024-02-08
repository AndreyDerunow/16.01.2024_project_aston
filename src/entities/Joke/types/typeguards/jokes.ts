import { isObject } from '../../../../shared/types/typeguards/utils/typeguardUtils';
import { type Result } from '../jokes';

export const isResult = (obj: unknown): obj is Result => {
    if (!isObject(obj)) {
        return false;
    }
    if (
        'value' in obj &&
        typeof obj.value === 'string' &&
        'id' in obj &&
        typeof obj.id === 'string' &&
        'url' in obj &&
        typeof obj.url === 'string' &&
        'categories' in obj &&
        typeof Array.isArray(obj.categories)
    ) {
        return true;
    }
    return false;
};
