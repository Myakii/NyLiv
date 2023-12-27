<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vérifiez si la requête est une requête OPTIONS
if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    echo ('kk');
    exit();
}

// Vérifiez si la requête est une requête POST
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Récupérez les données JSON du corps de la requête
    $postData = json_decode(file_get_contents("php://input"), true);

    // Vérifiez si les données nécessaires sont présentes
    if (isset($postData['submit'])) {
        $name = $_POST['name'] ?? '';
        $breed = $_POST['breed'] ?? '';
        $age = $_POST['age'] ?? '';
        $genre = $_POST['genre'] ?? '';
        $type = $_POST['type'] ?? '';
        $localisation = $_POST['localisation'] ?? '';
        $description = $_POST['description'] ?? '';
        $urgent = $_POST['urgent'] ?? '';
        $house = $_POST['house'] ?? '';
        // Les cases à cocher sont généralement représentées par des valeurs booléennes
        $dog = isset($_POST['dog']) ? 'Oui' : 'Non';
        $cat = isset($_POST['cat']) ? 'Oui' : 'Non';
        $kids = isset($_POST['kids']) ? 'Oui' : 'Non';

        // Gère les imgs
        // Récupérez la chaîne base64 de l'image
        $img_base64 = $_POST['img'];

        // Convertissez la chaîne base64 en contenu binaire
        $img_content = base64_decode($img_base64);

        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent, img, house, dog, kids, cat) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param('ssissssssssss', $name, $breed, $age, $genre, $type, $localisation, $description, $urgent, $img_content, $house, $dog, $kids, $cat);

        if ($stmt->execute() === false) {
            $error = $stmt->error;
            http_response_code(500); // Code d'erreur du serveur interne
            echo json_encode(['error' => $error]);
            exit();
        }

        $new_pets_id = $stmt->insert_id;
        echo json_encode(['success' => true, 'id' => $new_pets_id]);
    } else {
        http_response_code(400); // Définissez le code de réponse approprié pour une erreur de requête
        echo json_encode(['error' => 'Veuillez remplir tous les champs.', 'postData' => $postData]);
    }
} else {
    http_response_code(405); // Définissez le code de réponse approprié pour une méthode non autorisée
    echo json_encode(['error' => "Méthode non autorisée"]);
}
