import React from "react";
import "./OurHistory.css";

export default function OurHistory() {
  const ourTextHistory =
    "    En 2023, après s'être rencontrés pour la première fois, Luc et Rosine ont découvert un point commun : leur amour pour les animaux. Possédant chacun un chien, leur proximité a révélé un aspect sombre de la réalité : les abandons et la maltraitance que peuvent subir ces créatures. Afin de soutenir les associations et refuges dans la recherche de foyers aimants pour ces animaux, Luc et Rosine ont décidé de créer un site dédié aux animaux abandonnés. Leur objectif est d'accentuer les aspects positifs et de faciliter les adoptions par des familles bienveillantes...";

  return (
    <section className="our-history centered-padding-div">
      <article>
        <h4>Notre histoire</h4>

        <p>{ourTextHistory}</p>

        <button className="btn btn-blue">Voir plus...</button>
      </article>

      <div className="our-history-img">img </div>
    </section>
  );
}
