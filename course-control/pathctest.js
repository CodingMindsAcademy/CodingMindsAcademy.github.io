angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http) {
  

  $scope.courseList = [];
  $scope.courseLevelMap = {
    'L1' : [],
    'L2' : [],
    'L3' : [],
    'L4' : [],
    'L5' : [],
  };
 var coursedb = {};
  $http({
    method: 'GET',
    url: 'https://prod-sharemyworks-backend.herokuapp.com/api/CoursesDBs',
    headers: {
      'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
    },     
  }).then(function successCallback(response) {
      console.log(response.data);
      response.data.sort(function(a,b){
        return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
      })
      var courses = response.data;
      console.log(courses);
      courses.forEach(course=>{
        if(course.enabled){
            $scope.courseList.push(course);
            var levelId = course.gradeLevel.substring(0, 2);
            $scope.courseLevelMap[levelId].push(course);
            coursedb[course.courseCode] = course;
        }
      });
    $scope.courseLevel1 = $scope.courseLevelMap['L1'];
    $scope.courseLevel2 = $scope.courseLevelMap['L2'];

    $scope.getLength = function(obj) {
        return Object.keys(obj).length;
    }
    $scope.coursedb = coursedb;
  // Summer 19 List
    $scope.courseListSummer2019 = [
      coursedb.cs210, coursedb.cs201, coursedb.cs301, coursedb.cs310,
      coursedb.cs211, coursedb.cs102, coursedb.cs313, coursedb.cs312,
      coursedb.cs221, coursedb.cs329, coursedb.cs331, coursedb.cs320,
      coursedb.cs480, coursedb.cs401, coursedb.cs404, coursedb.cs407,
      coursedb.cs380
    ];


    $scope.courseListIrvine = [coursedb.cs101, coursedb.cs110, coursedb.cs160, coursedb.cs170, coursedb.cs220, coursedb.cs230, coursedb.cs240, coursedb.cs300, coursedb.cs310, coursedb.cs350, coursedb.cs400, coursedb.cs410, coursedb.cs420, coursedb.cs425, coursedb.cs430, coursedb.cs470, coursedb.cs490, coursedb.cs501, coursedb.cs505, coursedb.cs510, coursedb.cs570,]
    console.log($scope.courseListIrvine);
    
    
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
  $scope.courseListArcadia = [coursedb.cs101, coursedb.cs120, coursedb.cs211, coursedb.cs221, coursedb.cs320, coursedb.cs301, coursedb.cs302, coursedb.cs310, coursedb.cs311];
  $scope.courseListRancho = [coursedb.cs210, coursedb.cs221, coursedb.cs371];
  $scope.courseListOnline = [coursedb.cs401, coursedb.cs402, coursedb.cs403, coursedb.cs404, coursedb.cs407];
  $scope.courseListEnrichment = [coursedb.cs404, coursedb.cs405, coursedb.cs406, coursedb.cs407, coursedb.cs408];
console.log($scope);
    }, function errorCallback(response) {
      console.log(response);
    });


  
});
