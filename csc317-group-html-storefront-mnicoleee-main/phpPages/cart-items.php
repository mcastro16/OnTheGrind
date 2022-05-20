<?php

session_start();
function addToCartTable() {
  $server = "localhost";
  $user = "sa";
  $password = "pswd";
  $database = "STORE";
  $connection = new mysqli($server, $user, $password, $database);

  if($connection->connect_error) {
    die("Connection Failed:" . $connection->connect_error);
  }

  CREATE TABLE IF NOT EXISTS `products` (
  	`name` text NOT NULL,
  	`size` text NOT NULL,
  	`price` text NOT NULL,
  	PRIMARY KEY (`id`)
  ) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
  if()
  $sql = "INSERT INTO `products` (`name`, `size`, `price`) VALUES
  ('<script>localStorage.getItem(`productName`);</script>', '<script>localStorage.getItem(`product-size`);</script>', '<script>localStorage.getItem(`product-price`);</script>')";
  $result = $connection->query($sql);
  $connection->close();
}

function DeleteFromCart() {

  $server = "localhost";
  $user = "sa";
  $password = "pswd";
  $database = "STORE";
  $connection = new mysqli($server, $user, $password, $database);

  if ($connection->connect_error) {
    die("Connection failed: " . $connection->connect_error);
  }
  $connection->close();

  $item = '<script>document.getElementById(`name`).value;</script>';
  $sql = "DELETE FROM products WHERE name='$item'";

  $connection->close();

}
?>
