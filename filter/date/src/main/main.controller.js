angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.greetings = 'Hello World' // On utilise la syntaxe Controller as donc on utilise this
}