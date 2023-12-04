<?php

$pdo = new PDO("mysql:host=localhost:3306; dbname=nyliv", "root", "");
$method = filter_input(INPUT_SERVER, "REQUEST_METHOD");


// CRUD FORM FOR PETS

function form_pets($pdo)
{
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if (!empty($_POST['name']) && !empty($_POST['breed']) && !empty($_POST['age']) && !empty($_POST['type']) && !empty($_POST['location']) && !empty($_POST['urgent']) && !empty($_POST['description'])) {
            $name = $_POST['name'];
            $breed = $_POST['breed'];
            $age = $_POST['age'];
            $type = $_POST['type'];
            $location = $_POST['location'];
            $urgent = $_POST['urgent'];
            $description = $_POST['description'];

            // Insertion de données
            $stmt = $pdo->prepare("INSERT INTO pets (name, breed, type, age, location, description, urgent) VALUES (:name, :breed, :type, :age, :location, :description, :urgent)");
            $stmt->bindParam(':name', $name, PDO::PARAM_STR);
            $stmt->bindParam(':breed', $breed, PDO::PARAM_STR);
            $stmt->bindParam(':type', $type, PDO::PARAM_STR);
            $stmt->bindParam(':age', $age, PDO::PARAM_INT);
            $stmt->bindParam(':location', $location, PDO::PARAM_STR);
            $stmt->bindParam(':description', $description, PDO::PARAM_STR);
            $stmt->bindParam(':urgent', $urgent, PDO::PARAM_STR);

            if ($stmt->execute()) {
                // Récupération de l'ID du nouvel animal et redirection
                $pet_newid = $pdo->lastInsertId();
                header('Location: pet_page.php?id=' . $pet_newid);
            } else {
                echo "Erreur d'exécution de la requête : " . $stmt->errorInfo()[2];
            }
        } else {
            echo "<div class='#'>Veuillez remplir tous les champs</div>";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaire d'Ajout d'Animaux</title>
</head>

<body>

    <h2>Formulaire d'Ajout d'Animaux</h2>

    <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
        <label for="name">Nom de l'animal:</label>
        <input type="text" name="name" required><br>

        <label for="breed">Race:</label>
        <input type="text" name="breed" required><br>

        <label for="age">Âge:</label>
        <input type="number" name="age" required><br>

        <label for="type">Type:</label>
        <input type="text" name="type" required><br>

        <label for="location">Localisation:</label>
        <input type="text" name="location" required><br>

        <label for="description">Description:</label>
        <textarea name="description" required></textarea><br>

        <label for="urgent">Urgent:</label>
        <select name="urgent">
            <option value="no">Non</option>
            <option value="yes">Yes</option>
        </select><br>

        <input type="submit" name="submit" value="Ajouter un animal">
    </form>

</body>

</html>