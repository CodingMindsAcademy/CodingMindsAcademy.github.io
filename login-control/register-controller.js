var app = angular.module('myApp', []);

app.controller('myRegisterCtrl', function($scope, $window, $http) {

	$scope.submit = function () {

    console.log($scope.form.firstName);
    console.log($scope.form.lastName);
    console.log($scope.form.password);

    var postData = {}

    postData.firstName = $scope.form.firstName;
    postData.lastName = $scope.form.lastName;
    postData.password = $scope.form.password;
    postData.grade = $scope.form.grade;
    postData.email2 = $scope.form.email2;
    postData.phone2 = $scope.form.phone2;

    registering(postData)
  }

  function registering(postData) {

  	$scope.postData = postData;
  	$scope.postData.dateOfBirth = '2018-04-11T15:50:01.459Z';
	$scope.postData.username = postData.firstName + postData.lastName;
	console.log($scope.postData.username)	
	$scope.postData.contact2Type = "WeChatUsername";
	$scope.postData.notSend = true;
	$http({
        method: 'POST',
        url: `https://dev-sharemyworks-backend.herokuapp.com/api/Account`,
        data: $scope.postData
      }).then(function successCallback(response) {
      	console.log('user created', response);
      	console.log('start login');
      	var loginData = {
      		"username":postData.username,
      		"password":postData.password
    	};
    	$http({
	      method : "POST",
	      url : "https://dev-sharemyworks-backend.herokuapp.com/api/Account/login",
	      data: loginData
	    }).then(function loginSuccess(response) {
	    	sessionStorage.setItem('userId',  response.data.userId);
	    	sessionStorage.setItem('authCode', response.data.id);
	    	sessionStorage.setItem('firstName', postData.firstName);
	    	sessionStorage.setItem('lastName', postData.lastName);
	    	$window.location.href = 'account.html';
	    }, function loginError(response) {
          console.log("get student by ID fail");
          console.log(response);
          $window.alert("登陆失败");
        })

      }, function registerError(response) {
          console.log("Can not registering");
          console.log(response);
          $window.alert("注册失败");
      })
  }
})
