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
    const { name, type, checked, files } = e.target;
    const checkboxValue =
      type === "checkbox" ? (checked ? "Oui" : "Non") : e.target.value;

    if (name === "img" && files.length > 0) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setFormValues((prevValues) => ({
          ...prevValues,
          [name]: reader.result, // Stocke le contenu de l'image en base64
        }));
      };

      reader.readAsDataURL(files[0]); // Lit le contenu de l'image en base64
    } else {
      setFormValues((prevValues) => ({
        ...prevValues,
        [name]: checkboxValue,
      }));
    }
  };

  const handleUpdate = async (e) => {
    console.log("Valeur du formulaire:", formValues);
    e.preventDefault();

    const formData = new FormData();

    for (const key in formValues) {
      console.log(`Hello`);

      if (key === "img" && formValues[key] && formValues[key] instanceof File) {
        formData.append(key, formValues[key]);
      } else {
        formData.append(key, formValues[key]);
      }
    }

    console.log("Forme Data", formData);
    try {
      console.log("Here ?");
      const response = await fetch(
        import.meta.env.VITE_REACT_APP_API_URL +
          `nyliv/Back-End/API/adopt_form.php`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error(`Erreur HTTP! Statut : ${response.status}`);
      }

      const contentType = response.headers.get("content-type");
      if (contentType && contentType.indexOf("application/json") !== -1) {
        try {
          const responseData = await response.json();
          if (responseData.error) {
            console.error("Erreur côté serveur :", responseData.error);
          } else {
            console.log("Réponse JSON reçue :", responseData);
          }
        } catch (error) {
          console.error("Erreur lors de l'analyse de la réponse JSON :", error);

          // Si le corps de la réponse n'a pas été lu avec response.json(), lisez-le avec response.text()
          if (!response.bodyUsed) {
            console.log("Réponse complète :", await response.text());
          }
        }
      }
    } catch (error) {
      // Gérez les erreurs en conséquence
      console.error(
        "Une erreur s'est produite lors de l'envoi des données :",
        error
      );
    }
  };

  return (
    <div className="adopt-form">
      <div
        style={{ backgroundColor: "green", color: "white", padding: "10px" }}
      />
      <h2>Formulaire d'Ajout d'Animaux</h2>

      <form
        method="post"
        action="NyLiv/Back-End/API/adopt_form.php"
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
        <button type="submit" name="submit" onClick={handleUpdate}>
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
