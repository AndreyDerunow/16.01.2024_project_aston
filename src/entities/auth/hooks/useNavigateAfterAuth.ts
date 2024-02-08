import { useLocation, useNavigate } from 'react-router';

export const useNavigateAfterAuth = () => {
    const { state } = useLocation();
    const navigate = useNavigate();
    const handleNavigate = () => {
        if (state?.pathname) {
            navigate(state.pathname);
        } else {
            navigate('/');
        }
    };
    return { handleNavigate };
};
