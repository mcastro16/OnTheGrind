<?php
$server = "localhost";
$user = "sa";
$password = "pswd"; // upto u

$connection = new mysqli($server, $user, $password);

$query = "CREATE DATABASE STORE";
$result = $connection->query($query);

if($result)
{
	echo "Created Database";
}
else
{
	echo "Not Enough Power";
}
$connection->close();
?>
