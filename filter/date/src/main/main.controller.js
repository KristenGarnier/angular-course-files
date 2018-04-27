angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.date = new Date(); // On utilise la syntaxe Controller as donc on utilise this
}