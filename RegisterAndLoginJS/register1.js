
var attemptLeft = 5;

function get_click() {
	var fname = document.getElementById('firstName')
	var lname = document.getElementById('lastName')
	var mail = document.getElementById('mailId')
	var pass = document.getElementById('inputPassword')
	var cpass = document.getElementById('confirmPassword')
	var phno = document.getElementById('phoneNo')
	if(fname.value.length == 0)
		alert("FirstName required")
	else if(lname.value.length == 0)
		alert("LastName required")
	else if(mail.value.length==0 && pass.value.length==0)
		alert("email and Password cannot be empty.")
	else if(mail.value.length==0 ||pass.value.length==0 )
		alert("email or password cannot be empty.")
	else if(pass.value.length<6)
		alert("Password must be at least 6 characters long.");
	else if(phno.value.length>10)
		alert("Please enter 10 digit phone number")
	else if(cpass.value.length == 0 || cpass.length < 6)
		alert("Correct Password is required")
	else if(fname.value == "Peter" && lname.value == "John" && mail.value == "admin@gmail.com" && pass.value == "admin123" && cpass.value == "admin123" && phno.value == "1234567890") {
		alert("Registration Successfull");
		window.open("","Welcome","width=500,height=300,toolbar=0");
		//alert("Registration Successfull");
	} else {
        attemptLeft --;
        alert("You have left "+attemptLeft+" attempts;");
    
        if( attempt == 0){
            document.getElementById("mail").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("signup").disabled = true;
            return false;
        }
    }
}