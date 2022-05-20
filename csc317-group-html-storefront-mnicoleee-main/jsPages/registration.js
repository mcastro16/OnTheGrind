// Input Fields
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submit = document.getElementById('submit');
// Form
var form = document.querySelector('form');

form.addEventListener('submit', e => {
	e.preventDefault();

	checkInputs();
});

function checkInputs() {
	//validation fails if firstName inputs are blank
	if (fname=null || fname ==''){
		alert(fname,'First Name cannot be blank');
		return false;
	}
	else{
		true;
	}
	//validation fails if lastName inputs are blank
	if (lname=null || lname ==''){
		alert(lname, 'Last Name cannot be blank');
		return false;
	}
	else{
		true;
	}
	//validation fails if email inputs are blank
	if (email=null || email ==''){
		alert(email, 'Email cannot be blank');
		return false;
	}
	else{
		true;
	}
	// validations checks if email doesn't have invalid characters
	const matchEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if (email.value.match(matchEmail)) {
		alert(email, 'Invalid Email');
		return false;
	}
	else{
		true;
	}
	// validation fails if password inputs are blank or under 8 characters long
	if (password=null || password ==''){
		alert(password, 'Password cannot be blank');
		return false;
	}
	else if ((password.length <= 4) || (password.lenght > 30)) {
		alert(password, 'The password must be between 4 and 30 characters.');
	}
	else{
		true;
	}

	// Validation checks if passwords match
	if (password.value !== confirmPassword.value) {
		alert(confirmPassword, 'Passwords must match');
		return;
	  } else {
		   true;
	  }

};