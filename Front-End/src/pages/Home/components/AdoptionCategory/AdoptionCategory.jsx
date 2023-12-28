import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import './AdoptionCategory.css'


export default function AdoptionCategory() {
  return (
    <section className='adoption-category centered-padding-div'>

      <h3 className='text-center'>Nos catégories</h3>

      <div className='display-card'>

        <div className='animal-card-home'>

          <div className='card-img'>img</div>
          <button className='btn btn-blue'>Chiens</button>

        </div>
        
        <div className='animal-card-home'>

          <div className='card-img'>img</div>
          <button className='btn btn-orange'>Chats</button>

        </div>

        
        <div className='animal-card-home'>

          <div className='card-img'>img</div>
          <button className='btn btn-blue'>NAC</button>  

        </div>

        
        <div className='animal-card-home'>

          <div className='card-img'>img</div>
          <div className='information-button'>
            <button className='btn btn-orange'>
              FAD
            </button>
            <InfoIcon className='info-icon info-btn-blue' sx={{ fontSize: 50  }}   />
          </div>

        </div>

        
        <div className='animal-card-home'>

          <div className='card-img'>img</div>
          <div className='information-button'>
            <button className='btn btn-blue'>
              SOS
            </button>
            <InfoIcon className='info-icon info-btn-orange' sx={{ fontSize: 50  }}   />
          </div>

        </div>

        
        <div className='animal-card-home'>

          <div className='card-img'>img</div>

          <div className='information-button'>
            <button className='btn btn-orange'>
              Vétéran
            </button>
            <InfoIcon className='info-icon info-btn-blue' sx={{ fontSize: 50  }}   />
          </div>

        </div>

      </div>

    </section>
  )
}
