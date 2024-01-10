import React from 'react'
import ClearIcon from '@mui/icons-material/Clear';

export default function AdoptionHeader() {
  return (
    <header className=''>
        
        <img
        src="./Assets/Logo/NyLiv_Logo.png"
        alt="Logo du site"
        className="navbar-nyliv-logo w-52"
        />
        <h1 className="text-[#F47D34]">Adoption</h1>
        <ClearIcon className='exit-button' sx={{ fontSize: 58}} />

    </header>
  )
}
