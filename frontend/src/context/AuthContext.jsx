import React, { createContext, useContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase_config'
import {
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    confirmPasswordReset,
} from "firebase/auth";

const UserContext = createContext();
export function UserProvider({ children }) {

    const [user, setUser] = useState("loading");

    function login(uname, pwd) {
        console.log(uname);
        return signInWithEmailAndPassword(auth, uname, pwd)
    }
    function signup(uname, pwd) {
        console.log(uname)
        return createUserWithEmailAndPassword(auth, uname, pwd)
    }

    function logout(){
        setUser(null);
        return signOut(auth)
    }

    const passwordReset = async (email) => {
        return await sendPasswordResetEmail(auth, email)
      }
    
      const confirmThePasswordReset = async (
         oobCode="", newPassword=""
      ) => {
        if(!oobCode && !newPassword) return;
        
        return await confirmPasswordReset(auth, oobCode, newPassword)
      }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
            console.log("Auth", currentuser);
            setUser(currentuser);
        });

        return () => {
            unsubscribe();
        };
    }, []);

    return (
        <UserContext.Provider value={{ user, setUser, login, signup, logout, passwordReset, confirmPasswordReset }}>
            {children}
        </UserContext.Provider>
    )
}
function UserAuth() {
    return useContext(UserContext)
}

export default UserAuth