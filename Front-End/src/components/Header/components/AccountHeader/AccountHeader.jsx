import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './AccountHeader.css'

export default function AccountHeader() {

  const headerBurger = document.getElementById("header-burger")


  return (
    <div className='account-header centered-padding-div'>

      <ul className='nav-items'>

        <li className='nav-item'>
          <Link to='/inscription'>
            <h3>
              Inscription
            </h3>
          </Link>
        </li>

        <li className='nav-item'>
          <Link to='/connexion'>
            <h3>
              Connexion
            </h3>
          </Link>
        </li>
      </ul>

    </div>
  )
}
