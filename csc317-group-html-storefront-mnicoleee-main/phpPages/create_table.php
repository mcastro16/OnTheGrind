<?php

$server = "localhost";
$user = "root";
$password = "pswd";
$database = "STORE";
$connection = new mysqli($server, $user, $password, $database);

$query = "CREATE TABLE customers(
  id INT(10) primary key,
  firstName varchar(30) not null,
  lastName varchar(30) not null,
  password varchar(50) not null,
  email varchar(50) not null
)";

//connection check
if($connection->error) {
  die("connection failed." + . $connection->connect_error)
}

$result = $connection->query($query);

if($result === TRUE) {
  echo "Created customer table successfully";
} else {
  echo "An Error Occurred".connection->error;
}
$connection->close();

?>
