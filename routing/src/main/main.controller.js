angular
	.module('main')
	.controller('MainController', MainController)
	.controller('AboutController', AboutController)
	.service('BrigadeAntiCancer', BrigadeAntiCancer)

function BrigadeAntiCancer() {
	this.arrestation = function(personnage){
		if(personnage === 'Corentin') {
			return true;
		}

		return false;
	}
}

function MainController(BrigadeAntiCancer) {
	console.log(BrigadeAntiCancer)
	this.name = 'Controller';
	this.cancer = false;

	this.controlPersonnage = function() {
		this.cancer = BrigadeAntiCancer.arrestation(this.data.personnage)
	}
}

function AboutController() {
	this.name = 'About';
}