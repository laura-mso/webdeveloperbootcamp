function isEven(num) {
	return num%2 == 0
}

// factorial version 1
function factorial(num) {
	if(num==0) {
		return 1
 }else{
	var result = num
	for (var i = num - 1; i >= 1; i--) {
		 result = result * i
	}
	return result;
} 
}


function factorial2(number) {
	var result = 1;
	for (var i = 2; i <= number; i++) {
		result = result * i;
	}
	return result
}


function kebabToSnake(word) {
	for (var i = 0; i < word.length; i++) {
		if (word[i] == "-") {
			word[i] = "_"
		}
	}
	return word
}



function kebabToSnake2(word) {
	var newWord = word.replace(/-/g , "_");
	return newWord;
}