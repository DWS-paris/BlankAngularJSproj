
var myApp = angular.module('myApp', ['ngRoute']);

// Configuration des routes
myApp.config(function($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'public/accueil.html', 
			controller: 'AccueilCtrl'
		})

		.when('/portfolio', {
			templateUrl: 'public/portfolio.html', 
			controller: 'PortfolioCtrl'
		})

		.when('/contact', {
			templateUrl: 'public/contact.html', 
			controller: 'ContactCtrl'
		})

		.otherwise({
			redirectTo: '/'
		})
});