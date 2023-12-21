import React, { useEffect, useState } from 'react';
import './Header.css';
import { authContext, useAuth } from '../../Auth';
import Navbar from './components/Navbar/Navbar.jsx';



export default function Header() {

    const auth = useAuth(authContext);
    
    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        if ( auth ) {
            setIsLoggedIn(true);
            setUser(auth);
        }

    }), [auth];
    

  return (
    <header className="header">

        <Navbar />

    </header>

  )
}
