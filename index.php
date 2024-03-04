<?php

// Replace these with your connection details
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "asthra";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get message from query parameter
$msg = isset($_GET["msg"]) ? mysqli_real_escape_string($conn, $_GET["msg"]) : "";

// Prepare SQL statement (prevents SQL injection)
$sql = "INSERT INTO messages (message) VALUES ('$msg')";

// Attempt to insert data
if (mysqli_query($conn, $sql)) {
  echo "Message saved successfully!";
} else {
  echo "Error: " . mysqli_error($conn);
}

// Close connection
mysqli_close($conn);

?>