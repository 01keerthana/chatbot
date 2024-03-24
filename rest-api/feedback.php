<?php 
include("../php/config.php"); 

if(isset($_POST['submit'])){
  $comments = $_POST['msg'];
  $name = $_POST['name'];

  mysqli_query($con,"INSERT INTO feedback(msg, name) VALUES('$comments', '$name' )") or die("Erroe Occured");
  echo "<script> alert('submitted sucessfully')</script>";
}