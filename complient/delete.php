<?php
	$id=$_GET['id'];
	include('conn.php');
	mysqli_query($conn,"delete from `complient` where userid='$id'");
	header('location:list.php');
?>