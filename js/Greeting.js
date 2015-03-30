var today = new Date();
var hour = today.getHours();
var FullGreeting;

if (hour >17) {
	FullGreeting = 'Good evening and welcome to my site!';} 
else if (hour > 12) {
	FullGreeting = 'Good afternoon and welcome to my site!';}
else if (hour > 0) {FullGreeting = 'Good morning and welcome to my site!';}

var el = document.getElementById('greeting');
el.textContent = FullGreeting;


















