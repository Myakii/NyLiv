<?php
require_once './functions.php';

?>

<a href="listanimals.php">Retour</a>

<?php
// && is_numeric($_GET['id']) pour vérifier que l'ID est numérique avant de l'utiliser. Si l'ID n'est pas numérique, le code affichera "ID invalide." 

if(isset($_GET['id']) && is_numeric($_GET['id'])) {
    $pets_id = $_GET['id'];
    read_pets($conn, $pets_id);
} else {
    echo "ID invalide.";
}

if ($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['delete'])) {
    delete_pets($conn, $pets_id);
    header("Location:listanimals.php");
}

?>

<form method="post" action="">
    <button type="submit" name="delete" value="delete">Supprimer l'animal</button>
</form>

<?php 
echo '<a href="modifypage.php?id=' . $id . '">Modifier la page</a>';
?>

