import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';



const Login = () => {
    const {user, setUser, googleLogin, emailPassRegister, emailPassLogin,setIsLoading,updateName } = UseAuth();
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [names, setName] = useState('');
    const location = useLocation();
    const history = useHistory();
    const redirecr_url = location.state?.from || '/home';

    const handleemailchange = e => {
        setEmail(e.target.value);
    }
    const handlepasswordchange = e => {
        setPassword(e.target.value);
    }
    const handleNamechange = e => {
        console.log(e.target.value)
        setName(e.target.value);
    }
    const handlegoogleLogin = () => {
        setIsLoading(true)
        googleLogin()
            .then((result) => {
                const user = result.user;
                console.log(user);
                setUser(user);
                history.push(redirecr_url);
            })
            .finally(()=>setIsLoading(false)) 
       
    };
    
    const passwordLogin = () => {
        setIsLoading(true);
        emailPassLogin(email, password)
        .then((result) => {
            const user = result.user;
            console.log(user);
            setUser(user);
            history.push(redirecr_url);
        })
        .finally(()=>setIsLoading(false));

    }
    
    const passwordRegister = (e) => {
      
        e.preventDefault();
        emailPassRegister(email,password)
        .then((result) => {
            const users = result.user;
            setIsLoading(true);
            updateName(names);
            setUser(users);
    
          })
          .catch((error) => {
    
          })
          .finally(()=>setIsLoading(false));
    }

    return (
        <div>
            <h2>Register: Create Account</h2>
            <form onSubmit={passwordRegister}>
            <input onBlur={handleNamechange} type="text" name="name" placeholder="Your Name" /><br />
                <input onBlur={handleemailchange} type="email" name="email" placeholder="Your Email" /><br />
                <input onBlur={handlepasswordchange} type="password" name="password" placeholder="Enter Password" /><br />

                <input type="submit" value="Submit" /><br />
            </form>
            <p>Already Registered<Link to="/login">Login</Link></p>
            <div>----------or-------------</div>
            <button className="btn-regular" onClick={passwordLogin} >Google Sign in</button>


            <button onClick={handlegoogleLogin} class="btn btn-warning">Google Login</button>
        </div>
    );
};

export default Login;