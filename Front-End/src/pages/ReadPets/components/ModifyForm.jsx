import React, { useState } from "react";
import "./ModifyForm.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const ModifyForm = () => {
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
  const { id } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    age: "",

    radioButtons: {
      type: "",
      genre: "",
      urgent: "Non",
      house: "Non",
      dog: "Non",
      cat: "Non",
      kids: "Non",
      love: "Non",
    },
    img: "",
    localisation: "",
    description: "",
    link: "",
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
        const base64Data = reader.result.split("9j/")[1];
        {
          /* Extraction de la partie après les informations */
        }

        setFormData({
          ...formData,
          img: "/9j/" + base64Data,
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Voir la Data
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
      formDataToSend.append("love", formData.radioButtons.love);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("img", formData.img);
      formDataToSend.append("link", formData.link);

      console.log("FormData content before sending:", formDataToSend);

      const response = await axios.post(
        `${
          import.meta.env.VITE_REACT_APP_API_URL
        }NyLiv/Back-End/API/Pets/ModifiyAnimalPets.php?id=${id}`,
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
        <img
          src="./Assets/Logo/NyLiv_Logo.png"
          alt="Logo du site"
          className="navbar-nyliv-logo w-52"
        />
        <h1 className="text-[#F47D34]">Formulaire de modification d'Animal</h1>
        <h4>X</h4>
      </header>

      <form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
        <div className="top-part flex flex-row">
          <div className="left-part flex flex-col">
            <img src="" className="animal-profile-picture" />
          </div>

          <div className="mid-part">
            <div className="left-part-in-midpart flex flex-col gap-2">
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

              <label>
                <h4>Ajouter une image</h4>
                <input
                  type="file"
                  accept="image/*"
                  name="img"
                  onChange={handleImageChange}
                  className="input-text"
                />
              </label>
            </div>

            <div className="right-part-in-midpart flex flex-col gap-16">
              <div className="top-part flex flex-row gap-16">
                <div className="left-part flex flex-col">
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
                </div>

                <div className="right-part flex flex-col">
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
                </div>
              </div>

              <div className="TypeUrgent">
                <label>
                  <h4>Type d'urgence</h4>
                  <RadioCheckboxGroup
                    name="urgent"
                    options={["FAD", "SOS", "Vétéran", "Non"]}
                    selectedOption={formData.radioButtons.urgent}
                    onChange={handleRadioChange}
                  />
                </label>
              </div>
              <label>
                <h4>Coup de coeur</h4>
                <RadioCheckboxGroup
                  name="love"
                  options={["Oui", "Non"]}
                  selectedOption={formData.radioButtons.love}
                  onChange={handleRadioChange}
                />
              </label>
            </div>
          </div>
        </div>

        <div className="bottom-part">
          <label>
            <h4>Description</h4>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="description"
            />
          </label>

          <div className="right-part flex flex-col gap-16">
            <label>
              <h4>Lien</h4>
              <input
                type="text"
                name="link"
                value={formData.link}
                onChange={handleInputChange}
              ></input>
            </label>
            <button className="btn-orange btn" type="submit">
              Confirmation la modification
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ModifyForm;
