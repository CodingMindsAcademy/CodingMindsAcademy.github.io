
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
    'name': '',
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
