(function(){
	var app = angular.module('mainModule', ['ngRoute']);



	app.config(function($routeProvider, $locationProvider) {
		$routeProvider
		.when("/", {
			templateUrl: 'home.html',
			controller: "HomePageCtrl"
		})
		.when("/home", {
			templateUrl: 'home.html',
			controller: "HomePageCtrl"
		})
		.when("/photography", {
			templateUrl: "photography.html",
			controller: "PhotographyPageCtrl"
		})
		.when("/projects", {
			templateUrl: "projects.html",
			controller: "ProjectsPageCtrl"
		})
		.when("/about", {
			templateUrl: "about.html",
			controller: "AboutPageCtrl"
		})
		.otherwise({
			template: '<div><strong>THERE IS NO PAGE HERE!</strong></div>'
		});
		$locationProvider.html5Mode(true);
	});

	app.run(function($rootScope){
		$rootScope.tab = 1;
		$rootScope.isSelected = function(num){
			return $rootScope.tab === num;
		}
		$rootScope.changeTabValue = function(num){
			$rootScope.tab = num;
		};
	});

	app.controller('HomePageCtrl', function($scope, $rootScope){
		$scope.message = "I am in the HOME page";

	});

	app.controller('PhotographyPageCtrl', function($scope){
		$scope.message = "I am in the PHOTOGRAPHY page";
	});

	app.controller('ProjectsPageCtrl', function($scope){
		$scope.message = "I am in the PROJECTS page";

	});

	app.controller('AboutPageCtrl', function($scope){
		$scope.message = "I am in the ABOUT page";

	});



	app.controller('BodyController', function($scope, $rootScope){
		$scope.photography = [
		{
			type: "Senior Portraits",
			description: "Will replace with images",
			images: [
				"individual/DSC_002.jpg", 
				"individual/DSC_0049.jpg", 
				"individual/DSC_0113.jpg", 
				"individual/DSC_0164.jpg", 
				"individual/DSC_0299.jpg", 
				"individual/DSC_0383.jpg",
				"individual/DSC_0986.jpg", 
				"individual/DSC_0991.jpg",
				"individual/File_000.jpeg"
			]
		},
		{
			type: "Baby Portraits",
			description: "Will replace soon"
		},
		{
			type: "Events",
			description: "Will replace soon"
		},
		{
			type: "Group Photos",
			description: "Will relace soon",
			images: [
				"group/DSC_0980.jpg",
				"group/DSC_0436.jpg",
				"group/DSC_0009.jpg", 
				"group/DSC_0011.jpg"			
			]
		}
		];
		
	});
})();