var age = Number(prompt("What is your age in years?"));

if(age<0){
	console.log("Error")
};

if(age%2 != 0){
	console.log("Your age is odd")
};

if(age<18){
	console.log("Sorry you are too young")
}

else if(age<21) {
	console.log("You can get in, but you can't drink")
}

else if(age==21) {
	console.log("Happy 21st")
}

else {
	console.log("You can get in")
}
