import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);

    

    if (user){
        return children;
    }
    return <Navigate state={{from: location}} to='/login'></Navigate>
};

export default PrivateRoute;




/**
 * ----------------
 *     steps
 * ---------------
 * 1. check user is logged in or not
 * 2. if user is logged in, then allow them ti visit the route
 * 3. else redirect the user to the login page
 * 4. setup the router
 * 5. 
 */