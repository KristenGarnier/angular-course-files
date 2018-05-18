angular
	.module('main')
	.controller('MainController', MainController)
	.controller('AboutController', AboutController)

function MainController() {
	this.name = 'Controller';
}

function AboutController() {
	this.name = 'About';
}