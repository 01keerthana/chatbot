<?php
	include('conn.php');
	$id=$_GET['id'];
	
    $yourname = $_POST['yourname'];
    $gender = $_POST['gender'];
    $youraddress = $_POST['youraddress'];
    $yourstate = $_POST['yourstate'];
    $yourdistrict = $_POST['yourdistrict'];
    $yourpincode = $_POST['yourpincode'];
    $victimsname = $_POST['victimsname'];
    $victimsgender = $_POST['victimsgender'];
    $victimsaddress = $_POST['victimsaddress'];
    $victimsstate = $_POST['victimsstate'];
    $victimsdistrict = $_POST['victimsdistrict'];
    $victimspincode = $_POST['victimspincode'];
    $victimsreligion = $_POST['victimsreligion'];
    $victimsage = $_POST['victimsage'];
    $incidentplace = $_POST['incidentplace'];
    $incidentstate = $_POST['incidentstate'];
    $incidentdistrict = $_POST['incidentdistrict'];
    $incidentdate = $_POST['incidentdate'];
    $already = $_POST['already'];
    $complient = $_POST['complient'];
	
	mysqli_query($conn,"update `complient` set yourname='$yourname', gender='$gender', youraddress='$youraddress', yourstate='$yourstate'
	, yourdistrict='$yourdistrict', yourpincode='$yourpincode', victimsname='$victimsname', victimsgender='$victimsgender'
	, victimsaddress='$victimsaddress', victimsstate='$victimsstate', victimsdistrict='$victimsdistrict', victimspincode='$victimspincode'
	, victimsreligion='$victimsreligion', incidentplace='$incidentplace', incidentstate='$incidentstate', incidentdistrict='$incidentdistrict',
	incidentdate='$incidentdate', already='$already', complient='$complient' where userid='$id'");
	header('location:list.php');
?>