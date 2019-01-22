var oneButton = document.getElementById("one");
var twoButton = document.querySelector("#two");
var n1 = document.querySelector("#n1")
var n2 = document.querySelector("#n2")
var p1Score = 0;
var p2Score = 0;
var roundinput = document.getElementById("roundinput")
var rounddisplay = document.getElementById("rounddisplay")
var rounds = 5;
var gameOver = false;
var resetButton = document.getElementById("reset")


oneButton.addEventListener("click", function() {
	if(!gameOver){
		p1Score++;
		console.log(p1Score, rounds)
		if (p1Score === rounds) {
			n1.classList.add("winner")
			gameOver = true
		}
		n1.textContent= p1Score;
	}
})


twoButton.addEventListener("click", function() {
	if(!gameOver){
		p2Score++;
		if (p2Score === rounds) {
			n2.classList.add("winner")
			gameOver = true
		}
		n2.textContent= p2Score;
	}
})

resetButton.addEventListener("click", function(){
	console.log("clicked reset")
	reset()
})

function reset() {
	p1Score = 0;
	p2Score = 0;
	n1.textContent = 0;
	n2.textContent = 0;
	gameOver = false;
	n1.classList.remove("winner");
	n2.classList.remove("winner");
}

roundinput.addEventListener("change", function(){
	rounddisplay.textContent = roundinput.value
	rounds = Number(roundinput.value);
	reset();
})
