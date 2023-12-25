import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './SignUp.css'

export default function SignUp() {

    const auth = getAuth();
    const Navigate = useNavigate();

    const [formValues, setFormValues] = useState({
      firstname: "",
      lastname: "",
      email: "",
      numberphone: "",
      password: "",
      cpassword: "",
    });

    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormValues((prevValues) => ({

        ...prevValues,
        [name]: value,

      }));
    };

    const handleUpdate = (e) => {
      e.preventDefault();
      const updatedData = Object.fromEntries(
        Object.entries(formValues).map(([key, value]) => [
          key,
          value === "" ? null : value,

        ])
      );

        if (formValues.password == formValues.cpassword) {

          createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
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
      
      }
    

 

    useEffect(() => {

    });

  return (
    <div className='sign-up'>

      <img className='signup-img' src='./Assets/DesignImg/SignUpKitty.png' />

      <form className='signup-form' >
      
        <header className='logo'>
          <Link to='/' ><img src='./Assets/Logo/NyLiv_Logo.png' /></Link>
          <h1 className='text-[#159DC0]'>Inscription</h1>
        </header>

        <div className='signup-inputs'>

          <div className='forms-group flex flex-row'>

            <div className='input-firstname flex flex-col'>
              <label htmlFor='firstname'>Prenom</label>
              <input type='text' name='firstname' onChange={handleInputChange}/>
            </div>

            <div className='input-lastname flex flex-col'>
              <label htmlFor='lastname'>Nom</label>
              <input type='text' name='lastname' onChange={handleInputChange}/>
            </div>

          </div>   

          <div className='forms-group flex flex-row'>
             
            <div className='input-mail flex flex-col'>
              <label htmlFor='email-signup'>Email</label>
              <input type='email' id='email-signup' name='email' onChange={handleInputChange} autoComplete='email'/>
            </div>

            <div className='input-phone flex flex-col'>
              <label htmlFor='phone-signup'>Numéro de téléphone</label>
              <input type='tel' id='phone-signup' name='tel' pattern="[0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2} [0-9]{2}" onChange={handleInputChange}/>


            </div>
            
          </div>  
          <div className='input-password flex flex-col'>
              <label htmlFor='password-signup'>Saisir un mot de passe</label>
              <input className ='pass-inputs' type='password' id='password-signup' name='password' onChange={handleInputChange} />
          </div>    
          <div className='input-cpassword flex flex-col'>
            <label htmlFor='cpassword-signup'>Veuillez confirmer votre mot de passe</label>
            <input className ='pass-inputs' type='password' id='cpassword-signup' name='cpassword' onChange={handleInputChange} />
          </div>

        </div>

        <div className='bottom-section'>

          <nav className='nav-items'>

            <ul>

              <li className='nav-item'>

                <h4 className='flex gap-2 justify-end'>
                  Vous avez déjà un compte ?
                  <Link to='/connexion'>
                    <h4 className='text-[#159DC0]'>Connectez-vous</h4>
                  </Link>
                </h4>

              </li>

            </ul>

          </nav>

          <button className='btn btn-orange ml-auto' type='submit' name='submit' onClick={handleUpdate}> S'inscrire </button>

        </div>

      </form>

    </div>
  )

}
