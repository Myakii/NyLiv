import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';

export default function Navbar() {
  return (
    <header className="header">
        
        <nav className='navbar-left flex flex-row align-center'>
            <img id="navbar-nyliv-logo" src='./src/assets/NyLiv_Logo.png' alt="Logo de NyLiv" />
            <h1>NyLiv</h1>
            <ul className='nav-items'>

                <li className='nav-item'>

                    <Link to="/">Oui</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">Oui</Link>

                </li>

                <li className='nav-item'>

                    <Link to="/">Oui</Link>

                </li>
            </ul>
        </nav>

        <nav className='navbar-right flex flex-row'>

            <ul className='nav-items'>

                <li className='nav-item'>

                    <Link to='/'>Je me connecte</Link>

                </li>

                <li className='nav-item'>

                    <Link to='/'>Je crée mon compte</Link>

                </li>

            </ul>

        </nav>

    </header>
  )
}
