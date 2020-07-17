var app = angular.module('myApp', []);

app.controller('myRegisterCtrl', function($scope, $location,$window, $http) {

  var url = $location.$$absUrl;
  var url = new URL(url);
  var courseId = url.searchParams.get("courseId");
  var price = url.searchParams.get("price");
  console.log(courseId);
  console.log('nmsl');
	$scope.submit = function () {


    console.log($scope.form.firstName);
    console.log($scope.form.lastName);
    console.log($scope.form.password);

    var postData = {}

    postData.firstName = $scope.form.firstName;
    postData.lastName = $scope.form.lastName;
    postData.username = ($scope.form.firstName + $scope.form.lastName).toLowerCase();
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
	// $scope.postData.contact2Type = "WeChatUsername";
  $scope.postData.notSend = true;
  let baseUrl = 'http://localhost:3000/api/'
	$http({
        method: 'POST',
        url: baseUrl+ `Account`,
        data: $scope.postData
      }).then(function successCallback(response) {
      	console.log('user created', response);
        console.log('start login');
        let studentId = response.data.id;
      // 	var loginData = {
      // 		"username":postData.username,
      // 		"password":postData.password
      // };
    	$http({
	      method : "PUT",
	      url : baseUrl+ "Course/" + courseId + '/students/rel/' + studentId,
	    }).then(function addSuccess(response) {

        $http({
          method:'POST',
          url:baseUrl + 'Invoices',
          data:{
            date: new Date(),
            amount: price,
            accountId: studentId,
            courseId: courseId
          }
        }).then(function createSuccess(response){
          console.log(response);

        }, function createError(error){
          console.log(error);
        })
        console.log(response);
	    }, function addError(response) {
          console.log(response);
          $window.alert("添加学生失败");
      })

      }, function registerError(response) {
          console.log("Can not registering");
          console.log(response);
          $window.alert("注册失败");
      })
  }
})
