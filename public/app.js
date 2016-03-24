angular.module('Exercise1', ['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		$routeProvider
			.when('/javascript', {
				templateUrl: 'javascript.html'
			})
			.when('/jquery', {
				templateUrl: 'jquery.html'
			})
			.when('/html', {
				templateUrl: 'html.html'
			})
			.when('/css', {
				templateUrl: 'css.html'
			})
			.when('/mongo', {
				templateUrl: 'mongo.html'
			})
			.otherwise ({
				redirectTo: '/'
			});

			$locationProvider.html5Mode(true);
	}]);