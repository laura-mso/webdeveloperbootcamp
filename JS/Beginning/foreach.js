function myForEach(list, func) {
    for (var i=0; i<list.length; i++) {
    	func(list[i]);
    }
}



var colors = [1,2,3]

myForEach(colors, function(){alert("test")})


myForEach(colors, function(color){alert("test"+ color)})