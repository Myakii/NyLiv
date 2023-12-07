<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ADD
function add_pets($conn)
{
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
        $name = $_POST['name'];
        $breed = $_POST['breed'];
        $age = $_POST['age'];
        $genre = $_POST['genre'];
        $type = $_POST['type'];
        $localisation = $_POST['localisation'];
        $description = $_POST['description'];
        $urgent = $_POST['urgent'];

        // Éviter les attaques par injection SQL
        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent) VALUES (?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissssi", $name, $breed, $age, $genre, $type, $localisation, $description, $urgent);

        // Exécutez la requête préparée
        $stmt->execute();
        header("Location: listanimals.php");
    }
}

// MODIFY
function modify_pets($conn) {
    $pets_id = $_POST['id'];
    $pets_name = $_POST['name'];
    $pets_breed = $_POST['breed'];
    $pets_age = $_POST['age'];
    $pets_genre = $_POST['genre'];
    $pets_type = $_POST['type'];
    $pets_localisation = $_POST['localisation'];
    $pets_urgent = $_POST['urgent'];
    $pets_description = $_POST['description'];
    
    $query = "UPDATE pets SET name = $pets_name, breed = $pets_breed, age = $pets_age, genre = $pets_genre, type = $pets_type, localisation = $pets_localisation, urgent = $pets_urgent, description = $pets_description FROM pets WHERE id = ?";
    if ($conn->query($query) === TRUE) {
        echo "L'utilisateur a été modifié avec succès.";
    }
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

            echo '<div class="pets_info">
                <h2>' . $pets_name . '</h2>
                IMG
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
            </div>';
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
    $query = "SELECT id, name FROM pets";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        echo '<div class="grid_pets">';
        while ($row = $result->fetch_assoc()) {
?>
            <div class="place_name">
                <a href="pageanimals.php?id=<?= $row['id']; ?>">
                    <h2><?= $row["name"]; ?></h2>
                </a>
            </div>
<?php
        }
        echo '</div>';
    } else {
        echo "Aucun animal trouvé.";
    }
}



?>