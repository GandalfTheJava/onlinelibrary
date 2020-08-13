import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ auth, ...props }) => {
    return auth
        ? (<Redirect to="/dashboard" />)
        : (<Route {...props} />)
};

export default PublicRoute;
