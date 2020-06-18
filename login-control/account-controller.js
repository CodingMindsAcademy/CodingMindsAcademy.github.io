var app = angular.module('myApp', []);

app.controller('myAccountCtrl', function($scope) {

	if (!sessionStorage.getItem('userId')) {
	  alert("please login");
	  location.href = 'index.html#/';
	} else {
	  console.log(sessionStorage);
	  $scope.firstName = sessionStorage.getItem("firstName");
	  $scope.lastName = sessionStorage.getItem("lastName");
	}

})

app.controller('loadCourseCtrl', function($scope) { 




})