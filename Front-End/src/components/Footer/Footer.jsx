import React from 'react'
import './Footer.css'
import Logo from './components/Logo';
import Informations from './components/Informations/Informations';
import LocalisationInformation from './components/LocalisationInformation/LocalisationInformation';

export default function Footer() {


  const functionInc = (e) => {

    e.preventDefault();

  }


  return (

    <footer className='footer-section centered-padding-div'>

      <div className='top-footer'>

        <Logo />

        <div className='middle-footer-page'>

          <form>
            <input type="email" className='newsletter-input' placeholder='Votre Email'/>
            <button type="submit" onClick={functionInc} className='newsletter-btn btn-blue'>Inscrivez-vous</button>
          </form>

          <LocalisationInformation />
x
          <Informations />

        </div>

      </div>

      <div className='end-page'>

        <p className='copyright'>© 2023, NyLiv</p>
      
      </div>
      
    </footer>
    
  )
}
