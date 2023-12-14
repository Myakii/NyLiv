import React from 'react'
import './AnimalHistory.css'

export default function AnimalHistory() {


  
  const animalHistoryText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
  const nameAnimal = 'Xixi'
   
  return (
    <section className='animal-history centered-padding-div'>

      <h3 className='text-center'>Nos sourires du moment</h3>
    
      <article>
        <img src='./' />

        <div className='container-animal-history'>

          <h4>{nameAnimal}</h4>
          <p>{animalHistoryText}</p>
          <button className='btn btn-orange'>Voir Plus...</button>


        </div>
      </article>
    </section>
  )
}
