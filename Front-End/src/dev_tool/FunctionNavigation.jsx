import React, { useEffect } from 'react'
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);



  
  return (
    <div className='admin-tool centered-marg-div'>

      <Link to='/adoption-formulaire'>
        <button className='btn btn-blue'>

          Adoption Formulaire
        </button>
       </Link>

       <Link to='/inscription'>
        <button className='btn btn-blue'>
          Inscription
        </button>
      </Link>

      <Link to='/connexion'>
        <button className='btn btn-blue'>
          Connexion
        </button>
      </Link>

      <Link to='/crashtestapi'>
        <button className='btn btn-orange'>
          Rosine
        </button>
      </Link>

      <Link to='/adoption'>
        <button className='btn btn-orange'>
          Adopter
        </button>
      </Link>
      
      <button className='btn btn-blue' onClick={handleSignOut}>Déconnexion</button>
      <button className='btn btn-blue' onClick={checkIfConnected}>Voir si jsuis co</button>
      <Button />

    </div>
  )
}
