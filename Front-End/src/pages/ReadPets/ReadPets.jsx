import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import ModifyForm from "./components/ModifyForm";

export default function ReadPets() {
  const { id } = useParams();
  const [animalData, setAnimalData] = useState(null);

  useEffect(() => {
    fetch(
      import.meta.env.VITE_REACT_APP_API_URL +
        `NyLiv/Back-End/API/Pets/ReadPets.php?id=${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setAnimalData(data);
      });
  }, [id]);

  if (!animalData) {
    return <div>Chargement...</div>;
  }

  return (
    <div className="board_animal">
      <div className="info_animal">
        <h3>{animalData.name}</h3>
        <img
          src={`data:image/jpeg;base64,${animalData.img}`}
          alt={animalData.name}
        />{" "}
        <h3>Race:</h3>
        <p>{animalData.breed}</p>
        <h3>Âge:</h3>
        <p>{animalData.age}</p>
        <h3>Genre:</h3>
        <p>{animalData.genre}</p>
        <h3>Type:</h3>
        <p>{animalData.type}</p>
        <h3>Localisation:</h3>
        <p>{animalData.localisation}</p>
        <h3>Urgent:</h3>
        <p>{animalData.urgent}</p>
        <h3>Description:</h3>
        <p>{animalData.description}</p>
        <h3>Maison:</h3>
        <p>{animalData.house}</p>
        <h3>Chiens :</h3>
        <p>{animalData.dog}</p>
        <h3>Chats :</h3>
        <p>{animalData.cat}</p>
        <h3>Enfants :</h3>
        <p>{animalData.kids}</p>
        <h3>Lien :</h3>
        <a href={animalData.link}>{animalData.link}</a>
      </div>
      <div className="button_admin">
        <Link to={`/modification-formulaire/${id}`}>
          <button>Modifier</button>
        </Link>
      </div>
    </div>
  );
}
