import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './test.css'
import { getAuth, signOut } from 'firebase/auth'

export default function FunctionNavigation() {

  const auth = getAuth();

  const handleSignOut = async () => {

    try {
      
      await signOut(auth);


    } catch (error) {

      console.log("Error déconnexion : ", error );

    }


  }

  const checkIfConnected = () => {

    console.log(auth.currentUser);


  };

  
  return (
    <div className='function-navigation centered-div'>

      <Link to='/adoption-formulaire'>Adoption Formulaire</Link>
      <Link to='/inscription'>Inscription</Link>
      <Link to='/connexion'>Connexion</Link>
      <button onClick={handleSignOut}>Déconnexion</button>
      <button onClick={checkIfConnected}>Voir si jsuis co</button>
      


    </div>
  )
}
