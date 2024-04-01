<?php
	include('conn.php');
	$id=$_GET['id'];
	$query=mysqli_query($conn,"select * from `complient` where userid='$id'");
	$row=mysqli_fetch_array($query);
?>
<!DOCTYPE html>
<html>
<head>
<title>Basic MySQLi Commands</title>
	<link rel="stylesheet" href="../css/form.css">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
	<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC' crossorigin='anonymous'>

</head>
<body>
		<div class='card' style='margin: 55px;'>
        	<div class = 'card-body' style='font-size:10px;'>
				<h3>YOUR DETAILS</h3>
					<div class='row g-3'>
						<div class='col-md-6' style='font-size:16px;'>
							<label for='YourName'>YourName</label>
							<input type='text' class='form-control'  name="yourname" value="<?php echo $row['yourname']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='YourGender'>YourGender</label>
							<input type='text' class='form-control' name="gender" value="<?php echo $row['gender']; ?>">
						</div>

						<div class='col-md-12' style='font-size:16px;'>
							<label for='yourAddress'>YourAddress</label>
							<input type='text' class='form-control' name="youraddress" value="<?php echo $row['youraddress']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='yourstate'>YourState</label>
							<input type='text' class='form-control' name="yourstate" value="<?php echo $row['yourstate']; ?>">
						</div>

						<div class='col-md-4' style='font-size:16px;'>
							<label for='yourdistrict'>YourDistrict</label>
							<input type='text' class='form-control' name="yourdistrict" value="<?php echo $row['yourdistrict']; ?>">
						</div>

						<div class='col-md-2' style='font-size:16px;'>
							<label for='yourpincode'>YourPincode</label>
							<input type='text' class='form-control' name="yourpincode" value="<?php echo $row['yourpincode']; ?>">
						</div>
						
						<div class='col-md-12'>
							<h3>VICTIMS DETAILS</h3>
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='victimsname'>VictimsName</label>
							<input type='text' class='form-control' name="victimsname" value="<?php echo $row['victimsname']; ?>">
						</div>

						<div class='col-md-12' style='font-size:16px;'>
							<label for='victimsaddress' >VictimsAddress</label>
							<input type='text' class='form-control' name="victimsaddress" value="<?php echo $row['victimsaddress']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='victimsstate'>VictimsState</label>
							<input type='text' class='form-control' name="victimsstate" value="<?php echo $row['victimsstate']; ?>">
						</div>

						<div class='col-md-4' style='font-size:16px;'>
							<label for='victimsdistrict'>VictimsDistrict</label>
							<input type='text' class='form-control' name="victimsdistrict" value="<?php echo $row['victimsdistrict']; ?>">
						</div>

						<div class='col-md-2' style='font-size:16px;'>
							<label for='victimspincode' >VictimsPincode</label>
							<input type='text' class='form-control' name="victimspincode" value="<?php echo $row['victimspincode']; ?>">
						</div>

						<div class='col-md-4' style='font-size:16px;'>
							<label for='victimsreligion'>VictimsReligion</label>
							<input type='text' class='form-control' name="victimsreligion" value="<?php echo $row['victimsreligion']; ?>">
						</div>

						<div class='col-md-4' style='font-size:16px;'>
							<label for='victimsage'>VictimsAge</label>
							<input type='text' class='form-control' name="victimsage" value="<?php echo $row['victimsage']; ?>">
						</div>
											
						<div class='col-md-12'>
							<h3>INCIDENT DETAILS</h3>
						</div>

						<div class='col-md-12' style='font-size:16px;'>
							<label for='incidentplace'>IncidentPlace</label>
							<input type='text' class='form-control' name="incidentplace" value="<?php echo $row['incidentplace']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='incidentstate'>IncidentState</label>
							<input type='text' class='form-control' name="incidentstate" value="<?php echo $row['incidentstate']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='incidentdistrict'>IncidentDistrict</label>
							<input type='text' class='form-control' name="incidentdistrict" value="<?php echo $row['incidentdistrict']; ?>">
						</div>

						<div class='col-md-6' style='font-size:16px;'>
							<label for='incidentdate'>IncidentDate</label>
							<input type='date' class='form-control' name="incidentdate" value="<?php echo $row['incidentdate']; ?>">
						</div>

						<div class='col-md-8' style='font-size:16px;'>
							<label for='already'>Is it filed before any Court/State Human Rights Commission:</label>
							<input type='text' class='form-control' name="already" value="<?php echo $row['already']; ?>">
						</div>

						<div class='col-md-12' style='font-size:16px;'>
							<label for='complient'>Complient</label>
							<input type='text' class='form-control' name="complient" value="<?php echo $row['complient']; ?>" >
						</div>
						<div class="btn">
							<button type="submit" name="submit" class="btn btn-success" onclick="sendEmail()">Upload</button>
							<a href="list.php"><button class="btn btn-primary">Back</button></a>
						</div>

			</div>
		</div>
</body>
<script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
</script>
<script type="text/javascript">
   (function(){
      emailjs.init({
        publicKey: "rP3qMcAJxjmFRnqa_",
      });
   })();
</script>

<script src="./js/index.js"></script>

</html>