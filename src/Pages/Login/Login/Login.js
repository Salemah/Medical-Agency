import React from 'react';
import UseAuth from '../../../Hooks/UseAuth';



const Login = () => {
    const {user,googleLogin} = UseAuth();
    return (
        <div>
            <h1 >Login</h1>
            <button onClick={googleLogin} class="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;