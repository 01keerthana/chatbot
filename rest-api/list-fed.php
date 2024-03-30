<?php
$sql = "SELECT * FROM feedback";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "
        <h5 style='color: white;'>".$row["name"]."</h5>
        <p style='color: white;'>".$row["msg"]."</p>
        <p style='color: white; font-size: 10px;'>".$row["date"]."</p>
        <hr class='hr'>";
  }
}
else 
{
  echo "0 results";
}