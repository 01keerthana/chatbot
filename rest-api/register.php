<?php
include("../php/config.php");
if(isset($_POST['submit'])){
    $username = $_POST['username'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $password = $_POST['password'];

//verifying the unique email

$verify_query = mysqli_query($con,"SELECT Email FROM users WHERE Email='$email'");

if(mysqli_num_rows($verify_query) !=0 ){
    echo "<script>alert('Registeration failed')</script>";    
}
else{
    mysqli_query($con,"INSERT INTO users(Username,Email,Age,Password) VALUES('$username','$email','$age','$password')") or die("Erroe Occured");
    echo "<script>alert('Success')</script>";
    header("Location: http://localhost/aichat/"); 
}
}
?>