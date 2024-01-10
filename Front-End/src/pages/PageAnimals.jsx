import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PageAnimals() {
  const [animalList, setAnimalList] = useState([]);

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
    <div>
      {animalList.length > 0 ? (
        <div className="grid_pets">
          {animalList.map((pet) => (
            <div className="place_name" key={pet.id}>
              <Link to={`listedesanimaux/${pet.id}`}>
                <h2>{pet.name}</h2>
                <img src={`data:image/jpeg;base64,${pet.img}`} alt={pet.name} />
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <p>Aucun animal trouvé.</p>
      )}
    </div>
  );
}
