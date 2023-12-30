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

// echo "Données du formulaire POST :\n";
// print_r($_POST);


// Utilisation de file_get_contents('php://input') pour récupérer les données de la requête POST
// Utilisation de file_get_contents('php://input') pour récupérer les données de la requête POST
// Utilisation de file_get_contents('php://input') pour récupérer les données de la requête POST
$data = json_decode(file_get_contents('php://input'), true);

if (isset($_FILES['img']['tmp_name']) && !empty($_FILES['img']['tmp_name']) && is_uploaded_file($_FILES['img']['tmp_name'])) {
    error_log('$_FILES: ' . print_r($_FILES, true));
    error_log('img: ' . $img);
    $img = base64_encode(file_get_contents($_FILES['img']['tmp_name']));

    // Insertion des données dans la base de données
    $sql = "INSERT INTO pets (name, breed, age, img, description, genre, type, urgent, house, dog, cat, kids) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssibssssssss', $name, $breed, $age, $img, $description, $genre, $type, $urgent, $house, $dog, $cat, $kids);

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
