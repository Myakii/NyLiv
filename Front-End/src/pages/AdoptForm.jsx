import React, { useState } from "react";
import axios from "axios";

const AdoptForm = () => {
  const RadioCheckboxGroup = ({ name, options, selectedOption, onChange }) => (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type="radio"
            name={name}
            value={option}
            checked={selectedOption === option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </div>
  );

  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",
    radioButtons: {
      type: "Chien",
      genre: "Femelle",
      urgent: "Non",
      house: "Non",
      dog: "Non",
      cat: "Non",
      kids: "Non",
    },
    localisation: "",
    description: "",
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

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({
          ...formData,
          img: reader.result,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("FormData content before sending:", formData);

    try {
      const formDataToSend = new URLSearchParams();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("breed", formData.breed);
      formDataToSend.append("age", formData.age);
      formDataToSend.append("type", formData.radioButtons.type);
      formDataToSend.append("genre", formData.radioButtons.genre);
      formDataToSend.append("urgent", formData.radioButtons.urgent);
      formDataToSend.append("house", formData.radioButtons.house);
      formDataToSend.append("dog", formData.radioButtons.dog);
      formDataToSend.append("cat", formData.radioButtons.cat);
      formDataToSend.append("kids", formData.radioButtons.kids);
      formDataToSend.append("localisation", formData.localisation);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("img", formData.img);

      console.log("FormData content before sending:", formDataToSend);

      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }NyLiv/Back-End/API/adopt_form.php`,
        formDataToSend
      );

      console.log("Server response:", response.data);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données :", error);
    }
  };
  return (
    <div className="adopt-form">
      <h2>Formulaire d'Ajout d'Animaux</h2>
      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        {" "}
        <label>
          Nom de l'animal:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <input
          type="file"
          accept="image/*"
          name="img"
          onChange={handleImageChange}
        />{" "}
        <label>
          Race :
          <input
            type="text"
            name="breed"
            value={formData.breed}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Âge :
          <input
            type="number"
            min={1}
            max={30}
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Type :
          <RadioCheckboxGroup
            name="type"
            options={["Chien", "Chat", "NAC"]}
            selectedOption={formData.radioButtons.type}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Genre :
          <RadioCheckboxGroup
            name="genre"
            options={["Femelle", "Male"]}
            selectedOption={formData.radioButtons.genre}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Maison :
          <RadioCheckboxGroup
            name="house"
            options={["Oui", "Non"]}
            selectedOption={formData.radioButtons.house}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Chien :
          <RadioCheckboxGroup
            name="dog"
            options={["Oui", "Non"]}
            selectedOption={formData.radioButtons.dog}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Chat :
          <RadioCheckboxGroup
            name="cat"
            options={["Oui", "Non"]}
            selectedOption={formData.radioButtons.cat}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Enfant :
          <RadioCheckboxGroup
            name="kids"
            options={["Oui", "Non"]}
            selectedOption={formData.radioButtons.kids}
            onChange={handleRadioChange}
          />
        </label>
        <label>
          Localisation :
          <input
            type="text"
            name="localisation"
            value={formData.localisation}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description :
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};
export default AdoptForm;
