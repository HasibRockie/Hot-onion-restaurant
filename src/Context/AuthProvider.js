import React, { createContext } from "react";
import FirebaseAuth from './../Firebase/Firebase.authentication';



export const AuthContext = createContext()

const AuthProvider = (props) => {
    const {children} = props 
    const allContext = FirebaseAuth()
    return (
        <AuthContext.Provider value={allContext}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;