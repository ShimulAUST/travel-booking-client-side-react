import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const { signInUsinGoogle, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirectURL = location.state?.from || '/home';
    const handleGoogleLogin = () => {
        signInUsinGoogle()
            .then(result => {
                history.push(redirectURL);
            })
            .finally(() => {
                setIsLoading(false);
            })

    }

    return (
        <div className="App mt-5">
            <button className="btn btn-warning" onClick={handleGoogleLogin}>Login With Goolgle</button>
        </div>
    );
};

export default Login;