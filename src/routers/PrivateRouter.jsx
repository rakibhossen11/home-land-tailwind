import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user,loading} = useContext(AuthContext);

    if(user){
        return children;
    }
    
    return <Navigate to='/login' state={{from: location}} replace></Navigate>;
};

export default PrivateRouter;