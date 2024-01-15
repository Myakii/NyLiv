import React, { useEffect, useState } from 'react'
import './Adoption.css'
import AdoptionHeader from './components/AdoptionHeader'
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import ClearIcon from '@mui/icons-material/Clear';



export default function Adoption() {

  const [animalCategory, whichAnimalCategory] = useState("Dog");
  const [animalList, setAnimalList] = useState([]);
  
  const checkCategory = (e) => {
    console.log(e.target.value);
    
    whichAnimalCategory(e.target.value);
    
  }

  useEffect(() => {
        
  const fetchData = async () => {

      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/Pets/ListAnimal.php`
        );
        const data = await response.json();
        const animalArrayData = data[currentAnimalId - 1]
        console.log(animalArrayData)
        setShowAnimal(animalArrayData)
        
        } catch (error) {
      
        console.error("Erreur lors de la récupération des données", error);

        }
  }
  fetchData();  
  
}, [currentAnimalId])


  useEffect(() => {
        
    console.log(animalCategory)
    if (animalCategory == "Dog") {

      document.getElementById("selected").style.gridColumn = 1;


    } else if (animalCategory == "Cat") {

      document.getElementById("selected").style.gridColumn = 2;
      

    } else {

      document.getElementById("selected").style.gridColumn = 3;

    }


  }, [animalCategory])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/Pets/ListAnimal.php`
        );
        const data = await response.json();
        setAnimalList(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };
    fetchData();
  }, []);


  return (
    <div className='adoption-interface'>

      <AdoptionHeader />

      <div className='animal-list'>
        
        <div className='category'>

          <ul className='category-items'>

            <input type="image" src="./Assets/DesignImg/DogCategory.png" className='category-logo dog' onClick={checkCategory} value='Dog' />

   
            <input type="image" src="./Assets/DesignImg/CatCategory.png" className='category-logo cat' onClick={checkCategory} value='Cat' />

          

            <input type="image" src="./Assets/DesignImg/NacCategory.png" className='category-logo nac' onClick={checkCategory} value='Nac' />

          </ul>

          <div className='dynamic-bar-selection'>
            <div className='dynamic-bar-selection' id='selected' />

          </div>

        </div>
     
        <div className='display-animals'>

            {animalList.map((pet) => (
              
      
              
    
            <div className='animal-card'>
              
              <img src={`data:image/jpeg;base64,${pet.img}`} alt={pet.name} />
              <div className='animal-preview'>
                <h4>{pet.name}</h4>
                <p>{pet.age}</p>
            
              </div>
                
            </div>  

            ))}

          <div className='animal-card'>
            <img src='./Assets/Animals/Xixi.jpeg' />
              <div className='animal-preview'>

                <h4>Xixi</h4>
                <p>2 ans</p>

              </div>
            
          </div>
        
        </div>
       
      </div>
        
      <div className='animal-photos'>
        <img src='./Assets/Animals/Xixi.jpeg' className='animal-photo' />
        

      </div>


      <div className='animal-information scroll overflow-y-scroll'>

        <h2>Xixi</h2>
        <h4>Chien - Femelle</h4>
        <h4>Yorkshire - 2 ans</h4>
        
        <p>Compatibilité :</p>
        <ul className='compatibility'>

          <li>Chat</li>
          <li>Chien</li>
          <li>Enfants</li>
          <li>Urgent</li>
          <li>Maison</li>

        </ul>
        <p>Saint-Maur-Des-Fossés</p>
        
        <h4>Description</h4>
        <div className=''>
          <p className='text-[#000000]'>J'aime trop raconter ma putain de vie PTDR j'ai trop de choses à dire
            en plus là chui omega frustré par les travaux, par la vie en général
            wsh vasy c'est quoi ca la vie adulte de devoir travailler et gagner de l'argent
            putain moi jpensais pas ct comme ca maintenant jv devoir bosser vasy je peux
            pas etre streamer comme ca je fais ce qui me plait MDRRR mais wsh chui un raté
            jveux devenir streameur alors que chui low master de ces morts bon ok j'arrete
            ct juste pour faire un long texte à la base bon je vais continuer le texte  long parce
            que ca me fait tres tres rire 
          </p>
        </div>


      </div>

      <button className='btn-orange btn adoption-button'>Je veux l'adopter !</button>
      
      <a href='#filter' className='filter-icon-slot'><FilterAltIcon className='filter-icon' /></a>

      <div className='filter-window' id='filter'>

        <div className='filter-interface' id='filter'>
          <a href='#'><ClearIcon className='clear-icon-filter' sx={{ fontSize: 56 }}/></a>
          <div className='top-part'>
            
            <h3>Age</h3>
            <h3>Taille (petit moyen grand)</h3> 
            <h3>Race (if it's cat shows cat race / dog = dog race)</h3>
            <h3>Sexe</h3>
            <h3>Localisation</h3>
            <h3>Compatibilité</h3>

          </div>

          <div className='bottom-part'>
            <button className='btn-orange btn w-80'>Tout effacer</button>
            <button className='btn-orange btn w-80'>Confirmer</button>
          </div>

        </div>

      </div>

    </div>
  )
}
