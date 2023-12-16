<?php
require_once './functions.php';


add_pets($conn)

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <a href="listanimals.php">Retour</a>

    <div class="form_pets">

        <h2>Formulaire d'Ajout d'Animaux</h2>
        <form method="post" class="flex flex-col" enctype="multipart/form-data">
            <label for="name">Nom de l'animal:</label><br>
            <input type="text" name="name" required />

            <label for="img">Image:</label>
            <input type="file" name="img" required> <br>

            <label for="breed">Race:</label>
            <input type="text" name="breed" onChange={handleInputChange} required /><br>

            <label for="age">Âge:</label>
            <input type="number" name="age" onChange={handleInputChange} required /><br>

            <label for="urgent">Sexe:</label>
            <select name="genre" onChange={handleInputChange}>
                <option value="Femelle">Femelle</option>
                <option value="Male">Male</option>
            </select><br>

            <label for="type">Type:</label>
            <input type="text" name="type" onChange={handleInputChange} required /><br>

            <label for="localisation">Localisation:</label>
            <input type="text" name="localisation" onChange={handleInputChange} required /><br>

            <label for="description">Description:</label>
            <textarea name="description" onChange={handleInputChange} required></textarea><br>

            <label for="urgent">Urgent:</label>
            <select name="urgent" onChange={handleInputChange}>
                <option value="Non">Non</option>
                <option value="Oui">Oui</option>
            </select><br>

            <label for="compability">Compabilité:</label><br>
            <input type="checkbox" id="dog" name="dog" require checked />
            <label for="dog">Chiens</label><br>
            <input type="checkbox" id="cat" name="cat" require checked />
            <label for="cat">Chats</label><br>
            <input type="checkbox" id="kids" name="kids" require checked />
            <label for="kids">Enfants</label><br>

            <label for="house">Maison:</label> <br>
            <select name="house" onChange={handleInputChange}>
                <option value="Oui">Oui</option>
                <option value="Non">Non</option>
            </select><br>

            <input type="submit" name="submit" value="Envoyer">
        </form>
    </div>
</body>

</html>