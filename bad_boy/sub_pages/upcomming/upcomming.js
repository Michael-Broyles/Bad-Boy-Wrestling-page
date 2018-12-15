
function cdtd() {
	
	var target_date = new Date("December 25, 2018 00:01:00");
	var now = new Date();
	var time_difference = target_date.getTime() - now.getTime();
	
		if(time_difference <= 0) {
			clearTimeout(timer);
			document.write("Target Date Reached!!!");
		}
	
	var seconds = Math.floor(time_difference / 1000);
	var minutes = Math.floor(seconds / 60);
	var hours = Math.floor(minutes / 60);
	var days = Math.floor(hours / 24);
	var months = Math.floor(days / 30);
	days %= 30;
	hours %= 24;
	minutes %= 60;
	seconds %= 60;
	
	document.getElementById("months_box").innerHTML = "MONTHS: " + months;
	document.getElementById("days_box").innerHTML = "DAYS: " + days;
	document.getElementById("hours_box").innerHTML = "HOURS: " + hours;
	document.getElementById("mins_box").innerHTML = "MINUTES: " + minutes;
	document.getElementById("secs_box").innerHTML = "SECONDS: " + seconds;
	
	var timer = setTimeout('cdtd()',1000);
	
}



