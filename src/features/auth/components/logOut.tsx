import { Button } from '../../../shared/components/button/button';
import { logOut } from '../../../entities/auth/api/services/authApi';
import React from 'react';
import { userAPI } from '../../../entities/User/api/userApi';

export const LogOut = () => {
    const [resetUser] = userAPI.useLazyGetCurrentUserQuery();
    const handlelogOut = () => {
        logOut();
        resetUser();
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
