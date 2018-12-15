
var bells = new Audio;
bells.src = "audio/bells.mp3";
bells.autoplay = false;

var cross = new Audio;
cross.src = "audio/cross.mp3";
cross.autoplay = false;

var theme = new Audio;
theme.src = "../NEW_CD/Evolve/Thunder.mp3";
theme.autoplay = true;

//--- LOGIN --\\
function login(username, password){
	var username = document.getElementById('username-field').value;
	var password = document.getElementById('password-field').value;
	
	if(username == "" || username == null){
		alert('Username field must not be empty.');
	} else if(password == "" || password == null){
		alert('Password field must not be empty.');
	} else {
		alert('username: ' + username + ' /password: ' + password);
		$('#loginWindow').modal('hide');
	}
};





