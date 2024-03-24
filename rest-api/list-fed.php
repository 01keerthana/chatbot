<?php
$sql = "SELECT * FROM feedback";
$result = $con->query($sql);

if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    echo "<div style='height: auto; width: 700px; background-color: lightblue; padding: 10px; border-radius: 10px; margin-top: 10px;'>
            <div style=' margin-left: 10px;'>
              <h1 style='color:gray'>".$row["name"]."</h1>
                <div>
                  <p style='color:white'>".$row["msg"]."</p>
                </div>
                <div>
                  <h4 style='color:black; font-size: 10px;' >".$row["date"]."</h4>
                </div> 
            </div>
          </div>";
  }
}
else 
{
  echo "0 results";
}