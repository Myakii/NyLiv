<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

// Vérifiez la connexion à la base de données
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$id = $_GET['id'];
// Préparez la requête
$sql = "UPDATE pets SET name=?, breed=?, age=?, type=?, localisation=?, urgent=?, description=?, img=?, house=?, dog=?, cat=?, kids=?, link=?, love=? WHERE id=?";
$stmt = $conn->prepare($sql);

// Vérifiez si la requête préparée a réussi
if (!$stmt) {
    die('Erreur de requête préparée: ' . $conn->error);
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    // Récupérez les données du formulaire
    $name = $_POST['name'];
    $breed = $_POST['breed'];
    $age = $_POST['age'];
    $type = $_POST['type'];
    $localisation = $_POST['localisation'];
    $urgent = $_POST['urgent'];
    $description = $_POST['description'];
    $img = $_POST['img'];
    $house = $_POST['house'];
    $dog = $_POST['dog'];
    $cat = $_POST['cat'];
    $kids = $_POST['kids'];
    $link = $_POST['link'];
    $love = $_POST['love'];
    $id = $_GET['id'];

    // Lier les paramètres
    $stmt->bind_param('ssisssssssssssi', $name, $breed, $age, $type, $localisation, $urgent, $description, $img, $house, $dog, $cat, $kids, $link, $love, $id);

    $stmt->execute();

    // Vérifiez si l'exécution de la requête a réussi
    if ($stmt->affected_rows > 0) {
        echo 'Mise à jour réussie.';
    } else {
        echo 'Aucune mise à jour effectuée.';
        echo 'Erreur lors de l\'exécution de la requête : ' . $stmt->error;
    }

    // Fermez la requête préparée
    $stmt->close();
}

// Fermez la connexion
$conn->close();
