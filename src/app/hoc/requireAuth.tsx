import { Loader } from '../../shared/components/loader/loader';
import PropTypes from 'prop-types';
import { userAPI } from '../../entities/User/api/userApi';
import { Navigate, useLocation } from 'react-router';

import React, { type PropsWithChildren } from 'react';

export const RequireAuth = ({ children }: PropsWithChildren) => {
    const { error, isLoading } = userAPI.useGetCurrentUserQuery();
    const { pathname } = useLocation();
    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <Navigate to={'/register'} state={{ pathname }} />;
    }
    return children;
};

RequireAuth.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node)
    ]).isRequired
};
