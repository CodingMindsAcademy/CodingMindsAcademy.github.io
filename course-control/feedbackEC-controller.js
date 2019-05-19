angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $location) {
    
    $scope.courseList = [];
    for(var key in coursedb.cn) {
      if (coursedb.cn[key].enabled) {
        $scope.courseList.push(coursedb.cn[key]);
      }
    }

    $scope.getLength = function(obj) {
        return Object.keys(obj).length;
    }

    $scope.coursedb = coursedb.cn;
    $scope.stuFbDb = stuFbDb;    

    // process individual student's information for pathway page
    var url = $location.url();
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

    $scope.stuid = stuid;
  });