var app = angular.module('myApp', []);

app.controller('myRegisterCtrl', function($scope, $location,$window, $http) {

  var url = $location.$$absUrl;
  $scope.english = false;
  if (url.search('eng')){
    
    $scope.english = true;
  }

  url = new URL(url);
  var courseId = url.searchParams.get("courseId");
  var price = url.searchParams.get("price");
	$scope.submit = function () {



    var postData = {}

    postData.firstName = $scope.form.firstName;
    postData.lastName = $scope.form.lastName;
    postData.username = ($scope.form.firstName + $scope.form.lastName).toLowerCase();

    postData.password = $scope.form.password;
    if($scope.form.password !== $scope.form.password2){
      alert('密码不一致');
      return
    }
    postData.grade = $scope.form.grade;
    postData.email2 = $scope.form.email2;
    postData.phone2 = $scope.form.phone2;
    postData.dateOfBirth = new Date();
    postData.preferedLanguage = $scope.english?'English':'Chinese';
    registering(postData)
  }

  function registering(postData) {

  	$scope.postData = postData;
	$scope.postData.username = postData.firstName + postData.lastName + Date.now();
	// $scope.postData.contact2Type = "WeChatUsername";
  $scope.postData.notSend = true;
  // let baseUrl = 'http://localhost:3000/api/'
  let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
	$http({
        method: 'POST',
        url: baseUrl+ `Account`,
        data: $scope.postData
      }).then(function successCallback(response) {
        let studentId = response.data.id;
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
            courseId: courseId,
            paymentMethod: 'pending',
            status:'pending'
          }
        }).then(function createSuccess(response){
          console.log(response);
          if ($scope.english) {
            window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+response.data.id + '&courseId=' + courseId + '&studentId=' + studentId + '&comment=&amount='+ price + '&english=true';
          } else {
            window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+response.data.id + '&courseId=' + courseId + '&studentId=' + studentId + '&comment=&amount='+ price;

          }
        }, function createError(error){
          console.log(error);
        })
        console.log(response);
	    }, function addError(response) {
          console.log(response);
          $window.alert("添加学生失败, 请联系编程思维班主任");
      })

      }, function registerError(response) {
          console.log("Can not registering");
          console.log(response);
          $window.alert("注册失败");
      })
  }
})
