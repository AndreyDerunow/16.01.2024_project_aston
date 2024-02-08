export const makeArrayFromArrayLikeObj = (
    obj: Record<string, string>
): string[] => {
    if (obj === null || obj === undefined || Object.keys(obj).length === 0) {
        return [];
    }

    const arr = [];
    for (const key in obj) {
        arr[+key] = obj[key];
    }
    return arr;
};
