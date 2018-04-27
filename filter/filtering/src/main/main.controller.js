angular
	.module('main')
	.controller('MainController', MainController)

function MainController() {
	this.movies = [
		{
			title: 'Jurrasic park',
			year: 1993
		},
		{
			title: 'l\'Odyssée de l\'espace',
			year: 1968
		},
		{
			title: 'Le géant de fer',
			year: 1995
		},
		{
			title: 'Avatar',
			year: 2009
		},
		{
			title: 'Sharknado',
			year: 2013
		}
	] // On utilise la syntaxe Controller as donc on utilise this
}