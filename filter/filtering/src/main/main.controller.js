angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.movies = [
		{
			title: 'Sharknado',
			year: 2013
		},
		{
			title: 'Dragon ball evolution',
			year: 2009
		},
		{
			title: 'Les tuches 3',
			year: 2018
		},
		{
			title: 'Les visiteurs',
			year: 1993
		},
		{
			title: 'Le seingeur des anneaux',
			year: 2001
		}
	] 

	this.handleClick = function() {
		this.search = this.filter;
	}
}