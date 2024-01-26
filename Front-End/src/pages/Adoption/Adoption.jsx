import React, { useEffect, useState } from "react";
import "./css/Adoption.css";
import "./css/AnimalList.css";
import "./css/AnimalInformation.css";
import "./css/Filter.css";
import AdoptionHeader from "./components/AdoptionHeader";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ClearIcon from "@mui/icons-material/Clear";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import { Link } from "react-router-dom";

export default function Adoption() {
  const [animalCategory, whichAnimalCategory] = useState("Dog");
  const [animalList, setAnimalList] = useState([]);
  const [showAnimal, setShowAnimal] = useState([]);
  const [currentAnimalId, setCurrentAnimalId] = useState(1);

  const checkCategory = (e) => {
    console.log(e.target.value);

    whichAnimalCategory(e.target.value);
  };

  const AnimalTest = async (e) => {
    parseInt(e.currentTarget.id);
    setCurrentAnimalId(e.currentTarget.id);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/Pets/ListAnimal.php`
        );
        const data = await response.json();
        const animalArrayData = data[currentAnimalId - 1];
        console.log(animalArrayData);
        setShowAnimal([animalArrayData]);
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };
    fetchData();
  }, [currentAnimalId]);

  useEffect(() => {
    console.log(animalCategory);
    if (animalCategory == "Dog") {
      document.getElementById("selected").style.gridColumn = 1;
    } else if (animalCategory == "Cat") {
      document.getElementById("selected").style.gridColumn = 2;
    } else {
      document.getElementById("selected").style.gridColumn = 3;
    }
  }, [animalCategory]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/Pets/ListAnimal.php`
        );
        const data = await response.json();

        for (let i = 0; i < data.length; i++) {
          console.log(data[i].type);

          if (animalCategory == "Dog") {
            const dogsList = data.filter((type) => type.type == "Chien");
            setAnimalList(dogsList);
          } else if (animalCategory == "Cat") {
            const catsList = data.filter((type) => type.type == "Chat");
            setAnimalList(catsList);
          } else {
            const otherList = data.filter(
              (type) => type.type != "Chien" && type.type != "Chat"
            );
            setAnimalList(otherList);
          }
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };
    fetchData();
  }, [animalCategory]);

  console.log(animalList);
  console.log(showAnimal);

  return (
    <div className="adoption-interface">
      <AdoptionHeader />

      <div className="animal-list">
        <div className="category">
          <ul className="category-items">
            <input
              type="image"
              src="./Assets/DesignImg/DogCategory.png"
              className="category-logo dog"
              onClick={checkCategory}
              value="Dog"
            />

            <input
              type="image"
              src="./Assets/DesignImg/CatCategory.png"
              className="category-logo cat"
              onClick={checkCategory}
              value="Cat"
            />

            <input
              type="image"
              src="./Assets/DesignImg/NacCategory.png"
              className="category-logo nac"
              onClick={checkCategory}
              value="Nac"
            />
          </ul>

          <div className="dynamic-bar-selection">
            <div className="dynamic-bar-selection" id="selected" />
          </div>
        </div>

        {animalList.length > 0 ? (
          <div className="display-animals">
            {animalList.map((pet) => (
              <div
                className="animal-card"
                id={pet.id}
                key={pet.id}
                onClick={AnimalTest}
              >
                <img src={`data:image/jpeg;base64,${pet.img}`} alt={pet.name} />
                <div className="animal-preview">
                  <p>
                    {pet.name}
                    {pet.genre == "Femelle" ? <FemaleIcon /> : <MaleIcon />}
                  </p>

                  <p>{pet.age} ans</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="display-animals">
            <p>Aucun animal trouvé</p>
          </div>
        )}
      </div>

      {showAnimal.length > 0 ? (
        <div className="animal-photos">
          {showAnimal.map((pet) => (
            <img
              src={`data:image/jpeg;base64,${pet.img}`}
              alt={pet.name}
              className="animal-photo"
            />
          ))}
        </div>
      ) : (
        <div className="animal-photos"></div>
      )}

      {showAnimal.length > 0 ? (
        // Partie de l'animal choisi selon l'ID
        <div className="animal-information scroll overflow-y-scroll">
          {showAnimal.map((pet) => (
            <div>
              <h2>{pet.name}</h2>
              <h4>
                {pet.type} - {pet.genre}
              </h4>
              <h4>
                {pet.breed} - {pet.age} ans
              </h4>

              <p>Compatibilité :</p>
              <ul className="compatibility">
                <li>Chat : {pet.cat}</li>
                <li>Chien : {pet.dog}</li>
                <li>Enfants : {pet.kids}</li>
                <li>Urgent : {pet.urgent}</li>
                <li>Maison : {pet.house}</li>
              </ul>
              <p>Localisation : {pet.localisation}</p>

              <h4>Description</h4>
              <p className="text-[#000000]">{pet.description}</p>
              <p>Découvrez l'animal sur un site officiel :</p>
              <a href={pet.link}>{pet.link}</a>
            </div>
          ))}
        </div>
      ) : (
        <div className="animal-information scroll overflow-y-scroll"></div>
      )}

      <button className="btn-orange btn adoption-button">
        <Link to="/formulaire-adoption">Je veux l'adopter !</Link>
      </button>

      <FilterAltIcon className="filter-icon" />

      <div className="filter-window" id="filter">
        <div className="filter-interface" id="filter">
          <a href="#">
            <ClearIcon className="clear-icon-filter" sx={{ fontSize: 56 }} />
          </a>
          <div className="top-part">
            <h3>Age</h3>
            <h3>Taille (petit moyen grand)</h3>
            <h3>Race (if it's cat shows cat race / dog = dog race)</h3>
            <h3>Sexe</h3>
            <h3>Localisation</h3>
            <h3>Compatibilité</h3>
          </div>

          <div className="bottom-part">
            <button className="btn-orange btn w-80">Tout effacer</button>
            <button className="btn-orange btn w-80">Confirmer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
