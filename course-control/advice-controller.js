angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $location) {
    
    $scope.compList = [];
    for(var key in competitionMap) {      
      $scope.compList.push(competitionMap[key]);
    }

    $scope.courseList = [];
    for(var key in coursedb.cn) {
      if (coursedb.cn[key].enabled) {
        $scope.courseList.push(coursedb.cn[key]);
      }
    }

    $scope.coursedb = coursedb.cn;

    $scope.courseScheduleIrvine = scheduleIrvine;
    $scope.courseScheduleRancho = scheduleRancho;
    $scope.courseScheduleArcadia = scheduleArcadia;

    $scope.courseScheduleMap = {
      "a" : scheduleArcadia,
      "i" : scheduleIrvine,
      "r" : scheduleRancho
    };

    $scope.getSchedule = function(stuId) {
      return $scope.courseScheduleMap[stuId.substring(3,4)];
    }

    $scope.getLength = function(obj) {
        return Object.keys(obj).length;
    }

    $scope.coursedb = coursedb.cn;
    $scope.stuFbDb = stuFbDb;  
    $scope.ProjectTitleEnable = true;
    $scope.ProjectLinkEnable = true;     

    // process individual student's information for pathway page
    var url = $location.url();
    $scope.currentUrl = url;
    var stuid = '';
    if (url.indexOf("=") > -1) {
      stuid = url.split("=")[1];
      console.log("Student ID: " + stuid);

      var stuRecord = stuFbDb[stuid];
      console.log("Student: " + stuRecord);      
      if (stuRecord != null) {
        var stuCouRrd = stuRecord.course;
        console.log("Student: " + JSON.stringify(stuCouRrd));
        if (stuCouRrd != null && stuCouRrd.length > 0) {
          
          $scope.StudentRecord = stuCouRrd[0];          
          $scope.StudentCourse = $scope.coursedb[stuCouRrd[0].CourseId];

        }
      }

    }

    if ($scope.StudentRecord.ProjectTitle.length == 0){
            $scope.ProjectTitleEnable = false;
          }

    if ($scope.StudentRecord.ProjectLink.length == 0){
            $scope.ProjectLinkEnable = false;
          }
    $scope.stuid = stuid;
  });