import React, { useContext } from 'react';
import { Context } from '../auth/AuthContext';
import { useNavigation } from 'react-router';
import LoadingAnimation from '../components/LoadingAnimation';

const PrivateRoute = ({children}) => {
    const navigate = useNavigation()
    const {user, loading} = useContext(Context)
    if(!loading){
        if(user){
        return children;
        }
    }
    else{
        return <LoadingAnimation/>
    }
    return navigate('/login')
};

export default PrivateRoute;