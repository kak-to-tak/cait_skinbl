<?php
  require_once('db_connect.php');
$login = $_POST['login'];
$pass = $_POST['password'];
$email = $_POST['email'];

$sql = "INSERT INTO 'users_dannie' (login,pass,email) VALUES ('$login', '$pass', '$email')";

$conn -> query($sql);
