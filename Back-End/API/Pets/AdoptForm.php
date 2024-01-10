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


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $breed = $data['breed'];
    $age = $data['age'];
    $img = $data['img'];
    $localisation = $data['localisation'];
    $description = $data['description'];
    $genre = $data['radioButtons']['genre'];
    $type = $data['radioButtons']['type'];
    $urgent = $data['radioButtons']['urgent'];
    $house = $data['radioButtons']['house'];
    $dog = $data['radioButtons']['dog'];
    $cat = $data['radioButtons']['cat'];
    $kids = $data['radioButtons']['kids'];
    $link = $data['link'];
    $love = $data['love'];



    // Insertion des données dans la base de données
    $sql = "INSERT INTO pets (name, breed, age, img, localisation, description, genre, type, urgent, house, dog, cat, kids, link, love) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('ssisssssssssss', $name, $breed, $age, $img, $localisation, $description, $genre, $type, $urgent, $house, $dog, $cat, $kids, $link, $love);

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
