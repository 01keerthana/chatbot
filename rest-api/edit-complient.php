<?php
if(isset($_POST['submit'])){
  $yourname = $_POST['yourname'];
  $gender = $_POST['gender'];
  $yourAddress = $_POST['yourAddress'];

  $id = $_SESSION['id'];

  $edit_query = mysqli_query($con,"UPDATE complient SET yourname='$yourname', gender='$gender', yourAddress='$yourAddress' WHERE Id=$id ") or die("error occurred");

  if($edit_query)
  {
    // echo "<div class='message'>
    //                     <p>Profile Updated!</p>
    //                 </div> <br>";
    //             echo "<a href='../pages/home.php'><button class='btn'>Go Home</button>";
  header("Location: ../pages/list-complient.php"); 
  }

  }
  else{
    $id = $_SESSION['id'];
    $query = mysqli_query($con,"SELECT*FROM complient WHERE Id=$id ");

    while($result = mysqli_fetch_assoc($query))
    {
      $res_uname = $result['yourname'];
      $res_gender = $result['gender'];
      $res_uaddress = $result['yourAddress'];

    }
  }
?>