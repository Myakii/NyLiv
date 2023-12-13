<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function add_pets($conn)
{
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
        $img_path = "Assets/Animals/";
        $name = $_POST['name'];
        $breed = $_POST['breed'];
        $age = $_POST['age'];
        $genre = $_POST['genre'];
        $type = $_POST['type'];
        $localisation = $_POST['localisation'];
        $description = $_POST['description'];
        $urgent = $_POST['urgent'];

        // Gestion de l'image
        if (isset($_FILES['img']) && $_FILES['img']['error'] == 0) {
            $img = $_FILES['img']['name'];
            $img_temp = $_FILES['img']['tmp_name'];
            $img_path = "Assets/Animals" . $img;

            move_uploaded_file($img_temp, $img_path);
        } else {
            // Gérer le cas où aucune image n'est téléchargée
            $img_path = ''; // Ou la valeur par défaut que vous souhaitez utiliser
        }

        // Éviter les attaques par injection SQL
        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param('ssissssssi', $name, $breed, $age, $genre, $type, $localisation, $description, $urgent, $img_path);

        // Exécutez la requête préparée
        $stmt->execute();
        header("Location: listanimals.php");
    }
}


// MODIFY
function modify_pets($conn, $pets_id, $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_urgent, $pets_description, $pets_img)
{
    $query = "UPDATE pets SET name=?, breed=?, age=?, genre=?, type=?, localisation=?, urgent=?, description=?, img=? WHERE id=?";
    $stmt = $conn->prepare($query);

    // Liaison des paramètres
    $stmt->bind_param('ssissssssi', $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_urgent, $pets_description, $pets_img, $pets_id);

    // Vérifiez si la requête préparée a réussi
    if (!$stmt) {
        die('Erreur de requête préparée: ' . $conn->error);
    }

    // Exécution de la requête
    $stmt->execute();

    // Vérifiez si l'exécution de la requête a réussi
    if ($stmt->affected_rows > 0) {
        echo 'Mise à jour réussie.';
    } else {
        echo 'Aucune mise à jour effectuée.';
    }

    // Fermez la requête préparée
    $stmt->close();
}


// READ
function read_pets($conn, $pets_id)
{
    $query = "SELECT * FROM pets WHERE id = ?";
    $stmt = $conn->prepare($query);

    if ($stmt) {
        $stmt->bind_param('i', $pets_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $pets_detail = $result->fetch_assoc();
        $stmt->close();

        if ($pets_detail) {
            $pets_id = $pets_detail['id'];
            $pets_name = $pets_detail['name'];
            $pets_breed = $pets_detail['breed'];
            $pets_age = $pets_detail['age'];
            $pets_genre = $pets_detail['genre'];
            $pets_type = $pets_detail['type'];
            $pets_localisation = $pets_detail['localisation'];
            $pets_urgent = $pets_detail['urgent'];
            $pets_description = $pets_detail['description'];
            $pets_img = $pets_detail['img'];

            echo '<div class="pets_info">
                <h2>' . $pets_name . '</h2>'
                . $pets_img .
                '<div class="info">
                    <h3>Race : </h3>
                    <p>' . $pets_breed . '</p>
                    <h3>Âge : </h3>
                    <p>' . $pets_age . '</p>
                    <h3>Genre : </h3>
                    <p>' . $pets_genre . '</p>
                    <h3>Type : </h3>
                    <p>' . $pets_type . '</p>
                    <h3>Localisation : </h3>
                    <p>' . $pets_localisation . '</p>
                    <h3>Urgent : </h3>
                    <p>' . $pets_urgent . '</p>
                    <h3>Description : </h3>
                    <p>' . $pets_description . '</p>
                </div>
            </div>
            <form method="post" action="">
                <button type="submit" name="delete" value="delete">Supprimer l\'animal</button>
            </form>
            <a href="modifypage.php?id=' . $pets_id . '" " class="redirect-button" >Modifier l\'animal</a>';
        } else {
            echo "Aucun animal trouvé avec cet identifiant.";
        }
    }
}


// DELETE
function delete_pets($conn, $pets_id)
{
    $delete_pets = $conn->prepare("DELETE FROM pets WHERE id = ?");
    $delete_pets->bind_param('i', $pets_id);
    $delete_pets->execute();
    $delete_pets->close();
}

// AFFICHAGE DE TOUTES UNE BASE DE DONNEES
function pets_display($conn)
{
    $query = "SELECT id, name, img FROM pets";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo '<div class="grid_pets">';
        while ($row = $result->fetch_assoc()) {
            echo '
                <div class="place_name">
                    <a href="pageanimals.php?id=' . $row['id'] . '">
                        <h2>' . $row["name"] . '</h2>
                        <h2>' . $row["img"] . '</h2>
                    </a>
                </div>';
        }
        echo '</div>'; // Move this outside the loop
    } else {
        echo "Aucun animal trouvé.";
    }
}    
