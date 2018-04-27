angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.date = new Date();
}