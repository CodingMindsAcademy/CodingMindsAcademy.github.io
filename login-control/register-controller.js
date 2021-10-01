var app = angular.module('myApp', []);

app.controller('myRegisterCtrl', function($scope, $location,$window, $http) {
    var url = $location.$$absUrl;
    $scope.english = false;
    if (url.search('eng')){

      $scope.english = true;
    }
    let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';

    url = new URL(url);
    var courseId = url.searchParams.get("courseId");
    var accountId = url.searchParams.get("accountId");
    var token = url.searchParams.get("token");
    var price = url.searchParams.get("price");
    $scope.loading = false;
    $scope.form = {};
  	$scope.submit = function () {

    $scope.loading = true;
    let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    var postData = {}
    let account  = [];
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
    if (accountId) {
      $http({
          method: 'GET',
          url: baseUrl+ `Account/` + accountId,
        }).then(async function successCallback(response) {
            postData.organizationId = await response.data.organizationId;
            console.log('post: ', postData);
            await patch(postData);
        }).catch(err=>{
          console.log(err);
        })
        //postData.organizationId = account.organizationId;
        //console.log('idd: ', account);
      //patch(postData);
    } else {
      registering(postData);
    }
  }

  function patch(data) {
    const {username, ...patchData} = data;
    // let baseUrl = 'http://localhost:3000/api/'
    let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    console.log('Patching: ', patchData);
    console.log(token);
    $http({
        method: 'PATCH',
        url: baseUrl+ `Account/` + accountId,
        data: patchData,
        params: {
          access_token: token
        }
      }).then(function successCallback(response) {

        let studentId = response.data.id;
        $http({
          method: 'get',
          url: baseUrl + 'Account/' + accountId + '/invoices',
          params: {
            access_token: token,
            filter: {
              order: 'date DESC',
              limit: 1
            }
          }
        }).then(resp=>{
          console.log(resp);
          let invoiceId = resp.data[0].id;
          let courseId = resp.data[0].courseId;
          let price = resp.data[0].amount;
          console.log(invoiceId);
          if ($scope.english) {
            window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+invoiceId + '&courseId=' + courseId + '&studentId=' + accountId + '&comment=&amount='+ price + '&english=true';
          } else {
            window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+invoiceId + '&courseId=' + courseId + '&studentId=' + accountId + '&comment=&amount='+ price;

          }
        })

      }).catch(err=>{
        console.log(err);
      })
  }

  function registering(postData){
  $scope.postData = postData;
	$scope.postData.username = postData.firstName + postData.lastName + Date.now();
  // $scope.postData.preferedLanguage = 'English';
	// $scope.postData.contact2Type = "WeChatUsername";
  $scope.postData.notSend = true;
  // let baseUrl = 'http://localhost:3000/api/'
  let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
  $http({
      method: 'GET',
      url: baseUrl+ 'Course/'+ courseId,
    }).then(function successCallback(response) {
        let course = response.data;
        $scope.postData.organizationId = course.organizationId;
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
            // console.log(response);
            $http({
              method:'GET',
              url: baseUrl+ `Invoices/`,

              params: {
                access_token: token,
                filter: {
                  where: {
                    courseId: courseId,
                    accountId: studentId
                  }
                }
              }
            }).then(function createSuccess(response){

              let invoiceId = response.data[0].id;
              if ($scope.english) {
                window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+ invoiceId + '&courseId=' + courseId + '&studentId=' + studentId + '&comment=&amount='+ price + '&english=true';
              } else {
                window.location.href = 'https://www.sharemyworks.com/checkout?invoiceId='+ invoiceId + '&courseId=' + courseId + '&studentId=' + studentId + '&comment=&amount='+ price;

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
    }, function errorCallback(response) {
      console.log(response);
    });
  }
})
