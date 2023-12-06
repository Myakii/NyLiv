<?php
// CONNEXION
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nyliv";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// ADD
function add_pets($conn) {
    if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST['submit'])) {
        $name = $_POST['name'];
        $breed = $_POST['breed'];
        $age = $_POST['age'];
        $genre = $_POST['genre'];
        $type = $_POST['type'];
        $localisation = $_POST['localisation'];
        $description = $_POST['description'];
        $urgent = $_POST['urgent'];

        // Éviter les attaques par injection SQL
        $stmt = $conn->prepare("INSERT INTO pets (name, breed, age, genre, type, localisation, description, urgent) VALUES (?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssissss", $name, $breed, $age, $genre, $type, $localisation, $description, $urgent);

        // Exécutez la requête préparée
        $stmt->execute();
}
}
add_pets($conn);
?>
<!DOCTYPE html>
   <html lang="en">
   <head>
       <meta charset="UTF-8">
       <meta name="viewport" content="width=device-width, initial-scale=1.0">
       <title>Document</title>
   </head>
   <body>
   <div class="form_pets">

<h2>Formulaire d'Ajout d'Animaux</h2>

     <form method="post" class="flex flex-col">
       <label for="name">Nom de l'animal:</label>
       <input type="text" name="name" onChange={handleInputChange} required /><br>

       <label for="breed">Race:</label>
       <input type="text" name="breed" onChange={handleInputChange} required /><br>

       <label for="age">Âge:</label>
       <input type="number" name="age" onChange={handleInputChange} required /><br>

       <select name="genre" onChange={handleInputChange}>
         <option value="Non">Femelle</option>
         <option value="Oui">Male</option>
       </select><br>

       <label for="type">Type:</label>
       <input type="text" name="type" onChange={handleInputChange} required /><br>

       <label  ="localisation">Localisation:</label>
       <input
         type="text"
         name="localisation"
         onChange={handleInputChange}
         required
       /><br>

       <label for="description">Description:</label>
       <textarea
         name="description"
         onChange={handleInputChange}
         required
       ></textarea><br>

       <label for="urgent">Urgent:</label>

       <select name="urgent" onChange={handleInputChange}>
         <option value="Non">Non</option>
         <option value="Oui">Yes</option>
       </select><br>

       <button type="submit" name="submit" value="submit">
         Ajouter un animal
       </button>
     </form>
</div>
   </body>
   </html> 