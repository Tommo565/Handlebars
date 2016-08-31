// Index.js

var cast = {
	"characters": [
		{
			"name": "Jon Snow",
			"actor": "Kit Harrington",
			"house": "Stark",
			"location": "Castle Black"
		}, {
			"name": "Tyrion Lannister",
			"actor": "Peter Dinklage",
			"house": "Lannister",
			"location": ""
		}, {
			"name": "Margery Tyrell",
			"actor": "Natalie Dormer",
			"house": "Tyrell",
			"location": null
		}
	]
}

$(document).ready(function(){

	var charTemp = $("#character-template").html();                 // Stores the character-template html
	var compliledCharTemp = Handlebars.compile(charTemp);           // Creates a function that can populate the selected html object dynamically
	$(".char-list").html(compliledCharTemp(cast))                   // Populates the html object with a context (e.g. single item from the data)


});