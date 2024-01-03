import React, { useState } from "react";
import './AdoptForm.css'

// import axios from "axios";

const AdoptForm = () => {
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
      <header>
        <img src='./Assets/Logo/NyLiv_Logo.png' alt='Logo du site' className="navbar-nyliv-logo w-52" />
        <h1 className="text-[#F47D34]">Formulaire d'Ajout d'Animaux</h1>
        <h4>X</h4>
      </header>

      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="left-part">
          <div className="top-part">
            <div className="left-part-in-toppart flex flex-col gap-2">
              <label>
                <h4>Nom de l'animal</h4>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
              </label>
              <label>
                <h4>Race</h4>
                <input
                  type="text"
                  name="breed"
                  value={formData.breed}
                  onChange={handleInputChange}
                />
              </label>

              <label>
                <h4>Âge</h4>
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
                <h4>Localisation</h4>
                <input
                  type="text"
                  name="localisation"
                  value={formData.localisation}
                  onChange={handleInputChange}
                />
              </label>
            </div>

            <div className="right-part-in-toppart flex flex-col">
                <label>
                  <h4>Type</h4>
                  <RadioCheckboxGroup
                    name="type"
                    options={["Chien", "Chat", "NAC"]}
                    selectedOption={formData.radioButtons.type}
                    onChange={handleRadioChange}
                  />
                </label>
                <label>
                  <h4>Genre</h4>
                  <RadioCheckboxGroup 
                    name="genre"
                    options={["Femelle", "Male"]}
                    selectedOption={formData.radioButtons.genre}
                    onChange={handleRadioChange}
                  />
                </label>
                <label>
                  <h4>Maison</h4>
                  <RadioCheckboxGroup
                    name="house"
                    options={["Oui", "Non"]}
                    selectedOption={formData.radioButtons.house}
                    onChange={handleRadioChange}
                  />
                </label>
                <label>
                  <h4>Chien</h4>
                  <RadioCheckboxGroup
                  name="dog"
                  options={["Oui", "Non"]}
                  selectedOption={formData.radioButtons.dog}
                  onChange={handleRadioChange}
                  />
                </label>
                <label>
                  <h4>Chat</h4>
                  <RadioCheckboxGroup
                  name="cat"
                  options={["Oui", "Non"]}
                  selectedOption={formData.radioButtons.cat}
                  onChange={handleRadioChange}
                  />
                </label>
                <label>
                  <h4>Enfant</h4>
                  <RadioCheckboxGroup
                  name="kids"
                  options={["Oui", "Non"]}
                  selectedOption={formData.radioButtons.kids}
                  onChange={handleRadioChange}
                  />
                </label>
      
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  onChange={handleImageChange}
                  className="input-text"
                />
              
              </div>
            </div>
            
            <label>
              <h4>Description</h4>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                className="description"
              />
            </label>
          
        </div>

        <div className="right-part flex flex-col justify-between">
          <img src="" className="animal-profile-picture"/>
      
          <button className="btn-orange btn" type="submit">Ajouter un animal</button>
        </div>

      </form>

    </div>
  );
};

export default AdoptForm;
