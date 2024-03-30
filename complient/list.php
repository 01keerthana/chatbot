<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>

</head>
<body>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100" style="margin: 20px;" >
            <div class="col-12 col-md-8">
              <div class="card shadow-45-strong" style="border-radius: 1rem; width: 700px;">
                <div class="card-body p-5 text-center">
                  
					<?php
						include('conn.php');
						$query=mysqli_query($conn,"select * from `complient`");
						while($row=mysqli_fetch_array($query)){
					?>
					<h3>YOUR DETAILS</h3>
						<div class='row g-3'>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='YourName'>YourName</label>
								<input type='text' class='form-control' value="<?php echo $row['yourname']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='YourGender'>YourGender</label>
								<input type='text' class='form-control'value="<?php echo $row['gender']; ?>">
							</div>
							<div class='col-md-12' style='font-size:16px;'>
								<label for='yourAddress'>YourAddress</label>
								<input type='text' class='form-control' value="<?php echo $row['youraddress']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='yourstate'>YourState</label>
								<input type='text' class='form-control' value="<?php echo $row['yourstate']; ?>">
							</div>
							<div class='col-md-4' style='font-size:16px;'>
								<label for='yourdistrict'>YourDistrict</label>
								<input type='text' class='form-control' value="<?php echo $row['yourdistrict']; ?>">
							</div>
							<div class='col-md-2' style='font-size:16px;'>
								<label for='yourpincode'>YourPincode</label>
								<input type='text' class='form-control' value="<?php echo $row['yourpincode']; ?>">
							</div>
							
							<div class='col-md-12'>
								<h3>VICTIMS DETAILS</h3>
							</div>
		
							<div class='col-md-6' style='font-size:16px;'>
								<label for='victimsname'>VictimsName</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsname']; ?>">
							</div>
							<div class='col-md-12' style='font-size:16px;'>
								<label for='victimsaddress' >VictimsAddress</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsaddress']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='victimsstate'>VictimsState</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsstate']; ?>">
							</div>
							<div class='col-md-4' style='font-size:16px;'>
								<label for='victimsdistrict'>VictimsDistrict</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsdistrict']; ?>">
							</div>
							<div class='col-md-2' style='font-size:16px;'>
								<label for='victimspincode' >VictimsPincode</label>
								<input type='text' class='form-control' value="<?php echo $row['victimspincode']; ?>">
							</div>
							<div class='col-md-4' style='font-size:16px;'>
								<label for='victimsreligion'>VictimsReligion</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsreligion']; ?>">
							</div>
							<div class='col-md-4' style='font-size:16px;'>
								<label for='victimsage'>VictimsAge</label>
								<input type='text' class='form-control' value="<?php echo $row['victimsage']; ?>">
							</div>
													
							<div class='col-md-12'>
								<h3>INCIDENT DETAILS</h3>
							</div>
		
							<div class='col-md-12' style='font-size:16px;'>
								<label for='incidentplace'>IncidentPlace</label>
								<input type='text' class='form-control' value="<?php echo $row['incidentplace']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='incidentstate'>IncidentState</label>
								<input type='text' class='form-control' value="<?php echo $row['incidentstate']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='incidentdistrict'>IncidentDistrict</label>
								<input type='text' class='form-control' value="<?php echo $row['incidentdistrict']; ?>">
							</div>
							<div class='col-md-6' style='font-size:16px;'>
								<label for='incidentdate'>IncidentDate</label>
								<input type='text' class='form-control' value="<?php echo $row['incidentdate']; ?>">
							</div>
							<div class='col-md-8' style='font-size:16px;'>
								<label for='already'>Is it filed before any Court/State Human Rights Commission:</label>
								<input type='text' class='form-control'value="<?php echo $row['already']; ?>">
		
							</div>
							<div class='col-md-12' style='font-size:16px;'>
								<label for='complient'>Complient</label>
								<input type='text' class='form-control' value="<?php echo $row['complient']; ?>" >
							</div>
							<div class='col-md-12' style='font-size:16px;'>
								<label for='date'>complient reigter date:</label>
								<input type='text' class='form-control' value="<?php echo $row['complientdate']; ?>" >
							</div>
							<div class="btn">
								<a href="edit.php?id=<?php echo $row['userid']; ?>"><button class='btn btn-success' type='button'>Edit</button></a>
								<a href="delete.php?id=<?php echo $row['userid']; ?>"><button class='btn btn-danger' type='button'>delete</button></a>
							</div>
						</div>
						<hr class='hr'></br>
						<?php
							}
						?>
					</div>
				</div>
			</div>
		 </div>
		</div>
	</section>

</body>
</html>