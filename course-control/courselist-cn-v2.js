angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope) {
  

  $scope.courseList = [];
  $scope.courseLevelMap = {
    'L1' : [],
    'L2' : [],
    'L3' : [],
    'L4' : [],
    'L5' : [],
  };

  for(var key in coursedb.cn) {
  	if (coursedb.cn[key].enabled) {
	  	$scope.courseList.push(coursedb.cn[key]);
      var levelId = coursedb.cn[key].gradeLevel.substring(0, 2);
      $scope.courseLevelMap[levelId].push(coursedb.cn[key]);
	  }
	}

  console.log($scope.courseLevelMap);
  console.log($scope.courseLevelMap['L2']);
  $scope.courseLevel1 = $scope.courseLevelMap['L1'];
  $scope.courseLevel2 = $scope.courseLevelMap['L2'];

	$scope.getLength = function(obj) {
	    return Object.keys(obj).length;
	}

	$scope.coursedb = coursedb.cn;

  // Summer 19 List
  $scope.courseListSummer2019 = [
    coursedb.cn.cs210, coursedb.cn.cs201, coursedb.cn.cs301, coursedb.cn.cs310,
    coursedb.cn.cs211, coursedb.cn.cs102, coursedb.cn.cs313, coursedb.cn.cs312,
    coursedb.cn.cs221, coursedb.cn.cs329, coursedb.cn.cs331, coursedb.cn.cs320,
    coursedb.cn.cs480, coursedb.cn.cs401, coursedb.cn.cs404, coursedb.cn.cs407,
    coursedb.cn.cs380
  ];

  $scope.courseListIrvine = [coursedb.cn.cs102, coursedb.cn.cs112, coursedb.cn.cs120, coursedb.cn.cs201, coursedb.cn.cs210, coursedb.cn.cs211, coursedb.cn.cs221, coursedb.cn.cs320, coursedb.cn.cs301, coursedb.cn.cs302, coursedb.cn.cs310, coursedb.cn.cs311, coursedb.cn.cs312, coursedb.cn.cs321, coursedb.cn.cs331, coursedb.cn.cs371, coursedb.cn.cs380, coursedb.cn.cs390, coursedb.cn.cs408];
  
  $scope.courseScheduleIrvine = scheduleIrvine;
  $scope.courseScheduleRancho = scheduleRancho;
  $scope.courseScheduleArcadia = scheduleArcadia;

  $scope.courseScheduleMap = {
    "a" : scheduleArcadia,
    "i" : scheduleIrvine,
    "r" : scheduleRancho
  };

  $scope.courseScheduleOnline = [];
  $scope.courseScheduleEnrichment = [];

  $scope.courseListArcadia = [coursedb.cn.cs101, coursedb.cn.cs120, coursedb.cn.cs211, coursedb.cn.cs221, coursedb.cn.cs320, coursedb.cn.cs301, coursedb.cn.cs302, coursedb.cn.cs310, coursedb.cn.cs311];
  $scope.courseListRancho = [coursedb.cn.cs210, coursedb.cn.cs221, coursedb.cn.cs371];
  $scope.courseListOnline = [coursedb.cn.cs401, coursedb.cn.cs402, coursedb.cn.cs403, coursedb.cn.cs404, coursedb.cn.cs407];
  $scope.courseListEnrichment = [coursedb.cn.cs404, coursedb.cn.cs405, coursedb.cn.cs406, coursedb.cn.cs407, coursedb.cn.cs408];
});
