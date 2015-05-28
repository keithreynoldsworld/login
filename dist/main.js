
$(document).on('ready', function(){

	function theIronYard(e){
		var u = $('#user').val();
		var p = $('#password').val();
		e.preventDefault();
		console.log(u);console.log(p);
		console.log("iron");
		if(u === "aaron@theironyard.com" && p === "password123"){ window.location.replace("http://www.theironyard.com");}
		if(u === "admin@google.com" && p === "pandas"){ window.location.replace("http://www.theironyard.com");}
		if(u === "keithreynoldworld@gmail.com" && p === "honeycrisp"){ window.location.replace("http://www.theironyard.com");}
		console.log('vvaall');	
		if(u.indexOf('@') === -1){$('#section1').html("please enter an email address before logging in<br/>");}
		if(p === ""){$('#section2').html("please enter a password before logging in<br/>");}
		if(u !== "aaron@theironyard.com" || u !== "admin@google.com" || u !== "keithreynoldsworld@gmail.com"){$('#section3').html("your user name was not found<br/>");}
		if(u === "aaron@theironyard.com" && p !== "password123"){$('#section3').html("wrong password, Aaron");}
		if(u === "admin@google.com" && p !== "pandas"){$('#section3').html("wrong password, dummy");}
		if(u === "keithreynoldsworld@gmail.com" && p !== "honeycrisp"){$('#section3').html("wrong password, oh great one");}
		e.preventDefault();
	}	

	$('button').on('click', theIronYard);
	
		
});
