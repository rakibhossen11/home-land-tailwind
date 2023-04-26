import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword, signOut, updateProfile} from 'firebase/auth';
import app from '../firebase/Firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    // create user
    const createUser = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

     // send verification email
     const sendverification = (user) => {
        sendEmailVerification(user)
          .then((result) => {
            console.log(result);
            alert("Please verify your email");
          })
          .catch();
      };

    // signin user
    const login = (email,password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // user logout
    const logout = () =>{
        return signOut(auth);
    }

    const updateUserData = (user,name) =>{
        updateProfile(user,{
            displayName: name
        })
        .then(result =>{
            console.log('user name update')
        })
        .catch(error => console.log(error))
    }

    // observe user auth state
    useEffect(() =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false);
        })
        // stop observing while unmounting
        return () =>{
            return unsubscribe();
        }
    },[])


    const authInfo = {
        user,
        createUser,
        login,
        logout,
        sendverification,
        updateUserData,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;