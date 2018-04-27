angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.price = 23.945; // On utilise la syntaxe Controller as donc on utilise this
}