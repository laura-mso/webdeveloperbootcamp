var movie = [
	{
		title: "The Graduate",
		hasWatched: "watched",
		hasWatchedbl: true,
		rating: "5 stars",
	},
	{
		title: "Ruthless people",
		hasWatched: "watched many times",
		hasWatchedbl: true,
		rating: "4.5 stars",
	},
	{
		title: "The end of the fucking world",
		hasWatched: "seen",
		hasWatchedbl: false,
		rating: "100 stars",
	}
	]


for (var i = 0; i < movie.length; i++) {
	console.log("You have " + movie[i]["hasWatched"] + " \"" + movie[i].title + "\" - " + movie[i].rating)
}


function buildString(movie) {
	var result = "You have ";
	if(movie.hasWatched) {
		result += "watched ";
	} else {
		result += "not seen";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " .";
	return result;
}



movie.forEach(function(onemovie) {
	console.log(buildString(onemovie));
	})






// --------------------------
Methods

var object1 = {
	name: "Laura",
	age: "29",
	isCool: true,
	add: function(x,y) {
		return x + y
	}
}
