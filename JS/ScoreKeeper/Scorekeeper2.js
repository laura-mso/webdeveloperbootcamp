var oneButton = document.getElementById("one");
var twoButton = document.querySelector("#two");
var p1Score = 0;
var p2Score = 0;
var roundinput = document.getElementById("roundinput")
var rounds = 5;

var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")

oneButton.addEventListener("click", function() {
	p1Score++;
	console.log(p1Score);
	n1.textContent= Math.min(p1Score,7)
})


oneButton.addEventListener("click", function() {
	p2Score++;
	console.log(p2Score);
	n1.textContent= Math.min(p1Score,7)
})


roundinput.addEventListener('input', function () {
    console.log(roundinput)
});