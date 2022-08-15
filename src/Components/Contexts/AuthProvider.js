import React, { useContext, useState } from "react"
import { useEffect } from "react";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){

    const [user, setUser] = useState( () => {

            const value = window.localStorage.getItem('user');

            return value !== null
            ? JSON.parse(value)
            : undefined;
        }
    );
    
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if(user) window.localStorage.setItem('user',JSON.stringify(user));
    }, [user]);
    
    function login(){
        setLoading(true);
        setUser({
            name: "Stefan",
            email: "stefangrigore45@gmail.com"
        });
        setLoading(false);
    }

    function logout(){
        setUser(undefined);
        window.localStorage.removeItem('user');
    }

    function check(){
        return user ? true : false;
    }

    const value = {
        user,
        login,
        logout,
        check
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
    
}