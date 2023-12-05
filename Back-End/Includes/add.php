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

// AJOUTER
if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
    $name = $_POST['name'];
    $breed = $_POST['breed'];
    $age = $_POST['age'];
    $type = $_POST['type'];
    $localisation = $_POST['localisation'];
    $description = $_POST['description'];
    $urgent = $_POST['urgent'];

    // Éviter les attaques par injection SQL
    $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, type, localisation, description, urgent) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("ssissss", $name, $breed, $age, $type, $localisation, $description, $urgent);

    // Exécutez la requête préparée
    $stmt->execute();
}
