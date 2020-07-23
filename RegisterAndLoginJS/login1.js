var attemptLeft = 5;

function on_click() {
	var mail = document.getElementById('mailId')
	var pass = document.getElementById('inputPassword')
	if(mail.value.length==0 && pass.value.length==0)
		alert("Username and Password cannot be empty.")
	else if(mail.value.length==0 ||pass.value.length==0 )
	alert("Username or password cannot be empty.")
	else if(pass.value.length<6)
		alert("Password must be at least 6 characters long.");  
	else if(mail.value == "admin@gmail.com" && pass.value == "admin123")
		alert("Login Successfull");
	   
	else {
        attemptLeft --;
        alert("You have left "+attemptLeft+" attempts;");
    
        if( attempt == 0){
            document.getElementById("mail").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("signin").disabled = true;
            return false;
        }
    }
}
