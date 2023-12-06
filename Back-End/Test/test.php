<?php 
require_once './functions.php';


if($_SERVER['REQUEST_METHOD'] == "POST" && isset($_POST['delete'])) {
    delete_pets($conn, $pets_id);
}

pets_display($conn);

?>
<form method="post" action="">
    <button type="submit" name="delete" value="delete">Supprimer l'animal</button>
</form>