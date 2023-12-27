<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");

error_log("Script start");
error_log("Request data: " . print_r($postData, true));

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Vérifiez si la requête est une requête POST
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST['submit'])) {    // Récupérez les données JSON du corps de la requête
    $postData = json_decode(file_get_contents("php://input"), true) ?? [];

    // Vérifiez si les données nécessaires sont présentes
    if (isset($postData['submit'])) {
        // Utilisez directement les données du tableau $postData
        $name = $postData['name'] ?? '';
        $breed = $postData['breed'] ?? '';
        $age = $postData['age'] ?? '';
        $genre = $postData['genre'] ?? '';
        $type = $postData['type'] ?? '';
        $localisation = $postData['localisation'] ?? '';
        $description = $postData['description'] ?? '';
        $urgent = $postData['urgent'] ?? '';
        $house = $postData['house'] ?? '';
        $dog = isset($postData['dog']) ? 'Oui' : 'Non';
        $cat = isset($postData['cat']) ? 'Oui' : 'Non';
        $kids = isset($postData['kids']) ? 'Oui' : 'Non';

        // Récupérez l'image en base64 depuis les données JSON
        $img_base64 = $postData['img'];

        // Convertissez l'image en contenu binaire
        $img_content = base64_decode($img_base64);

        // Utilisez le contenu de l'image dans la requête préparée
        $stmt->bind_param('ssissssssbsss', $name, $breed, $age, $genre, $type, $localisation, $description, $urgent, $img_content, $house, $dog, $kids, $cat);

        try {
            if ($stmt->execute() === false) {
                throw new Exception($stmt->error);
            }

            $new_pets_id = $stmt->insert_id;
            $response = ['success' => true, 'id' => $new_pets_id];
            echo json_encode($response);
        } catch (Exception $e) {
            http_response_code(500); // Code d'erreur du serveur interne
            $errorResponse = ['error' => $e->getMessage()];
            echo json_encode($errorResponse);
        }
    }
}
