import Button from '../../../shared/ui/button';
import { logOut } from '../../../entities/auth/api/services/authApi';
import React from 'react';
import { userAPI } from '../../../entities/User/api/userApi';

export const LogOut = () => {
    const [getCurrentUser] = userAPI.useLazyGetCurrentUserQuery();
    const handlelogOut = () => {
        logOut();
        getCurrentUser();
    };
    return (
        <Button
            classes='w-[10%]'
            cb={handlelogOut}
            text='Logout'
            disabled={false}
        />
    );
};
