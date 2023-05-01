import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'

const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOut =() =>{
        return signOut(auth);
    }
    const authInfo = {
        user,
        createUser,
        signIn,
        logOut
    };
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, loggedUser=>{
            console.log(loggedUser, 'logged in user inside state observer');
            setUser(loggedUser);
        })
        return ()=>unsubscribe();
    }, [])
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;