import React, { useEffect, useState } from 'react';
import { Context } from './AuthContext';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,updateProfile } from 'firebase/auth';

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [allData, setAllData] = useState([])
    const [searchLoading, setSearchLoading] = useState(false)
    useEffect(() => {
        fetch('https://rent-wheel-server.vercel.app/cars')
            .then(result => result.json())
            .then(data => {
                setAllData(data)
            })
            .catch(err => console.log(err));
    }, []);

    const signInWithGoogle  = () =>{
       const provider = new GoogleAuthProvider();
       return signInWithPopup(auth, provider)
    }
    const userRegistration = (email, password) =>{
        return createUserWithEmailAndPassword(auth,email, password)
    }
    const userLogin = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }
    const userUpdate = (name, url) =>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL:url
        })
    }
    const logOut = () =>{
        return signOut(auth)
    }
    useEffect(()=>{
         const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser)
            setLoading(false)
         })
         return ()=> unsubscribe()
    },[])

    const authObj = {

        signInWithGoogle,
        userRegistration,
        userLogin,
        userUpdate,
        logOut,
        user,
        setUser,
        loading,
        setLoading,
        allData,
        setAllData,
        searchLoading,
        setSearchLoading
       

    }
    return (
        <Context value={authObj}>{children}</Context>
    );
};

export default AuthProvider;
