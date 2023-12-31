<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=utf-8");


// Connexion à la base de données
$conn = new mysqli("localhost", "root", "", "nyliv");

// Vérifier la connexion à la base de données
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Échec de la connexion à la base de données: ' . $conn->connect_error]);
    exit;
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'), true);

    $uid = $data['uid'];
    $name = $data['name'];
    $firstname = $data['firstname'];
    $email = $data['email'];
    $img = $data['img'];
    $postalcode = $data['postalcode'];
    $city = $data['city'];
    $phone = $data['phone'];



    // Insertion des données dans la base de données
    $sql = "INSERT INTO pets (name, firstname, email, img, postalcode, city, phone) VALUES (?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssssisi', $name, $firstname, $email, $img, $postalcode, $city, $phone);

    // Exécutez la requête
    $stmt->execute();

    // Répondez avec succès
    echo json_encode(['success' => true, 'message' => 'Données insérées avec succès']);
} else {
    // Affichez des informations de débogage supplémentaires
    echo json_encode([
        'success' => false,
        'message' => 'Aucun fichier image n\'a été téléchargé.',
        'files' => $_FILES, // Ajout de cette ligne pour afficher les informations sur les fichiers
    ]);
    exit;
}
