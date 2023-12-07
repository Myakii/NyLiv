<?php
require_once './functions.php';

if(isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];
    read_pets($conn, $pets_id);
} else {
    echo "ID invalide.";
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['modify'])) {
    modify_pets($conn, $pets_id);
    header("Location:pageanimals.php?id=['id'];");
}
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

        <h2>Formulaire de modifications d'Animaux</h2>

        <form method="post" class="flex flex-col">
            <label for="name">Nom de l'animal:</label>
            <input type="text" name="name" onChange={handleInputChange} required /><br>

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

            <label="localisation">Localisation:</label>
            <input type="text" name="localisation" onChange={handleInputChange} required /><br>

            <label for="description">Description:</label>
            <textarea name="description" onChange={handleInputChange} required></textarea><br>

            <label for="urgent">Urgent:</label>

            <select name="urgent" onChange={handleInputChange}>
                <option value="Non">Non</option>
                <option value="Oui">Yes</option>
            </select><br>

            <button type="submit" name="modify" value="modify">
                Confirmer les modifications
            </button>
        </form>
    </div>
</body>

</html>