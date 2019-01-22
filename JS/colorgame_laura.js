var colors = generateRandomColors(6);
// [
// 	"rgb(255, 0, 0)",
// 	"rgb(255, 255, 0)",
// 	"rgb(0, 255, 0)",
// 	"rgb(0, 255, 255)",
// 	"rgb(0, 0, 255)",
// 	"rgb(255, 0, 255)"
// ]

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay =document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#resetButton")
var easyBtn = document.querySelector("#easyButton")
var hardBtn = document.querySelector("#hardButton")

easyBtn.addEventListener("click", function(){
	easyBtn.classList.toggle("selected");
	hardBtn.classList.toggle("selected");
	colors = generateRandomColors(3);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	// 
	for (var i = 0; i < squares.length; i++) {
		if(colors[i]) {
			squares[i].style.background = colors[i]
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.toggle("selected");
	hardBtn.classList.toggle("selected");
})

resetButton.addEventListener("click", function() {
	// generate all new colors
	colors = generateRandomColors(6);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match pickedColor
	colorDisplay.textContent = pickedColor;
	// change colors of squares
	for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor = colors[i]
	}
	// reset background
	h1.style.backgroundColor = "rgb(80, 100, 200)";

})

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
	// add initial colors
	squares[i].style.backgroundColor = colors[i]

	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		console.log("clickedsquare")
	// grab color of clicked square !!! no function or anything needed to retrieve it
	var clickedColor = this.style.backgroundColor;
// CORRECT GUESS
	if(clickedColor === pickedColor) {
		messageDisplay.textContent = "Correct!";
		resetButton.textContent= "Play Again"
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
// NOT CORRECT GUESS
	} else {
		this.style.backgroundColor = "rgb(80, 100, 200)";
		messageDisplay.textContent = "Try again!";

	}
	// compare color to pickedColor
	})
}


function changeColors(newcolor) {
	//loop through all squares to change color
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = newcolor
	}
}

function pickColor() {
	var random = Math.floor(Math.random()*colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	// make an array
	var arr = []
	// add num random colors to arr, repeat num times
	for (var i = 0; i < num; i++) {
		 // get random color and push into arr
		arr.push(randomColor())

	}
	// return that array
	return arr;

}


function randomColor() {
	// pick a "red" from 0 to 255
	var r = Math.floor(Math.random() * 256)
	var g = Math.floor(Math.random() * 256)
	var b = Math.floor(Math.random() * 256)
	// pick a "green" from 0( to 255
		// pick a "blue" from 0 to 255
	return "rgb(" + r + ", " + g + ", " + b + ")"
}
