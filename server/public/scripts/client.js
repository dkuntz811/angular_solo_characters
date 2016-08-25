var myApp = angular.module('myApp', ['ngRoute']);  //This is for dependency injection

myApp.config(['$routeProvider', function ($routeProvider){
	$routeProvider.
		when("/hopper", {
			templateUrl: "/views/partials/hopper.html",
			contoller: "hopperController"
		}).
		when("/demo", {
			templateUrl: "/views/partials/demo.html",
			controller: "demoController"
		}).
		when("/eleven", {
			templateUrl: "/views/partials/eleven.html",
			controller: "elevenController"
		}).
		otherwise({
			redirectTo: "/hopper"
		});
}]);

myApp.controller('hopperController', ['$scope', function ($scope){
         console.log("Cats ARe Cool");
	      $scope.message = "Controller is still Working";
}]);

myApp.controller('demoController', ['$scope', function ($scope){
         console.log("Dogs ARe Cool");
	      $scope.message = "Controller is still Working";
}]);

myApp.controller('elevenController', ['$scope', function ($scope){
        console.log("Dogs ARe Cool");
	      $scope.message = "Controller is still Working";
}]);
console.log('routes');
