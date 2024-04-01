function sendEmail(){
    var params = {
        yourname: document.getElementById('yourname').value,
        youraddress: document.getElementById('youraddress').value,
        yourdistrict: document.getElementById('yourdistrict').value,
        yourstate: document.getElementById('yourstate').value,
        phonenumber: document.getElementById('phonenumber').value,
        incidentdate: document.getElementById('incidentdate').value,
        incidentplace: document.getElementById('incidentplace').value,
        complient: document.getElementById('complient').value
    };
    
    const serviceId = "service_a6sm5ab";
    const templateId = "template_o84r6zf";
    
    emailjs.send(serviceId, templateId, params)
      .then(
        res => {
          document.getElementById("yourname").value = "";
          document.getElementById("youraddress").value = "";
          document.getElementById("yourdistrict").value = "";
          document.getElementById("yourstate").value = "";
          document.getElementById("phonenumber").value = "";
          document.getElementById("incidentdate").value = "";
          document.getElementById("incidentplace").value = "";
          document.getElementById("complient").value = "";
          console.log(res);
          alert("Your complient has been sent!");
        }
      )
      .catch(
        err => {
          console.log(err);
        }
      );
  }