import React from 'react';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';



const Login = () => {
    const {user,googleLogin} = UseAuth();
    const location = useLocation();
    const history = useHistory();
    const redirecr_url = location.state?.from || '/home';
    console.log(redirecr_url);
    const handlegoogleLogin =() =>{
        googleLogin()
        .then((result) => {
            const user = result.user;
            history.push(redirecr_url);
        }) };
    return (
        <div>
            <h1 >Login</h1>
            <button onClick={handlegoogleLogin} class="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;