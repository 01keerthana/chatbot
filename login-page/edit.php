<?php
session_start();

include("../php/config.php");
if(!isset($_SESSION['valid'])){
    header("Location: login.php");
}
?>
<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Change Profile</title>

    <link rel="stylesheet" href="../css/style.css">
    <link rel="stylesheet" href="../css/pages.css">

    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>

<body>
    <!--NavBar Start-->
    <header class="header">
            <div class="logo">
                <p style="float:left; margin:35px; "><a href="../pages/home.php" style="color:white; font-weight: 100; "> Home </a></p>
                    <a href="../php/logout.php"> <button type="button" id="button-logout-edit"class="btn btn-danger" style="float:right; margin: 35px; font: size 10px;font-size: 15px; height:35px; width: 100px; border-radius:5px;">Log Out</button> </a>
            </div>
    </header>
        <!--NavBar End-->

        <!--Profile Changing Content-->
        <div class="container">
            <div class="box form-box">
                <?php require("../rest-api/edit.php"); ?>
                <header>Change Profile</header>
                <?php require("./html/form.html"); ?>
            </div>
            
        </div>
        <!--Profile Changing Content End-->

</body>
</html>