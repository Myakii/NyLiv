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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents("php://input"), true);
    if (
        isset($postData['urgent']) &&
        ($postData['urgent'] === 'FAD' || $postData['urgent'] === 'SOS' || $postData['urgent'] === 'Vétéran')
    ) {
        $urgent = $postData['urgent'];
    } else {
        echo json_encode(array('error' => 'Type invalide.'));
        exit;
    }
} else {
    echo json_encode(array('error' => 'Méthode invalide.'));
    exit;
}


$query = "SELECT img, type FROM pets WHERE urgent= ? ORDER BY RAND() LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $urgent);

// Exécutez la requête
$stmt->execute();

// Liez les résultats de la requête aux variables
$stmt->bind_result($img, $urgent);

// Vérifiez le nombre de lignes
if ($stmt->fetch()) {
    echo json_encode(array('img' => $img, 'urgent' => $urgent));
} else {
    echo "Aucune image n'a été trouvée";
}

$stmt->close();
$conn->close();
