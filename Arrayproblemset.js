console.log("Test")
 //change 
list = [1,2,3,4,5];

function printReverse(list) {
	for (var i = list.length - 1; i >= 0; i--) {
		console.log(list[i])
	}
}


// isUniform: why does is not work this way around? having first the true and then the false? 
// why does it not iterate until the end?
function isUniform3(list) {
  var truth = false;

  for (var i = 0; i < list.length; i++) {
	if (list[i+1] !== list[i]) {
	  
	}
  }

  return truth;
}




// isUniform: why does is not work this way around? having first the true and then the false? 
// why does it not iterate until the end?
function isUniform1(list) {
  for (var i = 1; i < list.length; i++) {
	if (list[i] === list[0]) {
			return true
		}
	}
	return false;
}

// SOLUTION isuniform
function isUniform2(list) {
	//var first=list[0];
	for (var i = 1; i < list.length; i++) {
		if(list[i] !== list[0]){
			return false
		}
	}
	return true;
}


// sumArray
function sumArray(list) {
	var sum = 0
	for (var i = 0; i < list.length; i++) {
		sum += list[i]
	}
	return sum
}

// solution sumArray with .forEach
function sumArray2(list) {
	var sum = 0
	list.forEach(function(element) {
		sum += element;
		console.log(sum)
	})
	return sum
}


// max
function max(list) {
	var max = 0
	for (var i = 0; i < list.length; i++) {
	if (max<list[i]) {
		max = list[i]
	}
	}
	return max
}



// max with .forEach

function max2(list) {
	var max = 0
	list.forEach(function(element) {
	if (max<element) {
		max = element
	}})
	return max
}
