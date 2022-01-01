import React, { useReducer } from 'react';
import { Redirect, Route } from 'react-router-dom';
import UseAuth from '../../../Hooks/UseAuth';

const Privateroute = ({children,...rest}) => {
  const{user} = UseAuth();
   
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