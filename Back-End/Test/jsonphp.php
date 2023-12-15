<?php

// Charger le contenu du fichier JSON
$jsonData = file_get_contents('Back-End/Database/animals.json');

// Convertir le JSON en tableau associatif
$animalData = json_decode($jsonData, true);

// Vérifier si la conversion a réussi
if ($animalData !== null) {
    echo '<div>';
    echo '<h2>' . $animalData['name'] . '</h2>';
    echo '<p>' . $animalData['description'] . '</p>';
    echo '<img src="' . $animalData['image'] . '" alt="' . $animalData['name'] . '">';
    // Ajoutez d'autres éléments d'affichage en fonction de vos besoins
    echo '</div>';
} else {
    echo '<p>Erreur lors de la récupération des données JSON.</p>';
}
?>
