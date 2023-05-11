import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword} from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoadin] = useState(true);

    const createUser = (email, password) => {
        setLoadin(true)
      return createUserWithEmailAndPassword(auth,email, password)
    }

    const signIn =(email, password) => {
        setLoadin(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        
            setUser(currentUser)
            setLoadin(false)
        })
        return ()=>{
            return unsubscribe();
        }
    },[])
    const authInfo = {
        user,
        loading,
        createUser,
        signIn

    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;