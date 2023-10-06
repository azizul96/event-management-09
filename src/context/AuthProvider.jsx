/* eslint-disable react/prop-types */
import { createContext, useEffect, useState,  } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import auth from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photo) =>{
        setLoading(true)
        return updateProfile( auth.currentUser, {displayName:name, photoURL:photo})
    }

    const emailLogin = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const userLogOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        
    },[])



    const authInfo = {
        user,
        createUser,
        updateUserProfile,
        emailLogin,
        userLogOut,
        loading
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;