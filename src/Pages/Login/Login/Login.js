import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';
import './Login.css';



const Login = () => {
    const { user, setUser, googleLogin, emailPassRegister, emailPassLogin, setIsLoading, updateName } = UseAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [islogin, setIsLogin] = useState('');
    const [error, setError] = useState('');
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
            .finally(() => setIsLoading(false))

    };
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
      }
      const handleregister = e => {
        e.preventDefault();
        if (password.length < 6) {
          setError('password musst be 6 charecter');
          return;
        }
        
    islogin ? passwordLogin() : passwordRegister();
      };

   

    const passwordRegister = () => {
        setIsLoading(true);
     
        emailPassRegister(email, password)
            .then((result) => {
                updateName(name);
            })
            .catch((error) => {
              setError(error.message);

            })
            .finally(() => setIsLoading(false));
    }
    const passwordLogin = () => {
      setIsLoading(true);
      emailPassLogin(email, password)
          .then((result) => {
              const user = result.user;
             
              setUser(user);
              history.push(redirecr_url);
          })
          .finally(() => setIsLoading(false));

  };
  return (
       
        <div class="mx-5 my-5  login-form">
        <form >
        <h3 className="text-info">Please {islogin ? 'Login' : 'Register'}</h3>
        

        {/* namechange */}
        {islogin ?<p></p>:
          <div className="row mb-3">
          <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
          <div className="col-sm-10">
            <input type="text" onBlur={handleNamechange} className="form-control"  placeholder="Your Name" />
          </div>
        </div> }
        {/* endf */}
        <div className="row mb-3">
          <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
          <div className="col-sm-10">
            <input onBlur={handleemailchange} type="email" className="form-control"  required />
          </div>
        </div>
        {/*  */}
        <div className="row mb-3">
          <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
          <div className="col-sm-10">
            <input type="password" onBlur={handlepasswordchange} className="form-control"  required />
            <div className="text-danger">{error}</div>
          </div>
         
        </div>

        <div className="row mb-3 ">
          <div className="col-sm-10 offset-sm-2">
            <div className="form-check">
              <input onChange={toggleLogin} className="form-check-input inp" type="checkbox"  />
              <label id="reg-label" className="form-check-label " htmlFor="gridCheck1">
                Already Registered?
              </label>
            </div>
          </div>
        </div>
        <button  onClick={handleregister} className="btn btn-primary">{islogin ? 'Login ':'Register'}</button>
       
        
      </form>
      <br /><br />
      <button className="btn btn-warning" onClick={handlegoogleLogin}>Google sign In</button>
        </div>
         
    );
};

export default Login;