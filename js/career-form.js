function submitApp() {
	var firstname = document.getElementById("firstname").value.trim();
	var lastname = document.getElementById("lastname").value.trim();
	var email = document.getElementById("email").value.trim();
	var phone = document.getElementById("phone").value.trim();
	var resume = document.getElementById("resume").value.trim();
	var linkedin = document.getElementById("linkedin").value.trim();
	var twitter = document.getElementById("twitter").value.trim();
	var github = document.getElementById("github").value.trim();
	var portfolio = document.getElementById("portfolio").value.trim();
	if (firstname == "" || lastname == "" || email == "" || phone == "" || resume == "") {
		window.alert("Please fill all required information");
	} else {
		window.alert("good");		
	}
}