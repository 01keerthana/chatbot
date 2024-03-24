<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
   // header("Location: ./home.php ");
  }
?>

<!DOCTYPE html>
<html lang="en">
<?php
require("../common/head.php");
?>
  <body>
      <!--NavBar Start-->
    <header class="header">
      <nav class="navbar">
        <?php require("../common/header.php"); ?>

        <!--SearchBar Start-->
        <div class="searchbar-content" >
          <form class="form-inline my-2 my-lg-0">
            <select id="select" style=" font-size: 12px; height:35px; width: 100px; margin:10px; border-radius:5px;" >
              <option value="section">Section</option>
              <option value="section_title">Section-Title</option>
            </select>
              <input class="form-control mr-sm-2" id="text" type="search" placeholder="Search" aria-label="Search" style="font-size:13px;">
              <button  type="button"  class="btn btn-primary gap-2 mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onclick="check()">Search</button>
          </form>
        </div>
        <!--SearchBar End-->
      </nav>
    </header>
    
        <?php 
        $set_model_title = "MVA";
        require("../common/popup.html");
        ?>

    <!--Page Content-->
    <section class="hero-section">
      <div class="hero" >
        <h2 style=" margin-top:90px;">MVA</h2>
        <p style="text-align: justify;">
          The Motor Vehicles Act (MVA) in Indian law serves as a comprehensive statute governing all matters related to motor vehicles and road transport. Enacted in 1988 and subsequently amended, the MVA outlines regulations pertaining to the registration, licensing, insurance, and operation of motor vehicles across the country. It establishes norms for road safety, traffic management, and vehicle standards to ensure the well-being of road users. The MVA also delineates penalties for traffic violations and offenses, aiming to deter reckless driving and promote responsible behavior on the roads. Through its provisions, the MVA plays a crucial role in regulating the burgeoning automotive sector and fostering a safe and efficient transportation ecosystem in India. Amendments and updates to the MVA reflect evolving technology, societal needs, and global best practices in road transport governance.</p>
        <div class="buttons">
          <a href="about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img src="./images/law4" alt="hero image" />
      </div>
    </section>
    <!--Page Content End-->
</body>

<script src="./js/MVA.js"></script>
<?php require("../common/inc.php"); ?>
</html>