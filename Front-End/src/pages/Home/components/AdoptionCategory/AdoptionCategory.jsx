import React, { useEffect, useState } from "react";
import InfoIcon from "@mui/icons-material/Info";
import "./AdoptionCategory.css";

export default function AdoptionCategory() {
  const [imgSrcDog, setImgSrcDog] = useState("");
  const [imgSrcCat, setImgSrcCat] = useState("");
  const [imgSrcNAC, setImgSrcNAC] = useState("");

  useEffect(() => {
    const fetchData = async (type) => {
      try {
        const response = await fetch(
          import.meta.env.VITE_REACT_APP_API_URL +
            `NyLiv/Back-End/API/adopt_category.php`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ type: type }),
          }
        );
        const data = await response.json();
        if (type === "chien") {
          setImgSrcDog(data.img);
        } else if (type === "chat") {
          setImgSrcCat(data.img);
        } else if (type === 'nac') {
          setImgSrcNAC(data.img);
        }
      } catch (error) {
        console.error("Erreur lors de la récupération des données", error);
      }
    };

    fetchData("chien"); // Charger l'image de chien
    fetchData("chat"); // Charger l'image de chat
    fetchData("nac"); // Charger l'image de nac
  }, []);
  return (
    <section className="adoption-category centered-padding-div">
      <h3 className="text-center">Nos catégories</h3>

      <div className="display-card">
        <div className="animal-card-home">
          <div className="card-img">
            {imgSrcDog && (
              <img src={`data:image/png;base64,${imgSrcDog}`} alt="" />
            )}{" "}
          </div>
          <button className="btn btn-blue">Chiens</button>
        </div>

        <div className="animal-card-home">
          <div className="card-img">
            {" "}
            {imgSrcCat && (
              <img src={`data:image/png;base64,${imgSrcCat}`} alt="" />
            )}
          </div>
          <button className="btn btn-orange">Chats</button>
        </div>

        <div className="animal-card-home">
          <div className="card-img">            {" "}
            {imgSrcNAC && (
              <img src={`data:image/png;base64,${imgSrcNAC}`} alt="" />
            )}</div>
          <button className="btn btn-blue">NAC</button>
        </div>

        <div className="animal-card-home">
          <div className="card-img">img</div>
          <div className="information-button">
            <button className="btn btn-orange">FAD</button>
            <InfoIcon
              className="info-icon info-btn-blue"
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <div className="animal-card-home">
          <div className="card-img">img</div>
          <div className="information-button">
            <button className="btn btn-blue">SOS</button>
            <InfoIcon
              className="info-icon info-btn-orange"
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>

        <div className="animal-card-home">
          <div className="card-img">img</div>

          <div className="information-button">
            <button className="btn btn-orange">Vétéran</button>
            <InfoIcon
              className="info-icon info-btn-blue"
              sx={{ fontSize: 50 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
