import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './test.css'
import { getAuth, signOut } from 'firebase/auth'
import { authContext, useAuth } from '../Auth';
import Button from './Button';


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
    
    try {

     console.log(user_information.email)
    
    } catch (error) {

      console.log("Vous n'êtes pas connecté");

    }

  };

  
  return (
    <div className='admin-tool centered-marg-div'>

      
       <button className='btn btn-blue'><Link to='/adoption-formulaire'>Adoption Formulaire</Link></button>
       <button className='btn btn-blue'><Link to='/inscription'>Inscription</Link></button>
      <button className='btn btn-blue'><Link to='/connexion'>Connexion</Link></button>
      <button className='btn btn-orange'><Link to='/crashtestapi'>Rosine</Link></button>
      <button className='btn btn-blue' onClick={handleSignOut}>Déconnexion</button>
      <button className='btn btn-blue' onClick={checkIfConnected}>Voir si jsuis co</button>
      <Button />


    </div>
  )
}
