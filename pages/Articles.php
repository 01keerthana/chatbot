<?php
  session_start();

  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    //header("Location: ./home.php");
  }
?>
<?php
require("../common/head.php");
?>
<!DOCTYPE html>
<html lang="en">
  <body>

    <!--Navbar start-->
    <header class="header">
      <nav class="navbar">
      <?php require("../common/header.php"); ?>

        <!-- searchbar start -->
        <div class="search-list">
          <form class="form-inline my-2 my-lg-0">
            <select id="select" style=" font-size: 12px; height:35px; width: 100px; margin:10px; border-radius:5px;"  placeholder="Select Type">
              <option value="articles">Articles</option>
              <option value="articles_title">Title</option>
            </select>
            <input class="form-control mr-sm-2" id="text" type="search" placeholder="Search" aria-label="Search" style="font-size:13px;">
            <button  type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#myModal" onclick="check()">Search</button>
          </form>
        </div>
        <!-- searchbar End -->
      </nav>
    </header>
    <!--Navbar End-->

    <?php 
    $set_model_title = "Article";
    require("../common/popup.html");
    ?>

    <!--POPUP End -->

    <!--Page Content-->
    <section class="hero-section">
      <div class="hero" >
        <h2 style=" margin-top:90px;">Articles</h2>
        <p style="text-align: justify;">
          In Indian law, articles refer to specific provisions or sections outlined in the Constitution of India.
          These articles lay down fundamental principles, rights, and duties that govern the nation.
          They cover a wide spectrum of subjects ranging from citizenship, fundamental rights, directive principles of state policy,
          to the organization and powers of the government. Each article serves as a pillar upon which the legal framework of India stands,
          shaping the country's governance, administration, and societal norms. These articles have been meticulously crafted to uphold democracy, justice, equality, and secularism, fostering a harmonious and inclusive society.
          ..Interpreted by the judiciary, articles in Indian law play a pivotal role in safeguarding the rights of citizens and ensuring the rule of law prevails.
        </p>
        <div class="buttons">
          <a href="about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img src="./images/law-5" alt="hero image" />
      </div>
    </section>
    <!--Page Content End-->
    <script src="./js/Articles.js"></script>
</body>

<?php require("../common/inc.php"); ?>
</html>