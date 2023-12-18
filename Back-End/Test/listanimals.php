<?php
require_once './functions.php';
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Liste des animaux</title>
    <link rel="stylesheet" href="./css/listanimals.css">
</head>

<body>
    <?php
    pets_display($conn);
    ?>
    <a href="addpage.php">
        <a href="addpage.php">
            <button type="submit" name="add" value="add">Ajouter un animal</button>
        </a>
</body>

</html>