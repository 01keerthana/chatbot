<?php
if(isset($_POST['submit'])){
  $username = $_POST['username'];
  $email = $_POST['email'];
  $age = $_POST['age'];

  $id = $_SESSION['id'];

  $edit_query = mysqli_query($con,"UPDATE users SET Username='$username', Email='$email', Age='$age' WHERE Id=$id ") or die("error occurred");

  if($edit_query)
  {
    // echo "<div class='message'>
    //                     <p>Profile Updated!</p>
    //                 </div> <br>";
    //             echo "<a href='../pages/home.php'><button class='btn'>Go Home</button>";
  header("Location: ../pages/homers.html"); 
  }

  }
  else{
    $id = $_SESSION['id'];
    $query = mysqli_query($con,"SELECT*FROM users WHERE Id=$id ");

    while($result = mysqli_fetch_assoc($query))
    {
      $res_Uname = $result['Username'];
      $res_Email = $result['Email'];
      $res_Age = $result['Age'];

    }
  }
?>