//Create Authcontext for the login token to be used across application

import { createContext, useState, useEffect} from 'react';

//Define the context data 
export const AuthContext =createContext({
    token: '' , //received from firebase 
    isAuthenticated : false ,//find if use authenticated
    authenticate:() =>{} , // authenticate the user
    logout:()=>{} // clear the token

});

function AuthContextProvider({children}){
    // Manage the Auth state
    const [authToken, setAuthToken] = useState();

    // For signing up 
    function authenticate(token){
        setAuthToken(token);
    }

    function logout(){
        setAuthToken(null);
    }


    // Construct the value object
    const value={
        token: authToken,
        isAuthenticated: !!authToken, // convert true or false to false / true
        authenticate : authenticate,
        logout: logout, // define the logout to nullify the token 
    };

    return <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>

}

export default AuthContextProvider;

