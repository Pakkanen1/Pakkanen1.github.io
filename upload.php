<?php

$target_dir = "images/";
$target_file = $target_dir . basename($_FILES["fileToUpload"]["name"]);
$uploadOk = 1;
$imageFileType = pathinfo($target_file,PATHINFO_EXTENSION);
// Check if image file is a actual image or fake image
if(isset($_POST["submit"])) {
    $check = getimagesize($_FILES["fileToUpload"]["tmp_name"]);
    if($check !== false) {
        echo " File is an image - " . $check["mime"] . ". ";
        $uploadOk = 1;
    } else {
        echo " File is not an image. ";
        $uploadOk = 0;
    }
}
// Check if file already exists
if (file_exists($target_file)) {
    echo " Sorry, file already exists. Please modify filename. ";
    $uploadOk = 0;
}
// Check file size
if ($_FILES["fileToUpload"]["size"] > 500000000) {
    echo "Sorry, your file is too large.";
    $uploadOk = 0;
}
// Allow certain file formats
if($imageFileType != "jpg" && $imageFileType != "png" && $imageFileType != "jpeg"
&& $imageFileType != "gif" && $imageFileType != "PNG") {
    echo "Sorry, only JPG, JPEG, PNG & GIF files are allowed.";
    $uploadOk = 0;
}
// Check if $uploadOk is set to 0 by an error
if ($uploadOk == 0) {
    echo "Sorry, your file was not uploaded.";
// if everything is ok, try to upload file
} else {
    if (move_uploaded_file($_FILES["fileToUpload"]["tmp_name"], $target_file)) {
        echo "The file ". basename( $_FILES["fileToUpload"]["name"]). " has been uploaded.";

        /* Kuvan lisäys JSON-tietokantaan */

        // Haetaan kannan tiedostopolku
        $file = "image_json/horadriccube.json";

        // Avataan JSON-tiedosto
        $lines = file($file);
        // Haetaan viimeinen rivi ja poistetaan lopettava hakasulku
        $final_line = sizeof($lines) - 1;
        unset($lines[$final_line]);
        $fp = fopen($file, 'w');
        fwrite($fp, implode('', $lines));
        fclose($fp);

        // Alustetaan muutujat JSON-olioiden attribuuttien arvoille
        $img_id = $final_line - 1;
        $img_filename = basename( $_FILES["fileToUpload"]["name"]);
        $img_description = $_POST['fileDescription'];
        $img_source = "http://localhost/apakka/Pakkanen1.github.io/images/" . basename( $_FILES["fileToUpload"]["name"]);

        // Käännetään JSON-string ja asetetaan se muuttujaan
        $json = json_decode(file_get_contents($file), true);

        // Luodaan uusi taulukko ja asetetaan, joka asetetaan myöhemmin JSON-oliona tietokantaan
        $json = array("id" => $img_id, "filename" => $img_filename, "description" => $img_description, "image" => $img_source);

        // Appendataan viimeiselle riville uusi $json taulukko. Muistetaan myös pilkku ja sulkeva hakasulku.
        file_put_contents($file, ", " . json_encode($json) . " \n]", FILE_APPEND);
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}

?>