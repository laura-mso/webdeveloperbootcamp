// create secretNumber

var secretNumber = 4;

var firstguess = Number(prompt("Guess a number"));

if(firstguess == secretNumber) {
	alert("You are right")
}

else if(firstguess > secretNumber) {
	alert("Too high")
}

else {
	alert("Too low")
}
