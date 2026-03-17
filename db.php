<?php
$conn = new mysqli("localhost", "root", "", "grocery_shop");
if ($conn->connect_error) {
    die("Connection failed");
}
?>
