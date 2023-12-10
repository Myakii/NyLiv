import React, { useState } from 'react'
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

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

  }


  
  return (
    <div className='login'>

      <form>
        <label htmlFor='email' >E-mail</label>
        <input type='email' name='email' onChange={handleEmail} />

        <label htmlFor='password'>Mot de Passe</label>
        <input type='password' name='password' onChange={handlePassword} />

        <input type='submit' name='submit' onClick={register} />

      </form>

    </div>  
  )
}
