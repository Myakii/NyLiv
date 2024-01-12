import React from "react";
import { Link } from "react-router-dom";
import "./ReportHeader.css";
import ReportForm from "../ReportForm/ReportForm";

export default function ReportHeader() {
  return (
    <header className="centered-marg-div">
      <h1 className="text-center">Je Signale</h1>

      <h3 className="text-center">
        Bienvenue dans la section "Je Signale" de notre site,
      </h3>
      <h3 className="text-center">
        dédiée à la protection et au bien-être des animaux.
      </h3>

      <h4 className="text-center pt-6">
        Nous croyons fermement que chaque être vivant mérite d'être traité avec
        respect et compassion. Cette section a été créée dans le but de
        permettre à nos visiteurs de signaler tout comportement abusif envers
        les animaux, car votre vigilance est cruciale pour assurer leur
        sécurité.
      </h4>

      <Link to="../ReportForm">
        <button className="btn-blue btn report-button">
          Je souhaite signaler
        </button>
      </Link>
    </header>
  );
}
