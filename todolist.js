

window.setTimeout(function() {
var todos=[];
var input = prompt("What would you like to do?");

function todoList() {
todos.forEach(function(todo, i) {
			console.log("*********")
			console.log(i + " " + todo)} ) 
}

function todoNew() {
	var newTodo = prompt("What is your todo item?")
		todos.push(newTodo);
}

function todoDelete() {
	var index = prompt("Which item do you want to delete?")
		todos.splice(index,1);
		console.log("Deleted Todo " + index );
}

while(input !== "quit"){

	if (input=== "list") {
		todoList();
	} else if (input === "new") {
		todoNew();
	} else if(input === "delete") {
		todoDelete();
	}

	input = prompt("What would you like to do?")	
}
console.log("Todo list closed")

} , 500);






// window.setTimeout(function() {
// var todos=[];
// var input = prompt("What would you like to do?");

// while(input !== "quit"){

// 	if (input === "new") {
// 		var newTodo = prompt("What is your todo item?")
// 		todos.push(newTodo);

// 	} else if (input=== "list") {
// 		console.log(todos);
// 	}
// 	input = prompt("What would you like to do?")	
// }
// console.log("Todo list closed")

// } , 500);





// var colors = ["red","green","blue"]
// colors.forEach(function(color) {
// 	console.log(color);
// })


// var numbers = [1,2,3,4,5,6,7,8,9,10];
// for (var i = 0; i < numbers.length; i++) {
// 	if (numbers[i]%3 ===0) {
// 	console.log(numbers[i])
// 	}
// }
