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
      url : "https://backend4.sharemyworks.com/api/Account/login",
      data: data
    }).then(function mySuccess(response) {
      console.log(response);
      console.log(response.data.userId);
      var userId = response.data.userId;
      var urlWithId = "https://backend4.sharemyworks.com/api/Account/" + response.data.userId;
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
          $scope.organizationId = response.data.organizationId;
          sessionStorage.setItem('userId', userId);
          sessionStorage.setItem('authCode', authCode);
          sessionStorage.setItem('firstName', $scope.firstName);
          sessionStorage.setItem('lastName', $scope.lastName);
          sessionStorage.setItem('organizationId', $scope.organizationId);
          console.log(sessionStorage)
          $window.location.href = 'account.html';          
        }, 
        function myError(response) {
          console.log("get student by ID fail");
          window.alert("Can not find username");
          console.log(response);
        })
      }, function myError(response) {
      console.log("Login fail");
      window.alert("No user, please try again");
      console.log(response);
    });
    
  }
});