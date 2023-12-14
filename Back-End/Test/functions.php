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
        $pets_name = $_POST['name'];
        $pets_breed = $_POST['breed'];
        $pets_age = $_POST['age'];
        $pets_genre = $_POST['genre'];
        $pets_type = $_POST['type'];
        $pets_localisation = $_POST['localisation'];
        $pets_description = $_POST['description'];
        $pets_urgent = $_POST['urgent'];

        // Gérer le fichier téléchargé
        $img_content = file_get_contents($_FILES['img']['tmp_name']);
        $img_base64 = base64_encode($img_content);

        // Éviter les attaques par injection SQL
        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent, img) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param('ssisssbss', $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_description, $pets_urgent, $img_base64);
        $stmt->execute();
        $new_pets_id = $stmt->insert_id;
        header("Location: listanimals.php?id=" . $new_pets_id);
        exit();
    } else {
        echo "Veuillez remplir tous les champs.";
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
                <h2>' . $pets_name . '</h2>
                <img src="data:image/jpeg;base64,' . $pets_img . '" alt="' . $pets_name . '">
                <div class="info">
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
                        <img src="data:image/jpeg;base64,' . $row["img"] . '" alt="' . $row["name"] . '">
                    </a>
                </div>';
        }
        echo '</div>'; 
    } else {
        echo "Aucun animal trouvé.";
    }
}
