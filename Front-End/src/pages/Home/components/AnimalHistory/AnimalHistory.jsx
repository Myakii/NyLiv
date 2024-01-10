import React, { useEffect, useState } from "react";

import "./AnimalHistory.css";

export default function AnimalHistory() {
  const [animalHistory, setAnimalHistory] = useState([]);

  useEffect(() => {
    const fetchLove = async (love) => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/Pets/AnimalHistory.php`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ love: love }),
          }
        );
        const data = await response.json();

        if (love === "Oui") {
          setAnimalHistory(data);
        } else {
          console.error("Erreur : love invalide");
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchLove("Oui");
  }, []);

  return (
    <section className="animal-history centered-padding-div">
      <h3 className="text-center">Nos sourires du moment</h3>
      <article>
        {animalHistory && (
          <img
            src={`data:image/png;base64, ${animalHistory.img}`}
            alt={animalHistory.name}
          />
        )}
        <div className="container-animal-history">
          <h4>{animalHistory.name}</h4>
          <p>{animalHistory.description}</p>
          <button className="btn btn-orange">Voir Plus...</button>
        </div>
      </article>
    </section>
  );
}
