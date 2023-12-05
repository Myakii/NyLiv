<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $breed = $data['breed'];
    $age = $data['age'];
    $type = $data['type'];
    $localisation = $data['localisation'];
    $description = $data['description'];
    $urgent = $data['urgent'];

    try {
        // Préparez la requête d'insertion
        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, type, localisation, description, urgent) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissss", $name, $breed, $age, $type, $localisation, $description, $urgent);

        // Exécutez la requête
        $stmt->execute();

        echo json_encode(['status' => 'success', 'message' => 'Animal ajouté avec succès']);
    } catch (PDOException $e) {
        echo json_encode(['status' => 'error', 'message' => 'Erreur lors de l\'ajout de l\'animal']);
        // }
        echo json_encode(['status' => 'success', 'message' => $data]);
    }
}
