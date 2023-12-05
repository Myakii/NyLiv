import React, { useEffect, useState } from "react";

export default function AdoptForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    breed: "",
    age: "",
    type: "",
    localisation: "",
    description: "",
    urgent: "Non",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updatedData = Object.fromEntries(
      Object.entries(formValues).map(([key, value]) => [
        key,
        value === "" ? null : value,
      ])
    );

    fetch(
      import.meta.env.VITE_REACT_APP_API_URL +
        `NyLiv/Back-End/api/adopt_form.php`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data)) // Vérifiez la réponse renvoyée par le serveur
      .catch((error) => console.error("Erreur:", error));
  };

  return (
    <div className="adopt-form centered-div">
      <h2>Formulaire d'Ajout d'Animaux</h2>

      <form method="post" className="flex flex-col">
        <label htmlFor="name">Nom de l'animal:</label>
        <input type="text" name="name" onChange={handleInputChange} required />

        <label htmlFor="breed">Race:</label>
        <input type="text" name="breed" onChange={handleInputChange} required />

        <label htmlFor="age">Âge:</label>
        <input type="number" name="age" onChange={handleInputChange} required />

        <label htmlFor="type">Type:</label>
        <input type="text" name="type" onChange={handleInputChange} required />

        <label htmlFor="localisation">Localisation:</label>
        <input
          type="text"
          name="localisation"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="description">Description:</label>
        <textarea
          name="description"
          onChange={handleInputChange}
          required
        ></textarea>

        <label htmlFor="urgent">Urgent:</label>

        <select name="urgent" onChange={handleInputChange}>
          <option value="Non">Non</option>
          <option value="Oui">Yes</option>
        </select>

        <button type="submit" name="submit" onClick={handleUpdate}>
          Ajouter un animal
        </button>
      </form>
      <div className="flex flex-col">
        <p>{formValues.name}</p>
      </div>
    </div>
  );
}
