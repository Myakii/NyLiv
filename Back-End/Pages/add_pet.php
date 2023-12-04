<?php
require_once './include/function_add_pet.php';

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $paragraph1; ?></title>
    <link rel="stylesheet" href="./css/header.css">
    <link rel="stylesheet" href="./css/footer.css">
    <link rel="stylesheet" href="./css/add_house.css">
</head>

<body>
    <?php include './pages/header.php'; ?>
    <?php add_house(); ?>
    <h1 class="title"><?php echo $paragraph1; ?></h1>
    <div class="photo_select">

        <form method="POST" enctype="multipart/form-data">
            <label for="img"><?php echo $img; ?>:</label>
            <input type="file" name="img" id="desc_img">
            <input name="outputBase64" id="outputBase64">
    </div> <!--La base 64 de l'image est dedans mais cette input est caché -->
    <div id="imageContainer">
        <!-- l'image apparait ici -->
    </div>
    <div class="container">
        <div class="colum1">

            <label for="name"><?php echo $name_input; ?>:</label>
            <input type="text" name="name" id="name">

            <label for="adress"><?php echo $adress; ?>:</label>
            <input type="text" name="adress" id="adress">

            <label for="postal_code">Code Postale :</label>
            <input type="text" name="postal_code" id="postal_code">

            <label for="room"><?= $room; ?>:</label>
            <select name="room" id="room">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>


        <div class="colum2">
            <label for="disponible"><?php echo $status; ?>:</label>
            <select name="Disponible" id="disponible">
                <option value="Disponible"><?php echo $open; ?></option>
                <option value="Indisponible"><?php echo $close; ?></option>
            </select>



            <label for="type"><?= $type; ?>:</label>
            <select name="type" id="type">
                <option value="Maison"><?= $house; ?></option>
                <option value="Appartement"><?= $apart; ?></option>
            </select>

            <label for="option_prenium"><?= $option_premium; ?>:</label>
            <select name="option_prenium" id="option_prenium">
                <option value="premium" <?php if ($option_premium == 'Premium') {
                                            echo 'selected';
                                        } ?>>Option Premium</option>
                <option value="standard" <?php if ($option_premium == 'Standard') {
                                                echo 'selected';
                                            } ?>>Option Standard</option>
            </select>

            <label for="price"><?= $price ?></label>
            <input type="text" name="price" id="price">
        </div>
    </div>

    <div class="description">
        <label for="description"><?= $description; ?>:</label>
        <textarea name="description" placeholder=<?= $description ?>></textarea>
    </div>


    <div class="valider"><input type="submit" value="Valider"></div>

    </form>
    <?php include './pages/footer.php' ?>
</body>
<script src="./javascript/header.js"></script>
<script src="./javascript/preview.js"></script>

</html>