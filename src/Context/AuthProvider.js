import React, { createContext } from 'react';
import Usefirebase from '../Hooks/Usefirebase';
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const allcontext = Usefirebase();
    return (
        <AuthContext.Provider value={allcontext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;