<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupérez l'ID de l'animal depuis la requête
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];

    // Vérifiez si le formulaire a été soumis
    if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['modify'])) {
        $query = "UPDATE pets SET name=?, breed=?, age=?, genre=?, type=?, localisation=?, urgent=?, description=?, img=?, house=?, dog=?, cat=?, kids=?, love=? WHERE id=?";
        $stmt = $conn->prepare($query);

        // Liaison des paramètres
        $stmt->bind_param('ssissssssssssis', $pets_name, $pets_breed, $pets_age, $pets_genre, $pets_type, $pets_localisation, $pets_urgent, $pets_description, $pets_img, $pets_house, $pets_dog, $pets_cat, $pets_kids, $pets_id, $pets_love);

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
            echo 'Erreur lors de l\'exécution de la requête : ' . $stmt->error;
        }

        // Fermez la requête préparée
        $stmt->close();
    }
}
