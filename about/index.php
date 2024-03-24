<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    header("Location: ./home.php ");
  }
?>

<?php require("../common/head.php"); ?>

<!DOCTYPE html>
<html lang="en">
  <head>
  <link rel="icon" type="image/x-icon" href="img/image.png">
    <?php require("inc.php"); ?>
  </head>
  <body>
        <!--NavBar Start-->
    <header class="header">


          <!--Profile Content-->
          <div class="logo">
                <p style="float:left; margin:35px; "><a href="../pages/home.php" style="color:white; font-weight: 100; "> Home </a></p>
                    <a href="../php/logout.php"> <button type="button" id="button-logout-edit"class="btn btn-danger" style="float:right; margin: 35px; font: size 10px;font-size: 15px; height:35px; width: 100px; border-radius:5px;">Log Out</button> </a>
            </div>
          <!--Profile Content End-->

    </header>
    <!--NavBar End-->
    
    <?php require("../pages/html/about.html"); ?>
    </section>
<!-- ================================= feedback   ============================================= -->

  <div class="row gap" style="margin-left: 20px;">
    <div class="col-sm-6">

    <?php require("../php/feedback.php"); ?>

    </div>
    <div class="col-sm-6 ">
      <?php require("../rest-api/list-fed.php"); ?>
    </div>
  </div>

    <!-- Swiper JS -->
    <script src="swiper-bundle.min.js"></script>

    <!-- JavaScript -->
    <script src="script.js"></script>
  </body>
</html>
