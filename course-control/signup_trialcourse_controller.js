
angular.module('v3App', ['ngMaterial'])
.config(function($sceProvider) {
  $sceProvider.enabled(false);    
})
.controller('signup_trialcourse_controller', function($scope, $http, $location, $mdToast) {

  $scope.codingExperiences = [
    {'id': 1, 'label': '编码背景'},
    {'id': 2, 'label': '从未接触过编码'},
    {'id': 3, 'label': '对编码有一些了解'},
    {'id': 4, 'label': '基本掌握并使用过某一门语言'},
    {'id': 5, 'label': '小黑客'},
  ]
  
  $scope.englishCodingExperiences = [
    {'id': 1, 'label': 'Coding Experience'},
    {'id': 2, 'label': 'Never learned before'},
    {'id': 3, 'label': 'Very basic exposure'},
    {'id': 4, 'label': 'Knows at least one programming language very well'},
    {'id': 5, 'label': 'Hacker!'},
  ]

  $scope.form = {
    'codingExperience': 0,
    'englishCodingExperience': 0,
    'email2': '',
    "email": '',
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
  $scope.loading = false;
  $scope.submit = function() {
    console.log($scope.form);
    if($scope.form.password !== $scope.form.confirmPassword){
      alert('Passwords are not consistent');
      return
    }
    let username = $scope.form.name.replace(' ','') + Date.now();
    let firstName = $scope.form.name.split(' ')[0];
    let lastName = $scope.form.name.split(' ')[1]? $scope.form.name.split(' ')[1]: ' ';
    let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    // let baseUrl = 'http://localhost:3000/api/'
    let accountData = {
      email2: $scope.form.email2,
      email: $scope.form.email,
      phone2: $scope.form.phone2,
      username: username,
      firstName: firstName,
      lastName: lastName,
      password: '123',
      dateOfBirth: new Date(),
      grade: $scope.form.grade,
      preferedLanguage: 'English'
    }
    $scope.loading = true;

    $http({
      method: 'POST',
      url: baseUrl+ `Account`,
      data: accountData
    }).then(function successCallback(response) {
      console.log('user created', response);
      console.log('start login');
      let studentId = response.data.id;
      let codingExperience = $scope.codingExperiences[$scope.form.codingExperience].id;
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
          signupTime: new Date(),
          accountId: studentId,
        }
      }).then(function successCallback(response) {
        console.log(response);
        $scope.loading = false;
        alert('Successfully registered fall classes and please check the confirmation email.')
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
