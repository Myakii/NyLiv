import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { authContext, useAuth } from '../../Auth';
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Navbar() {

    const auth = useAuth(authContext);
    
    const [user, setUser] = useState({});

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        if ( auth ) {
            setIsLoggedIn(true);
            setUser(auth);
            console.log("Oui")
        }

    }), [auth];
    

  return (
    <header className="header">
     
        <div className='navbar-left'>

            <ul className='nav-items'>

                
                <li className='nav-item'>
                    <Link to='/'><h3>J'adopte</h3></Link>
                </li>

                <li className='nav-item'>
                    <Link to='/'><h3>Je signale</h3></Link>
                </li>

            </ul>

        </div>
     
        <img id="navbar-nyliv-logo" src='./src/assets/NyLiv_Logo.png' alt="Logo de NyLiv" />
        
        <div className='navbar-right'>

            <ul className='nav-items'>

                <li className="nav-item">
                    <Link to='/'><h3>Accompagnez-nous</h3></Link>

                </li>
                
                <li className="nav-item">
                    <FontAwesomeIcon icon={faBars} size='xl'/>

                </li>

            </ul>

        </div>

    </header>

  )
}
