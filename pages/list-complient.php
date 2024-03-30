<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    //header("Location: ./home.php ");
  }
?>
<!DOCTYPE html>
<html lang="en">
    <head>
    <link rel="icon" type="image/x-icon" href="./images/ashoka.png">
    <link rel="stylesheet" href="../css/pages.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>
        <title>List</title>
    </head>
  <body style="height:100vh; width:100%; background: linear-gradient(to bottom, #175d69 23%, #330c43 95%);">
      <!--NavBar Start-->
    <header class="header">
      <nav class="navbar">
        <?php require("../common/header.php"); ?>
      </nav>
    </header>
          <!--NavBar End-->
          <!-- page content -->
        <div style='margin:55px;'> 
          <h1 style="color:white;">Your Complient</h1>
          <?php include("../rest-api/list-complient.php")?>
        </div>
    </body>
</html>
          