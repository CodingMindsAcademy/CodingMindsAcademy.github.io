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
        var stuTrial = stuRecord.trial;
        console.log("Student: " + JSON.stringify(stuTrial));
        if (stuTrial != null && stuTrial.length > 0) {
          // we only care about the first trial class for now
          $scope.trailRecord = stuTrial[0];          
          $scope.trailCourse = $scope.coursedb[stuTrial[0].trialCourseId];
        }
      }		
  	}

  	$scope.stuid = stuid;
  });
