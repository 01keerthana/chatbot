<?php
$host = "localhost";
$username = "root";
$password = "";
$db_name = "law_DB";

$con = mysqli_connect($host, $username, $password, $db_name);

if (!$con)
{
  die("Connection failed: ". mysqli_connect_error());
}
?>