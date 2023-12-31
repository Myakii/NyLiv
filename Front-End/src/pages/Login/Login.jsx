import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const auth = getAuth();

  const handleEmail = (e) => {

    setEmail(e.target.value);

  }

  const handlePassword = (e) => {

    setPassword(e.target.value);

  }

  const register = (e) => {

    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        navigate('/');
  
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });

      useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    

  }

  // C'EST NORMAL QUE CA SCROLL JUSQU'EN BAS C'EST A CAUSE DU DEV TOOL
  
  return (
    <div className='login'>

      <img className='login-img'src='./Assets/DesignImg/loginDoggo.png' />


      <form className='login-form'>

        <header className='logo'>
          <Link to='/' ><img src='./Assets/Logo/NyLiv_Logo.png' /></Link>
          <h1 className='text-[#159DC0]'>Connexion</h1>
        </header>

        <div className='login-inputs'>
          <div className='input-mail flex flex-col'>
            <label htmlFor='login-email'>Email</label>
            <input type='email' id='login-email' name='email' onChange={handleEmail} autoComplete='email' />
          </div>

          <div className='input-password flex flex-col'>
            <label htmlFor='login-password'> Mot de Passe</label>
          
            <input type='password' id='login-password' name='password' onChange={handlePassword} />
          </div> 

        </div>
        
        <div className='bottom-section'>
          <nav className='nav-items'>
            <ul>

              <li className='nav-item'>
                
                <Link to='/'>
                <h4 className='text-[#159DC0] text-right'>Mot de passe oublié ?</h4>
                </Link>

              </li>

              <li className='nav-item'>

                <h4 className='flex gap-2 justify-end'>
                  Pas encore inscrit ? 
                  <Link to='/inscription'>
                    <h4 className='text-[#159DC0]'> Rejoignez-nous</h4>
                  </Link>  
                </h4>

              </li>

            </ul>
          </nav>
          <button className='btn btn-orange ml-auto' type='submit' name='submit' onClick={register}>Se connecter</button>

        </div>

      </form>

      





    </div>  
  )
}
