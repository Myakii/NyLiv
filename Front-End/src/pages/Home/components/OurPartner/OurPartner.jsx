import React from 'react'
import './OurPartner.css'

export default function OurPartner() {
  return (
    <section className='our-partner centered-padding-div '>
        <h3 className='text-center'>Suivre Nos Partenaires</h3>

        <div className='display-partner'>

        <a href="https://www.la-spa.fr" target="_blank" rel="noopener noreferrer">

          <img src="./Assets/Partners/SPA.png" />

        </a>

        <a href="https://www.30millionsdamis.fr" target="_blank" rel="noopener noreferrer">

          <img src="./Assets/Partners/30mAmis.png" />

        </a>

        <a href="https://www.fondationbrigittebardot.fr" target="_blank" rel="noopener noreferrer">
        
          <img src="./Assets/Partners/Fondation_Brigitte_Bardot.png" />

        </a>

        <a href="https://www.royalcanin.com/fr" target="_blank" rel="noopener noreferrer">

          <img src="./Assets/Partners/Royal_Canin.png" />

        </a>

        <a href="https://www.donenconfiance.org" target="_blank" rel="noopener noreferrer">

          <img src="./Assets/Partners/comitecharte.png" />

        </a>

        </div>
    </section>
  )
}
