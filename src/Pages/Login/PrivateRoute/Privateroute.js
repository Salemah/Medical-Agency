import React, { useReducer } from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Privateroute = ({children,...rest}) => {

  const {user,isLoading} = UseAuth();
  if(isLoading){
      return   <Spinner animation="border" variant="info" />
  }
    return (
        <Route
        {...rest}
        render={({ location }) =>
          user.email?(
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default Privateroute;