import React, {useState, useEffect} from 'react';
const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () =>{},
    onLogin: () =>{},
    onLoad : () =>{},
});

export const AuthContextProvider = (props) =>{
    const [isLoggedIn, setIsLoggedIn] = useState();

    useEffect (() =>{
        const tokenIsNotNull = localStorage.getItem('token');
        if(tokenIsNotNull === null){
        setIsLoggedIn(false);
        }
    }, [isLoggedIn]);

    const logoutHandler =  () =>{
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        setIsLoggedIn(false);
    }
    const loginHandler = (username, token) =>{
        localStorage.setItem('username', username);
        localStorage.setItem('token', token);
        setIsLoggedIn(true);
    }

    const pageReload = () =>{
        setIsLoggedIn(true);
    }


    return <AuthContext.Provider
        value={
            {
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
                onLoad : pageReload,
            }
        }>
        {props.children}
    </AuthContext.Provider>
}
export default AuthContext;