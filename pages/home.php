<?php
  session_start();
  include("../php/config.php");
  if(!isset($_SESSION['valid'])){
    // header("Location: ./home.php ");
  }

?>
<?php
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
        <p id="text-content"></p>

        <p>If you want to Know the BNS(Bharatiya Nyaya Samhita) section and others details use the chatbot.</p>
        <div class="buttons">
          <a href="http://localhost:3000/chat" class="join">Learn More From Bot</a>
          <a href="about.php" class="learn">Read More</a>
        </div>
      </div>
      <div class="img">
        <img decoding="async" id="random-image" src="" alt="Random image" style="height: 325px;" />
      </div>
    </section>
    <!--Page Content End-->
</body>

<script src="./js/images-random.js"></script>
<script src="./js/text-random.js"></script>

<?php require("../common/inc.php"); ?>