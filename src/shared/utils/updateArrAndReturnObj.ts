export const updateArrAndReturnObj = (
    arr: unknown[],
    val: unknown
): Record<string, unknown> => {
    const shouldRemove = arr.includes(val);
    if (shouldRemove) {
        const newArr = [...new Set([...arr.filter(el => el !== val)])];
        return { ...newArr };
    }
    const newArr = [...new Set([...arr, val])];
    return { ...newArr };
};
