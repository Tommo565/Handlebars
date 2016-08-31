// Index.js

$(document).ready(function(){

	var charTemp = $("#character-template").html();                 // Stores the character-template html
	var compliledCharTemp = Handlebars.compile(charTemp);           // Creates a function that can populate the selected html object dynamically
	$.ajax("./data/cast.json").done(function(cast) {				// Creates an AJAX call to get the JSON file and then a callback function once it's done
		$(".char-list").html(compliledCharTemp(cast)) 
	});                 											

});