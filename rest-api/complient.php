<?php 

include("../php/config.php");

    $yourname = $_POST['yourname'];
    $gender = $_POST['gender'];
    $yourAddress = $_POST['yourAddress'];
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
//verifying the unique email

$sql = "INSERT INTO complient (yourname, gender, yourAddress, yourstate, yourdistrict, yourpincode, victimsname, victimsgender, victimsaddress, victimsstate, victimsdistrict, victimspincode, victimsreligion, victimsage, incidentplace, incidentstate, incidentdistrict, incidentdate, already, complient)
 VALUES('$yourname', '$gender', '$yourAddress', '$yourstate', '$yourdistrict', '$yourpincode', '$victimsname',
 '$victimsgender', '$victimsaddress', '$victimsstate', '$victimsdistrict', '$victimspincode', '$victimsreligion', '$victimsage', '$incidentplace', '$incidentstate', '$incidentdistrict', '$incidentdate'
 ,'$already','$complient')";

 if ($con->query($sql) === TRUE){
    echo "<script> alert('submitted sucessfully')</script>";
    header("Location:http://localhost/aichat/rest-api/list-complient.php");
 }else{
    echo"error".$sql."<br>".$con->error;
 }
$con->close()
?>