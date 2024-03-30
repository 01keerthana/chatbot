<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    //header("Location: ./home.php");
  }
?>
<?php
$set_title = "CRPC";
require("../common/head.php");
?>
<!DOCTYPE html>
<html lang="en">
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
              <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onclick="check()">Search</button>
          </form>
        </div>
        <!--SearchBar End-->
      </nav>
    </header>
          <?php 
            $set_model_title = "CRPC";
            require("../common/popup.html");
          ?>

    <!--Page Content-->
    <section class="hero-section">
      <div class="hero" >
        <h2 style=" margin-top:90px;">CrPC</h2>
        <p style="text-align: justify;">
          The Code of Criminal Procedure (CrPC) in Indian law is a comprehensive legal framework governing the procedural aspects of criminal justice administration. Enacted in 1973, it lays down procedures for the investigation, trial, and punishment of criminal offenses across the country. The CrPC delineates the powers and responsibilities of law enforcement agencies, courts, and other stakeholders involved in the criminal justice system. It ensures fair treatment of both the accused and the victims, safeguarding their rights throughout the legal process. Through its provisions, the CrPC aims to promote transparency, efficiency, and accountability in the dispensation of justice, upholding the principles of due process and the rule of law. Amendments and judicial interpretations continually adapt the CrPC to meet evolving societal needs and uphold constitutional values.</p>
        <div class="buttons">
          <a href="../about/about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img src="./images/law3" alt="hero image" />
      </div>
    </section>
    <!--Page Content End-->
</body>

<script src="./js/CrPC.js"></script>
<?php require("../common/inc.php"); ?>
</html>