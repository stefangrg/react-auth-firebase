import React, { useContext } from "react"
import { useEffect } from "react";
import { auth } from "../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";
import { useLocalStorage } from "../Hooks/useLocalStorage";

const AuthContext = React.createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({ children }){

    // States
    const [user, setUser] = useLocalStorage("user",null);

    // Effects

    useEffect(() => {

        return onAuthStateChanged(auth, (loggedUser) => {
            if (loggedUser) {
                setUser(loggedUser);
            }else{
                setUser(undefined);
            }
        });

    });

    // Methods

    function register(email,password,errorCallback = null, successCallback = null){

        createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
            if(successCallback) successCallback();
          })
        .catch((error) => {
            if(errorCallback) errorCallback(error)
        });
        
    }
    
    function login(email,password){

        return new Promise(async (success,error) => {
            try{
                await signInWithEmailAndPassword(auth, email, password)
                success()
            }catch(err){
                error(err);
            }
        })
    }

    function logout(){

        if(!auth.currentUser) return;

        signOut(auth);

    }

    function sendResetPasswordEmail(email, errorCallback = null, successCallback = null){
        
        sendPasswordResetEmail(auth, email)
        .then(() => {
            if(successCallback) successCallback();
        })
        .catch((error) => {
            if(errorCallback) errorCallback(error);
        });

    }

    function check(){
        return user ? true : false;
    }

    const value = {
        user,
        register,
        login,
        logout,
        check,
        sendResetPasswordEmail
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
    
}