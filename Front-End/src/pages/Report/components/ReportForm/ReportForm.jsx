import React, { useState } from "react";
import "./ReportForm.css";
import axios from "axios";

export default function ReportForm() {
  const RadioCheckboxGroup = ({ name, options, selectedOption, onChange }) => (
    <div className="flex flex-row gap-7">
      {options.map((option) => (
        <label key={option} className="checkbox-label flex flex-row gap-5">
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
            className="checkbox-input"
          />
          <p>{option}</p>
        </label>
      ))}
    </div>
  );

  const [formData, setFormData] = useState({
    name: "",
    firstname: "",
    email: "",
    phone: "",
    date: "",
    reportingaddress: "",
    text: "",

    radioButtons: {
      subject: "",
      choiceofvisibility: "",
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRadioChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      radioButtons: {
        ...formData.radioButtons,
        [name]: value,
      },
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64Data = reader.result.split("9j/")[1];
      setFormData({
        ...formData,
        img: "/9j/" + base64Data,
      });
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("Data to be sent:", formData);
      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }NyLiv/Back-End/API/Pets/ReportFormAnimals.php`,
        formData
      );

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <div className="ReportFormAnimals">
      <h1>Formulaire de signalement</h1>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <label>
          <h4> Votre nom </h4>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> Votre Prénom </h4>
          <input
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> Votre mail </h4>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> Votre numéro de téléphone </h4>
          <input
            type="tel"
            name="phone"
            pattern="0[1697]([0-9]{2}){4}"
            placeholder="Numéro de téléphone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> La raison de votre signalement </h4>
          <RadioCheckboxGroup
            name="subject"
            options={["Maltraitance", "Zoophilie"]}
            selectedOption={formData.radioButtons.subject}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          <h4> La date du signalement </h4>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> L'adresse du signalement </h4>
          <input
            type="text"
            name="reportingaddress"
            value={formData.reportingaddress}
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4> Description </h4>
          <textarea
            type="text"
            name="text"
            value={formData.text}
            placeholder="Toute information est importante, écrivez ici le moindre détails qui pourrait aider nos enquêteurs."
            onChange={handleInputChange}
          />
        </label>
        <label>
          <h4>
            {" "}
            Dans le cas d'une procédure juridiciaire engagée par nos services,
            nous vous remercions de nous indiquer si :{" "}
          </h4>
          <RadioCheckboxGroup
            name="choiceofvisibility"
            options={[
              "Vous nous autoriser à transmettre votre témoignage aux autorités",
              "Vous souhaitez rester anonyme",
            ]}
            selectedOption={formData.radioButtons.choiceofvisibility}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          <h4>Ajouter une image si besoin</h4>
          <input
            type="file"
            accept="image/*"
            name="img"
            onChange={handleImageChange}
            className="input-text"
          />
        </label>
        <button className="btn-orange btn" type="submit">
          Valider
        </button>
      </form>
    </div>
  );
}
