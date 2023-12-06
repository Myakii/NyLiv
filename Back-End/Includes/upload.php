
<?php
// CONNEXION
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function upload_pets($conn) {
  if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['update'])) {
    // Récupération des données
    $name = $_POST['name'];
    $breed = $_POST['breed'];
    $age = $_POST['age'];
    $genre = $_POST['genre'];
    $type = $_POST['type'];
    $localisation = $_POST['localisation'];
    $description = $_POST['description'];
    $urgent = $_POST['urgent'];

    // Requête pour la MAJ
    $stmt = $conn->prepare('UPDATE pets SET (name, breed, age, genre type, localisation, description, urgent) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $stmt->bind_param("ssissss", $name, $breed, $age, $genre, $type, $localisation, $description, $urgent);
    $stmt->execute();
  }
}