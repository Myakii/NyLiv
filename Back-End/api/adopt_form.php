<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $data = json_decode(file_get_contents('php://input'), true);

    $name = $data['name'];
    $breed = $data['breed'];
    $age = $data['age'];
    $type = $data['type'];
    $localisation = $data['localisation'];
    $description = $data['description'];
    $urgent = $data['urgent'];


    echo json_encode(['status' => 'success', 'message' => $data]);

}
?>

