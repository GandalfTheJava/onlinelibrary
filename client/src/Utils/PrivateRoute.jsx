import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ auth, ...props }) => {
    return auth
        ? (<Route {...props} />)
        : (<Redirect to="/notauthorised" />)
};

export default PrivateRoute;