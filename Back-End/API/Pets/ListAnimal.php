<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$query = "SELECT * FROM pets";
$result = $conn->query($query);
if ($result) {
    $data = array(); // Initialise un tableau pour stocker les données

    while ($row = $result->fetch_assoc()) {
        $data[] = $row; // Ajoute chaque ligne de résultat au tableau
    }

    echo json_encode($data);
  
} else {
    echo "Erreur dans la requête : " . $conn->error;
}

$conn->close();
