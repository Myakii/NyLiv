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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $breed = $data['breed'];
    $age = $data['age'];
    $type = $data['type'];
    $genre = $data['genre'];
    $localisation = $data['localisation'];
    $description = $data['description'];
    $urgent = $data['urgent'];
    $house = $data['house'];
    $dog = $data['dog'];
    $cat = $data['cat'];
    $kids = $data['kids'];
    $img_base64 = $data['img']['base64'];

    // Chemin où enregistrer les images
    $img_base64 = $data['img']['base64'];

    // Vérifiez si 'base64' est défini dans $data['img']
    if (isset($img_base64)) {
        // Votre code pour la gestion des données d'image ici...
    } else {
        // Gérer l'absence de 'base64' dans $data['img']
        echo json_encode(['error' => 'Données d\'image manquantes.']);
    }

    // Préparez la requête d'insertion
    $stmt = $conn->prepare("INSERT INTO pets (name, img, breed, age, genre, type, localisation, description, urgent, house, dog, cat, kids) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param('sssisssssssss', $name, $img_base64, $breed, $age, $genre, $type, $localisation, $description, $urgent, $house, $dog, $cat, $kids);
    $stmt->execute();

    echo json_encode(['status' => 'success', 'message' => 'Animal ajouté avec succès']);
} else {
    echo json_encode(['error' => 'Une erreur s\'est produite lors du traitement de la requête.']);
}
