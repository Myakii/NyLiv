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

echo "Données du formulaire POST :\n";
print_r($_POST);


if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $firstname = $data['firstname'];
    $email = $data['email'];
    $phone = $data['phone'];
    $subject = $data['radioButtons']['subject'];
    $date = $data['date'];
    $reportingaddress = $data['reportingaddress'];
    $text = $data['text'];
    $choiceofvisibility = $data['radioButtons']['choiceofvisibility'];


    // Insertion des données dans la base de données
    $sql = "INSERT INTO reportanimals (name, firstname, email, phone, subject, date, reportingaddress, text, choiceofvisibility) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param('sssisssss', $name, $firstname, $email, $phone, $subject, $date, $reportingaddress, $text, $choiceofvisibility);
    // Exécutez la requête
    $stmt->execute();

    // Répondez avec succès
    echo json_encode(['success' => true, 'message' => 'Données insérées avec succès']);
} else {
    // Affichez des informations de débogage supplémentaires
    echo json_encode([
        'success' => false,

    ]);
    exit;
}
