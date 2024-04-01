<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Complient-Page</title>
    <link rel="icon" type="image/x-icon" href="../images/ashoka.png">
    <link rel="stylesheet" href="../css/form.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
</head>
<body style="color: black;">
  <div class="logo">
    <p style="float:left; margin-left:15px; margin-top:20px; margin-bottom:35px; font-size:20px; "><a href="../pages/homers.html" style="color:white; font-weight: 100; "> Home </a></p>
  </div>
    <section class="vh-100">
        <div class="container py-5 h-100">
          <div class="row d-flex justify-content-center align-items-center h-100" style="margin: 20px;" >
            <div class="col-12 col-md-8">
              <div class="card shadow-45-strong" style="border-radius: 1rem; width: 700px;">
                <div class="card-body p-5 text-center">
      
                  <h1 class="mb-5">Complient Form</h1>
                  
                  <h3>YOUR DETAILS</h3>
                    <form class="row g-3" action="add.php" method="POST">
                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="yourname" class="form-label">Name</label>
                        <input type="text" class="form-control" id="yourname" name="yourname" placeholder="Mention your Name" required>
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="gender" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="gender" name="gender"  placeholder="Mention Your Gender" required>
                      </div>

                      <div class="col-12" style="font-size: 16px;">
                        <label for="yourAddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="youraddress" name="youraddress" placeholder="Mention Your Address" required>
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="yourstate" class="form-label">State</label>
                        <input type="text" class="form-control" id="yourstate" name="yourstate" placeholder="Mention Your State" required>
                      </div>

                      <div class="col-md-4" style="font-size: 16px;">
                        <label for="yourdistrict" class="form-label">District</label>
                        <input type="text" class="form-control" id="yourdistrict" name="yourdistrict" placeholder="Mention Your District" required>  
                      </div>

                      <div class="col-md-2" style="font-size: 16px;">
                        <label for="yourpincode" class="form-label">Pincode</label>
                        <input type="number" class="form-control" id="your-pincode" name="yourpincode" placeholder="Pincode" required>
                      </div>
                      
                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="phonenumber" class="form-label">PhoneNumber</label>
                        <input type="number" class="form-control" id="phonenumber" name="yourpincode" placeholder="your moblie number" required>
                      </div>

                      <div class="col-md-12">
                        <hr class="hr"/>
                          <h3>VICTIMS DETAILS</h3>
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="victimsname" class="form-label">Name</label>
                        <input type="text" class="form-control" id="victims-name" name="victimsname" placeholder="Mention complete name of the victim">
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="victimsgender" class="form-label">Gender</label>
                        <input type="text" class="form-control" id="victims-gender" name="victimsgender" placeholder="Mention the sex of the victim" required>
                      </div>

                      <div class="col-12" style="font-size: 16px;">
                        <label for="victimsaddress" class="form-label">Address</label>
                        <input type="text" class="form-control" id="victims-adddress" name="victimsadddress" placeholder="Mention Complete address of the victim">
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="victimsstate" class="form-label">State</label>
                        <input type="text" class="form-control" id="victims-state" name="victimsstate" placeholder="Mention the state of the victim">
                      </div>

                      <div class="col-md-4" style="font-size: 16px;">
                        <label for="victimsdistrict" class="form-label">District</label>
                        <input type="text" class="form-control" id="victims-district" name="victimsdistrict" placeholder="Mention the district of the victim">  
                      </div>

                      <div class="col-md-2" style="font-size: 16px;">
                        <label for="victimspincode" class="form-label">Pincode</label>
                        <input type="number" class="form-control" id="victims-pincode" name="victimspincode" placeholder="Pincode">
                      </div>

                      <div class="col-md-4" style="font-size: 16px;">
                        <label for="victimsreligion" class="form-label">Religion</label>
                        <input type="text" class="form-control" id="victims-religion" name="victimsreligion" placeholder="Mention religion of the victim .">  
                      </div>

                      <div class="col-md-4" style="font-size: 16px;">
                        <label for="victimsage" class="form-label">Age</label>
                        <input type="number" class="form-control" id="victims-age" name="victimsage"  placeholder="Mention age of the victim.">
                      </div>
                      
                      <div class="col-md-12">
                        <hr class="hr"/>
                          <h3>INCIDENT DETAILS</h3>
                      </div>

                      <div class="col-md-12" style="font-size: 16px;">
                        <label for="incidentplace" class="form-label">Place</label>
                        <input type="text" class="form-control" id="incidentplace" name="incidentplace" placeholder="Mention exact place of incident i.e. locality, Village, Town, City" required>
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="incidentstate" class="form-label">State</label>
                        <input type="text" class="form-control" id="incident-state" name="incidentstate" placeholder="Select Name of State from the list, where incident occurred" required>
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="incidentdistrict" class="form-label">District</label>
                        <input type="text" class="form-control" id="incident-district" name="incidentdistrict" placeholder="Select Name of District from the list, where incident occurred" required>  
                      </div>

                      <div class="col-md-6" style="font-size: 16px;">
                        <label for="incidentdate" class="form-label">Incident Date</label>
                        <input type="date" class="form-control" id="incidentdate" name="incidentdate" required>
                      </div>
                      
                      <div class="col-md-8" style="font-size: 16px;">
                        <label for="already" class="form-label">	Is it filed before any Court/State Human Rights Commission</label>
                        <input type="text" class="form-control" id="already" name="already" placeholder="yes or no" required>
                      </div>

                      <div class="form-outline col-md-12" style="font-size: 16px;" >
                        <label class="form-label" for="complient">Message</label>
                        <textarea class="form-control" id="complient" name="complient" rows="4" placeholder="Brief summary of facts/allegations of the incident/complaint" required></textarea>
                      </div>
                      
                      <div class="d-grid gap-2 col-6 mx-auto">
                      </br>
                          <button class="btn btn-success" onclick="sendEmail()">Post</button>
                      </div>
                      
                    </form>
                </div>  
              </div>
            </div>
          </div>
        </div>
  </section>
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