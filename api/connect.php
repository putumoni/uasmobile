<?php
$servername = "localhost";
$username = "id5806091_iuranhmj";
$password = "admin1";
$dbname = "id5806091_iuranhmj";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}else{
//	echo "Koneksi berhasil";
}
?>
