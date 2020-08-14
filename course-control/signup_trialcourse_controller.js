
angular.module('v3App', ['ngMaterial'])
.config(function($sceProvider) {
  $sceProvider.enabled(false);    
})
.controller('signup_trialcourse_controller', function($scope, $http, $location, $mdToast) {

  $scope.codingExperiences = [
    {'id': 0, 'label': '编码背景'},
    {'id': 1, 'label': '从未接触过编码'},
    {'id': 2, 'label': '对编码有一些了解'},
    {'id': 3, 'label': '基本掌握并使用过某一门语言'},
    {'id': 4, 'label': '小黑客'},

  ]
  $scope.form = {
    'codingExperience': 0,
    'email2': '',
    'phone2': '',
    'wechat': '',
    'firstName': '',
    'lastName': '',
    'grade': '',
    'topics': {
      'scratch': false,
      'makecode': false,
      'ml': false,
      'ai': false,
      'usaco': false,
      'robloxlua': false,
      'python': false,
      'java': false,
      'cpp': false,
      'legoev3': false
    },
  }


  $scope.codingExperienceChanged = function (e) {
    console.log($scope.form.codingExperience);
    console.log($scope.form);
  }

  $scope.oncheckboxchange = function() {
    console.log($scope.form.topics);
  }

  $scope.submit = function() {
    console.log($scope.form);
    if($scope.form.password !== $scope.form.confirmPassword){
      alert('密码不一致');
      return
    }
    let username = $scope.form.firstName + $scope.form.lastName + Date.now();
    // let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    let baseUrl = 'http://localhost:3000/api/'
    let accountData = {
      email2: $scope.form.email2,
      phone2: $scope.form.phone2,
      username: username,
      firstName: $scope.form.firstName,
      lastName: $scope.form.lastName,
      password: $scope.form.password,
      dateOfBirth: new Date(),
      grade: $scope.form.grade
    }
    $http({
      method: 'POST',
      url: baseUrl+ `Account`,
      data: accountData
    }).then(function successCallback(response) {
      console.log('user created', response);
      console.log('start login');
      let studentId = response.data.id;
      let codingExperience = $scope.codingExperiences[$scope.form.codingExperience].label;
      let topics = [];
      for (let topic in $scope.form.topics) {
        if ($scope.form.topics[topic]) {
          topics.push(topic);
        }
      }
      $http({
        method: 'POST',
        url: baseUrl+ `TrialClasses`,
        data: {
          codingExperience: codingExperience,
          availability: $scope.form.availability,
          comment: $scope.form.comment,
          topics: topics,
          accountId: studentId,
        }
      }).then(function successCallback(response) {
        console.log(response);
        alert('注册试课成功，请查看邮箱和短信。')
      }).catch(function err(err) {
        console.log(err)
      })


    }).catch(function registerError(err){
      console.log(err);
    })

  }
  // if(suggestedCourses){
  //   suggestedCourses.sort();
  //   $scope.Level = coursedb['cn'][suggestedCourses[0]].gradeLevel;
  // }else{
  //   $scope.Level = 'L1图形化编程'
  // }

  // console.log(suggestedCourses);
  // console.log($scope.Level);


})
