var app = angular.module('myApp', []);

app.controller('loginControl', function($scope, $http, $window) {

  $scope.register = function () {
    console.log("redirect to register");
    location.href = 'register.html';
  }
  
  $scope.submit = function () {
    console.log($scope.form.username);
    username = $scope.form.username
    console.log($scope.form.password);
    password = $scope.form.password

    logining(username, password)
  }

  function logining(username, password) {

    var data = {
      "username":username,
      "password":password
    };
    $http({
      method : "POST",
      url : "https://dev-sharemyworks-backend.herokuapp.com/api/Account/login",
      data: data
    }).then(function mySuccess(response) {
      console.log(response);
      console.log(response.data.userId);
      var userId = response.data.userId;
      var urlWithId = "https://dev-sharemyworks-backend.herokuapp.com/api/Account/" + response.data.userId;
      var authCode = response.data.id;
      $http({
      method : "GET",
        url : urlWithId,
        headers: {
              'Authorization':authCode
            },     
        params: {"id":userId}
       }).then(function mySuccess(response) {
          console.log(response);
          console.log(response.data.firstName);
          console.log(response.data.lastName);
          $scope.firstName = response.data.firstName;
          $scope.lastName = response.data.lastName;
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('authCode', authCode);
          sessionStorage.setItem('firstName', $scope.firstName);
          sessionStorage.setItem('lastName', $scope.lastName);
          $window.location.href = 'account.html';
          //$location.path("account.html");

        }, 
        function myError(response) {
          console.log("get student by ID fail");
          console.log(response);
        })
      }, function myError(response) {
      console.log("Login fail");
      console.log(response);    
    });
    
  }
});