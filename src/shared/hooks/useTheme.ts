import { themeContext } from '../api/themeContext';
import { useContext } from 'react';

export const useTheme = () => {
    return useContext(themeContext);
};
