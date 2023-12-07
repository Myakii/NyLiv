import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './test.css'
import { getAuth, signOut } from 'firebase/auth'
import { authContext, useAuth } from '../Auth';

export default function FunctionNavigation() {

  const auth = useAuth(authContext);
  const navigate = useNavigate();
  
  const authDeconnect = getAuth();
  
  const handleSignOut = () => {
      
    try {
      
      signOut(authDeconnect);
      navigate('/');
      

    } catch (error) {

      console.log(error);

    }
    
    
  }
  
  const checkIfConnected = () => {
    const user_information = auth;
    
    console.log(user_information.email)

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
