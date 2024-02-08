export const formatNavLinkTo = (text: string): string => {
    if (text === 'Main') {
        return '/';
    }
    return text[0].toLowerCase().concat(text.slice(1)).replace(/\s/gm, '');
};
