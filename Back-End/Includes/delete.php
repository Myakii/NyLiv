<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$pets_id = 1;

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

function delete_pets($conn)
{
    $delete_pets = "DELETE FROM pets
    WHERE id = pets_id";
    if($conn->query($delete_pets) === TRUE ) {
        echo "Record deleted successfully";
    } else {
        echo "Error deleting record: " . $conn->error;
    }
}

delete_pets($conn, $pets_id);
?>
