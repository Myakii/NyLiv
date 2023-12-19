import React, { useState } from "react";

export default function AdoptForm() {
  const [formValues, setFormValues] = useState({
    name: "",
    breed: "",
    age: "",
    genre: "Femelle",
    type: "",
    localisation: "",
    description: "",
    urgent: "Non",
    house: "Non",
    dog: "Non",
    cat: "Non",
    kids: "Non",
    img: null,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const checkboxValue =
      type === "checkbox" ? (checked ? "Oui" : "Non") : value;

    if (name === "img" && files.length > 0) {
      const reader = new FileReader();

      reader.onload = function (event) {
        const imgValue = event.target.result;
        const base64String = imgValue.split(",")[1];
        const cleanedBase64 = btoa(base64String);

        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: {
            name: files[0].name,
            base64: cleanedBase64,
          },
        }));
      };

      reader.readAsDataURL(files[0]);
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checkboxValue,
      }));
    }
  };

  const handleUpdate = async (e) => {
    let response;
    let responseBody = "";

    e.preventDefault();
    try {
      response = await fetch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `NyLiv/Back-End/api/adopt_form.php`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formValues),
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP ! Statut : ${response.status}`);
      }

      // Utilisez soit response.json() soit response.text(), pas les deux
      responseBody = await response.text(); // Changez ici si vous avez besoin du texte brut

      const data = JSON.parse(responseBody); // Changez ici si vous avez besoin d'un objet JSON
      console.log("Server Response (Success):", data);
      // Continuez le traitement des données ou mettez à jour l'état selon les besoins
    } catch (error) {
      console.error("Error:", error.message);
      // Log the response object
      console.log("Server Response (Error):", response);

      // Ajouter le texte brut de la réponse à la console
      console.log("Server Response (Raw Text):", responseBody);
    }
  };

  return (
    <div className="adopt-form">
      <h2>Formulaire d'Ajout d'Animaux</h2>

      <form
        method="post"
        className="flex flex-col"
        encType="multipart/form-data"
      >
        <label htmlFor="name">Nom de l'animal:</label>
        <input type="text" name="name" onChange={handleInputChange} required />

        <label htmlFor="img">Image:</label>
        <input type="file" name="img" onChange={handleInputChange} />
        <label htmlFor="breed">Race:</label>
        <input type="text" name="breed" onChange={handleInputChange} required />
        <label htmlFor="age">Âge:</label>
        <input type="number" name="age" onChange={handleInputChange} required />
        <label htmlFor="urgent">Sexe:</label>
        <select name="genre" onChange={handleInputChange}>
          <option value="Femelle">Femelle</option>
          <option value="Male">Male</option>
        </select>

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
          <option value="Oui">Oui</option>
        </select>
        <label htmlFor="compability">Compabilité:</label>
        <input
          type="checkbox"
          id="dog"
          name="dog"
          onChange={handleInputChange}
        />
        <label htmlFor="dog">Chiens</label>
        <input
          type="checkbox"
          id="cat"
          name="cat"
          onChange={handleInputChange}
        />
        <label htmlFor="cat">Chats</label>
        <input
          type="checkbox"
          id="kids"
          name="kids"
          onChange={handleInputChange}
        />
        <label htmlFor="kids">Enfants</label>
        <label htmlFor="house">Maison:</label>
        <select name="house" onChange={handleInputChange}>
          <option value="Oui">Oui</option>
          <option value="Non">Non</option>
        </select>
        <button type="button" name="submit" onClick={handleUpdate}>
          Ajouter un animal
        </button>
      </form>
      <div className="flex flex-col">
        <p>Nom de l'animal: {formValues.name}</p>
        <p>Race: {formValues.breed}</p>
        <p>Âge: {formValues.age}</p>
        <p>Type: {formValues.type}</p>
        <p>Localisation: {formValues.localisation}</p>
        <p>Description: {formValues.description}</p>
        <p>Urgent: {formValues.urgent}</p>
        <p>Maison: {formValues.house}</p>
        <p>Chien: {formValues.dog}</p>
        <p>Chat: {formValues.cat}</p>
        <p>Enfants: {formValues.kids}</p>
        <p>
          Image:{" "}
          {formValues.img ? formValues.img.name : "Aucun fichier sélectionné"}
        </p>
      </div>
    </div>
  );
}
