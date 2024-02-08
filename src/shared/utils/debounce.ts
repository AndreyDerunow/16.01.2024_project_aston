let flag: number;
export const debounce = (argument: string, fn: (q: string) => void) => {
    clearTimeout(flag);
    flag = +setTimeout(() => {
        fn(argument);
    }, 500);
};
