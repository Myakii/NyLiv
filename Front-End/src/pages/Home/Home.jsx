import React, { useEffect } from 'react'
import './Home.css'
import OurPartner from './components/OurPartner/OurPartner.jsx'
import AnimalHistory from './components/AnimalHistory/AnimalHistory.jsx'
import AdoptionCategory from './components/AdoptionCategory/AdoptionCategory.jsx'
import OurHistory from './components/OurHistory/OurHistory.jsx'
import ImageBanner from './components/ImageBanner/ImageBanner.jsx'


export default function Home() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
