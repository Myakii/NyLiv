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

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $postData = json_decode(file_get_contents("php://input"), true);
    if (
        isset($postData['love']) &&
        ($postData['love'] === 'Oui')
    ) {
        $love = $postData['love'];
    } else {
        echo json_encode(array('error' => 'love invalide.'));
        exit;
    }
} else {
    echo json_encode(array('error' => 'Méthode invalide.'));
    exit;
}


$query = "SELECT img, id, name, description, love FROM pets WHERE love= ? ORDER BY RAND() LIMIT 1";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $love);

// Exécutez la requête
$stmt->execute();

// Liez les résultats de la requête aux variables
$stmt->bind_result($img, $id, $name, $description, $love);

// Vérifiez le nombre de lignes
if ($stmt->fetch()) {
    echo json_encode(array('img' => $img, 'love' => $love, 'name' => $name, 'id' => $id, 'description' => $description));
} else {
    echo "Aucune image n'a été trouvée";
}

$stmt->close();
$conn->close();
