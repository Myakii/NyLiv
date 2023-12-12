<?php
require_once './functions.php';

// Assurez-vous que l'ID est présent dans l'URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];

    // Vérifiez si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['modify']) && isset($_FILES['img'])) {
    
        // Récupérez les valeurs du formulaire
        $pets_name = isset($_POST['name']) ? $_POST['name'] : '';
        $pets_breed = isset($_POST['breed']) ? $_POST['breed'] : '';
        $pets_age = isset($_POST['age']) ? $_POST['age'] : '';
        $pets_genre = isset($_POST['genre']) ? $_POST['genre'] : '';
        $pets_type = isset($_POST['type']) ? $_POST['type'] : '';
        $pets_localisation = isset($_POST['localisation']) ? $_POST['localisation'] : '';
        $pets_urgent = isset($_POST['urgent']) ? $_POST['urgent'] : '';
        $pets_description = isset($_POST['description']) ? $_POST['description'] : '';

        // Gérez l'image téléchargée
        $file_name = $_FILES['img']['name'];
        $file_tmp = $_FILES['img']['tmp_name'];
        $file_type = $_FILES['img']['type'];
        $file_size = $_FILES['img']['size'];

        // Emplacement de stockage des images (vous devrez adapter cela à votre structure)
        $target_dir = "uploads/";
        $target_file = $target_dir . basename($file_name);

        // Déplacez l'image téléchargée vers le répertoire cible
        move_uploaded_file($file_tmp, $target_file);

        // Appel à la fonction modify_pets
        modify_pets($conn, $pets_id, $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_urgent, $pets_description, $target_file);
    } else {
        // Si le formulaire n'a pas été soumis
        die("Erreur");
    }
} else {
    die("ID invalide.");
}

?>

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un animal</title>
</head>

<body>
    <h2>Modifier un animal</h2>
    <form method="post" action="" enctype="multipart/form-data">
        <label for="nouvelleImage">Sélectionnez la nouvelle image :</label>
        <input type="file" name="img" accept="image/*" required />
        
        <label for="name">Nom de l'animal:</label>
        <input type="text" name="name" value="" required /><br>

        <label for="breed">Race:</label>
        <input type="text" name="breed" value="" required /><br>

        <label for="age">Âge:</label>
        <input type="number" name="age" value="" required /><br>

        <label for="genre">Sexe:</label>
        <select name="genre">
            <option value="Femelle">Femelle</option>
            <option value="Male">Male</option>
        </select><br>

        <label for="type">Type:</label>
        <input type="text" name="type" value="" required /><br>

        <label for="localisation">Localisation:</label>
        <input type="text" name="localisation" value="" required /><br>

        <label for="description">Description:</label>
        <textarea name="description" required></textarea><br>

        <label for="urgent">Urgent:</label>
        <select name="urgent">
            <option value="Non">Non</option>
            <option value="Oui">Oui</option>
        </select><br>

        <button type="submit" name="modify" value="modify">
            Confirmer les modifications
        </button>
    </form>
</body>

</html>
