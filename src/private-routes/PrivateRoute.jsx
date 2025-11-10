import React, { useContext } from 'react';
import { Context } from '../auth/AuthContext';
import { Navigate, useLocation } from 'react-router';
import LoadingAnimation from '../components/LoadingAnimation';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user, loading } = useContext(Context)
    if(loading){ return <LoadingAnimation/>}
    return user ? children : <Navigate to='/login' state={{from:location.pathname}} replace></Navigate>;
};

export default PrivateRoute;