import React from 'react'
import './Home.css'
import OurPartner from './components/OurPartner'
import AnimalHistory from './components/AnimalHistory'
import AdoptionCategory from './components/AdoptionCategory'
import OurHistory from './components/OurHistory'
import ImageBanner from './components/ImageBanner'

export default function Home() {
  return (
    <div className='Home'>

      {/* Afin de mieux organiser le HTML, nous avons séparé les sections
      de la page sous forme de components que l'on peut retrouver dans 
      le dossier components du dossier Home */}

      <ImageBanner />  
      
      <OurHistory />

      <AdoptionCategory />

      <AnimalHistory />

      <OurPartner />

    </div>
  )
}
