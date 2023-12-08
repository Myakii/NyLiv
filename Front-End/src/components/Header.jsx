import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { authContext, useAuth } from '../Auth';

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
    <header className="header centered-div">
        
        <nav className='navbar-left flex flex-row align-center'>
            <img id="navbar-nyliv-logo" src='./src/assets/NyLiv_Logo.png' alt="Logo de NyLiv" />

            <ul className='nav-items'>

                <li className='nav-item'>

                    <Link to="/">Accueil</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">Adoptez un animal</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">SPA</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">30 Millions D'Amis</Link>

                </li>

            </ul>
        </nav>

        {isLoggedIn == false ?

            (<nav className='navbar-right flex flex-row'>

                <ul className='nav-items'>

                    <li className='nav-item'>

                        <Link to='/connexion'>Je me connecte</Link>

                    </li>

                    <li className='nav-item'>

                        <Link to='/inscription'>Je crée mon compte</Link>

                    </li>

                </ul>

            </nav>)

            : 
            
            (
                <nav className='navbar-right flex flex-row'>

                    <ul className='nav-items'>
                        
                        <li className='nav-item'>

                            <p>{user.email}</p>

                        </li>


                    </ul>

                </nav>

            )


        }
    </header>
  )
}
