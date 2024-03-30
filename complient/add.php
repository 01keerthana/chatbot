<?php
	include('conn.php');
	
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
		
	mysqli_query($conn,"insert into `complient` (yourname, gender, youraddress, yourstate, yourdistrict, yourpincode, victimsname, 
    victimsgender, victimsaddress, victimsstate, victimsdistrict, victimspincode, victimsreligion, victimsage, incidentplace, 
    incidentstate, incidentdistrict, incidentdate, already, complient)
	 values ('$yourname','$gender','$youraddress','$yourstate','$yourdistrict','$yourpincode','$victimsname','$victimsgender','$victimsaddress','$victimsstate','$victimsdistrict',
	 '$victimspincode','$victimsreligion','$victimsage','$incidentplace','$incidentstate','$incidentdistrict','$incidentdate','$already','$complient' )");
	header('location:list.php');
	
?>