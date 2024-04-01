<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    //header("Location: ./home.php ");
  }
?>
<?php
$set_title = "IPC";
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
              <button  type="button" class="btn btn-primary mt-2" data-bs-toggle="modal" data-bs-target="#myModal" onclick="check()">Search</button>
          </form>
        </div>
        <!--SearchBar End-->
      </nav>
    </header>
          <!--NavBar End-->
        <?php 
          $set_model_title = "IPC";
          require("../common/popup.html");
        ?>

        <!--Page Content-->
    <section class="hero-section">
      <div class="hero" >
        <h2 style="margin-top:70px;">IPC</h2>
        <p style="text-align: justify;">
          The Indian Penal Code (IPC) is a comprehensive legal document that defines various criminal offenses and prescribes corresponding punishments within India. Enacted in 1860 during British rule, it serves as the primary statute governing criminal law in the country. The IPC covers a wide range of offenses, including theft, assault, fraud, and homicide, among others. It ensures uniformity and consistency in the application of criminal law across the nation. Through its provisions, the IPC aims to deter criminal behavior, protect the rights of individuals, and uphold justice in society. Amendments over the years have adapted the IPC to address evolving societal norms and challenges.</p>
        <p style="padding: 10px;">If you want to Know the BNS(Bharatiya Nyaya Samhita) section and others details use the chatbot.</p>
        <div class="buttons">
          <a href="../about/about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img src="./images/law-1" alt="hero image" />
      </div>
    </section>
      <!--Page Content End-->
</body>

<script src="./js/IPC.js"></script>
<?php require("../common/inc.php");?>
</html>