import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
import { getAuth } from 'firebase/auth';

export default function Navbar() {

    const auth = getAuth();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {

        if ( auth.currentUser ) {
            setIsLoggedIn(true);
        }

    }), [];
    

  return (
    <header className="header centered-div">
        
        <nav className='navbar-left flex flex-row align-center'>
            <img id="navbar-nyliv-logo" src='./src/assets/NyLiv_Logo.png' alt="Logo de NyLiv" />

            <ul className='nav-items'>

                <li className='nav-item'>

                    <Link to="/">Home</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">Oui</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">Oui</Link>

                </li>
            </ul>
        </nav>

        {isLoggedIn?

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

                            <p>Connecté</p>

                        </li>


                    </ul>

                </nav>

            )


        }
    </header>
  )
}
