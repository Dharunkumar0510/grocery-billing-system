<?php
include 'db.php';

$data = json_decode(file_get_contents("php://input"), true);

$total = $data['total'];

$conn->query("INSERT INTO bills (total) VALUES ($total)");

echo "success";
?>
