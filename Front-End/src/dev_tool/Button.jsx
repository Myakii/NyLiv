import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import ClearIcon from '@mui/icons-material/Clear';

export default function Button() {
  return (

    <div className='flex flex-col '>
        <h3>Les boutons</h3>
        <button className='btn btn-orange'>Orange</button>
        <button className='btn btn-blue'>Bleu</button>

        <div className='information-button'>
          <button className='btn btn-orange'>
            TEEEEEEEEEEEEEEEEEEEEST
          </button>
          <InfoIcon className='info-icon info-btn-blue' sx={{ fontSize: 50  }}   />
        </div>

        <div className='information-button'>
          <button className='btn btn-blue'>
            Bouton
          </button>
          <InfoIcon className='info-icon info-btn-orange' sx={{ fontSize: 50  }}   />
        </div>
        
        <ClearIcon className='exit-button' sx={{ fontSize: 58}} />

    </div>
  )
}
