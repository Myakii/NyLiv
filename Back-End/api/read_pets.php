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
$pets_id = $_GET['id'];

// Préparez la requête SELECT
$query = "SELECT * FROM pets WHERE id = ?";
$stmt = $conn->prepare($query);

// Liez l'ID en tant que paramètre à la requête
$stmt->bind_param('i', $pets_id);

// Exécutez la requête
$stmt->execute();

// Récupérez les résultats
$result = $stmt->get_result();

// Vérifiez si des résultats ont été obtenus
if ($result->num_rows > 0) {
    // Récupérez les données de l'animal
    $pets_detail = $result->fetch_assoc();

    // Structurez les données dans un tableau associatif
    $animalData = array(
        'id' => $pets_detail['id'],
        'name' => $pets_detail['name'],
        'breed' => $pets_detail['breed'],
        'age' => $pets_detail['age'],
        'genre' => $pets_detail['genre'],
        'type' => $pets_detail['type'],
        'localisation' => $pets_detail['localisation'],
        'urgent' => $pets_detail['urgent'],
        'description' => $pets_detail['description'],
        'img' => $pets_detail['img'],
        'house' => $pets_detail['house'],
        'dog' => $pets_detail['dog'],
        'cat' => $pets_detail['cat'],
        'kids' => $pets_detail['kids']
    );

    // Convertissez le tableau associatif en JSON
    $jsonData = json_encode($animalData);

    // Renvoyez les données JSON
    echo $jsonData;
} else {
    // Aucun résultat trouvé
    echo json_encode(['error' => 'Animal non trouvé']);
}

// Fermez la connexion et la déclaration
$stmt->close();
$conn->close();
