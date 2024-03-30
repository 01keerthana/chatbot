<?php
  session_start();
  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    // header("Location: ./home.php ");
  }

?>
<?php
$set_title = "Home";
require("../common/head.php");
?>
<body>
  <!--NavBar Start-->
    <header class="header">
      <nav class="navbar">
      <?php require("../common/header.php"); ?>
          <!--Profile Content-->
          <div class="buttons">
            <div class="right-links">
                <?php require("../common/validation.php") ?>
                <a href="../php/logout.php"> <button type="button" class="btn btn-danger" style="font-size: 12px; height:35px; width: 100px; margin:10px; border-radius:5px;">Log Out</button> </a>
            </div>
          </div>
          <!--Profile Content End-->
      </nav>
    </header>
    <!--NavBar End-->

    <!--Page Content-->
    <section class="hero-section">
      <div class="hero" >
        <h2>Indian Law</h2>
        <p id="text-content" style="text-align: justify;"></p>

        <p style="text-align: justify;">If you want to Know the BNS(Bharatiya Nyaya Samhita) section and others details use the chatbot.</p>
        <div class="buttons">
          <a href="http://localhost:3000/chat" class="join">Learn More From Bot</a>
          <a href="../about/about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img decoding="async" id="random-image" src="" alt="Random image" style="height: 400px; width: 350px; border-radius: 10px;" />
      </div>
    </section>
    <!--Page Content End-->
</body>

<script src="./js/images-random.js"></script>
<script src="./js/text-random.js"></script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
</html>