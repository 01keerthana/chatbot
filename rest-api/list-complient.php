<?php

include("../php/config.php"); 

$sql = "SELECT * FROM complient";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "
    <div class='card'>
      <div class='card-body'>
        <p style='font-size:20px;'>your-name:".$row["yourname"]."</p>
        <p style='font-size:20px;'>Your-gender:".$row["gender"]."</p>
        <p style='font-size:20px;'>your-Address:".$row["yourAddress"]."</p>
        <p style='font-size:20px;'>your-state:".$row["yourstate"]."</p>
        <p style='font-size:20px;'>your-district:".$row["yourdistrict"]."</p>
        <p style='font-size:20px;'>your-pincode:".$row["yourpincode"]."</p>
        <p style='font-size:20px;'>victim-name:".$row["victimsname"]."</p>
        <p style='font-size:20px;'>victim-gender:".$row["victimsgender"]."</p>
        <p style='font-size:20px;'>victim-address:".$row["victimsaddress"]."</p>
        <p style='font-size:20px;'>victim-state:".$row["victimsstate"]."</p>
        <p style='font-size:20px;'>victim-district:".$row["victimsdistrict"]."</p>
        <p style='font-size:20px;'>victim-pincode:".$row["victimspincode"]."</p>
        <p style='font-size:20px;'>victim-age:".$row["victimsage"]."</p>
        <p style='font-size:20px;'>incident-place:".$row["incidentplace"]."</p>
        <p style='font-size:20px;'>incident-state:".$row["incidentstate"]."</p>
        <p style='font-size:20px;'>incident-date:".$row["incidentdate"]."</p>
        <p style='font-size:20px;'>Is it filed before any Court/State Human Rights Commission:".$row["already"]."</p>
        <p style='font-size:20px;'>complient:".$row["complient"]."</p>
        <p style=' font-size: 15px;'>Complient register date:".$row["complientdate"]."</p>
        <a href='../pages/edit-complient.php'><button class='btn btn-danger' type='button'>Edit</button></a>
      </div>
    </div>
    <hr class='hr'>";
  }
}
else 
{
  echo "0 results";
  echo "";
}


?>