import React, { createContext, useContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, browserLocalPersistence, setPersistence } from "firebase/auth"
import { auth } from "@/FirebaseConfig";

const UserAuthContext = createContext()

export const UserAuthContextProvider = ({ children }) => {

    const [user, setUser] = useState({})

    const signIn = async (email, password) => {

        return await signInWithEmailAndPassword(auth, email, password)

    }

    const signUp = async (email, password) => {

        return await createUserWithEmailAndPassword(auth, email, password)

    }

    const logOut = async () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setPersistence(auth, browserLocalPersistence)
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])

    return( 
        <UserAuthContext.Provider value={{ user, signIn, signUp, logOut }}>
            {children}
        </UserAuthContext.Provider>
    )
}

export function UseUserAuth(){
    return useContext(UserAuthContext)
}
