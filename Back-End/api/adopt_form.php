<?php

header("Access-Control-Allow-Origin: * ");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json; charset=utf-8');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ... (votre code existant)

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Lire directement les données depuis le flux d'entrée sans json_decode
    $data = json_decode(file_get_contents('php://input'), true);

    $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent, img, house, dog, kids, cat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");

    // Vérifiez si la préparation de la requête a réussi
    if ($stmt === false) {
        die("Erreur dans la préparation de la requête : " . $conn->error);
    }

    // Gère les imgs
    $img_content = file_get_contents($_FILES['img']['tmp_name']);

    // Vérifiez que le fichier est une image
    $allowed_types = [IMAGETYPE_JPEG, IMAGETYPE_PNG, IMAGETYPE_GIF];
    $detected_type = exif_imagetype($_FILES['img']['tmp_name']);

    if (!in_array($detected_type, $allowed_types)) {
        // Si le type de fichier n'est pas autorisé, renvoyez une erreur JSON
        echo json_encode(array('error' => 'Le fichier n\'est pas une image valide.'));
        exit();
    }

    $img_base64 = base64_encode($img_content);

    // Les cases à cocher sont généralement représentées par des valeurs booléennes
    $pets_dog = isset($data['dog']) ? 'Oui' : 'Non';
    $pets_cat = isset($data['cat']) ? 'Oui' : 'Non';

    $stmt->bind_param('ssissssssssss', $data['name'], $data['breed'], $data['age'], $data['genre'], $data['type'], $data['localisation'], $data['description'], $data['urgent'], $img_base64, $data['house'], $pets_dog, $pets_kids, $pets_cat);

    // Exécutez la requête
    $stmt->execute();

    // Construisez une réponse JSON
    $response = array(
        'success' => true,
        'message' => 'Animal ajouté avec succès.'
    );

    // Encodez la réponse en JSON
    echo json_encode($response);
} else {
    // Si la méthode n'est pas POST, renvoyer un message d'erreur
    echo json_encode(array('error' => 'Veuillez remplir tous les champs.'));
}
