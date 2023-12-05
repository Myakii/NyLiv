<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$pets_id = 5;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function read_pets($conn, $pets_id)
{
    $query = " SELECT * FROM pets WHERE id = ?";
    $stmt = $conn->prepare($query);

    if ($stmt) {
        $stmt->bind_param('i', $pets_id);
        $stmt->execute();
        $result = $stmt->get_result();
        $pet_detail = $result->fetch_assoc();
        $stmt->close();
        return $pet_detail;
    }
}

$pet_detail = read_pets($conn, $pets_id);

if ($pet_detail) {
    print_r($pet_detail);
} else {
    echo "Aucun animal trouvé avec cet identifiant.";
}
