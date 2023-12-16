<?php
require_once './functions.php';

// Assurez-vous que l'ID est présent dans l'URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];

    // Vérifiez si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['modify'])) {

        // Récupérez les valeurs du formulaire et effectuez la modification
        $pets_name = isset($_POST['name']) ? $_POST['name'] : '';
        $pets_breed = isset($_POST['breed']) ? $_POST['breed'] : '';
        $pets_age = isset($_POST['age']) ? $_POST['age'] : '';
        $pets_genre = isset($_POST['genre']) ? $_POST['genre'] : '';
        $pets_type = isset($_POST['type']) ? $_POST['type'] : '';
        $pets_localisation = isset($_POST['localisation']) ? $_POST['localisation'] : '';
        $pets_urgent = isset($_POST['urgent']) ? $_POST['urgent'] : '';
        $pets_description = isset($_POST['description']) ? $_POST['description'] : '';
        $pets_house = isset($_POST['house']) ? $_POST['house'] : '';
        $pets_dog = isset($_POST['dog']) ? 'Oui' : 'Non';
        $pets_cat = isset($_POST['cat']) ? 'Oui' : 'Non';
        $pets_kids = isset($_POST['kids']) ? 'Oui' : 'Non';

        // Gérez l'image téléchargée
        $img_content = file_get_contents($_FILES['img']['tmp_name']);
        $base64_image = base64_encode($img_content);

        // Appel à la fonction modify_pets
        modify_pets($conn, $pets_id, $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_urgent, $pets_description, $base64_image, $pets_house, $pets_dog, $pets_cat, $pets_kids);
    }
}

?>



<!DOCTYPE html>
<html lang="fr">

<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier un animal</title>
</head>

<body>
    <a href="listanimals.php">Retour</a>
    <h2>Modifier un animal</h2>
    <form method="post" enctype="multipart/form-data">
        <!-- ... (votre formulaire ici) -->
        <label for="name">Nom de l'animal:</label>
        <input type="text" name="name" value="" required /><br>

        <label for="img">Sélectionnez la nouvelle image :</label>
        <input type="file" name="img" required> <br>


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

        <label for="compability">Compabilité:</label><br>
        <input type="checkbox" id="dog" name="dog" require checked />
        <label for="dog">Chiens</label><br>
        <input type="checkbox" id="cat" name="cat" require checked />
        <label for="cat">Chats</label><br>
        <input type="checkbox" id="kids" name="kids" require checked />
        <label for="kids">Enfants</label><br>

        <label for="house">Maison:</label> <br>
        <select name="house">
            <option value="Oui">Oui</option>
            <option value="Non">Non</option>
        </select><br>


        <button type="submit" name="modify" value="modify">
            Confirmer les modifications
        </button>
    </form>
</body>

</html>