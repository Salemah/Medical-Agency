import React from 'react';
import Usefirebase from '../../../Hooks/Usefirebase';


const Login = () => {
    const {user,googleLogin} = Usefirebase();
    return (
        <div>
            <h1 >Login</h1>
            <button onClick={googleLogin} class="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;