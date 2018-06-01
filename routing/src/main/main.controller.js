angular
	.module('main')
	.controller('MainController', MainController)
	.controller('AboutController', AboutController)
	.service('BrigadeAntiCancer', BrigadeAntiCancer)
	.service('ListService', ListService)

ListService.$inject = ['$rootScope']

function ListService($rootScope) {
	this.getList = function() {
		return $rootScope.list;
	}
}

function BrigadeAntiCancer() {
	this.arrestation = function(personnage){
		if(personnage === 'Corentin') {
			return true;
		}

		return false;
	}
}

MainController.$inject = ['BrigadeAntiCancer', 'ListService']

function MainController(BrigadeAntiCancer, ListService) {
	console.log(BrigadeAntiCancer)
	this.name = 'Controller';
	this.cancer = false;
	this.list = ListService.getList();

	this.controlPersonnage = function() {
		this.cancer = BrigadeAntiCancer.arrestation(this.data.personnage)
	}
}

function AboutController() {
	this.name = 'About';
}