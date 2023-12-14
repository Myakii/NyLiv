import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default function SignUp() {

    const auth = getAuth();
    const [email, setEmail] = useState("");
    const Navigate = useNavigate();
    const [password, setPassword] = useState("");
    const [cpassword, setCPassword] = useState("");


    const handleEmail = (e) => {

      setEmail(e.target.value);

    };

    const handlePassword = (e) => {

      setPassword(e.target.value);
      

    };

    const handleConfirmPassword = (e) => {

      setCPassword(e.target.value);

    };



    const register = (e) => {
      e.preventDefault();    


        if (password == cpassword) {

        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          console.log(user);
          Navigate("/");

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log("Erreur connexion :", errorMessage);
          // ..
        });

      } else {
        
        const errorMessage = "Les mots de passe ne sont pas identiques !";
        console.log(errorMessage);

      }

    };

    useEffect(() => {

    });

  return (
    <div className='sign-up'>
      <form>
        {/* <label htmlFor='firstname'>Prenom</label>
        <input type='text' name='firstname' onChange={handleFirstName} />

        <label htmlFor='lastname'>Nom</label>
        <input type='text' name='lastname' onChange={handleLastName} /> */}

        <label htmlFor='email-signup'>Email</label>
        <input type='email' id='email-signup' name='email' onChange={handleEmail} autoComplete='email'/>
        
        <label htmlFor='password-signup'>Saisir un mot de passe</label>
        <input type='password' id='password-signup' name='password' onChange={handlePassword} />

        <label htmlFor='cpassword-signup'>Veuillez confirmer votre mot de passe</label>
        <input type='password' id='cpassword-signup' name='cpassword' onChange={handleConfirmPassword} />

        <input type='submit' name='submit' onClick={register} />

      </form>

    </div>
  )

}
