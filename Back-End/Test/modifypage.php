<?php
require_once './functions.php';

// Assurez-vous que l'ID est présent dans l'URL
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];
    modify_pets($conn, $pets_id);
} else {
    echo "ID invalide.";
}

// Vérifiez la méthode de la requête
if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['modify'])) {
    // Utilisez $pets_id pour la modification
    modify_pets($conn, $pets_id);
    header("Location: pageanimals.php?id=$pets_id");
}
