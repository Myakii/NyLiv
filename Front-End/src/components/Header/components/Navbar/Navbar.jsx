import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from 'react-router-dom';
import './Navbar.css'

export default function Navbar() {

  return (

    <div className="navbar centered-padding-div">
        <nav className='navbar-left'>

            <ul className='nav-items'>

                
                <li className='nav-item'>
                    <Link to='/'><h3>J'adopte</h3></Link>
                </li>

                <li className='nav-item'>
                    <Link to='/'><h3>Je signale</h3></Link>
                </li>

            </ul>

        </nav>

        <div className='logo'>
            <Link to='/'><img className="navbar-nyliv-logo w-52" src='./Assets/Logo/NyLiv_Logo.png' alt="Logo de NyLiv" /></Link>
        </div>

        <nav className='navbar-right'>

            <ul className='nav-items'>

                <li className="nav-item">
                    <Link to='/'><h3>Accompagnez-nous</h3></Link>

                </li>
                
                <li className="nav-item">
    
                    
                    <MenuIcon sx={{fontSize: 60}} className='header-burger' id='header-burger' />

                </li>

            </ul>

        </nav>

    </div>
  )
}
