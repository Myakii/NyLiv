import { onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useState, useEffect } from 'react'
import { auth } from './FirebaseConfig.jsx';

export const authContext = createContext("auth");

export default function Auth({children}) {
    const [authent, setAuthent] = useState("");

    useEffect(()=>(

        onAuthStateChanged(auth, (user) => {

            if (user) {
                setAuthent(user);

            } else {
                setAuthent(null);

            }

        })

    ))

    return <authContext.Provider value={authent}>{children}</authContext.Provider>
}
