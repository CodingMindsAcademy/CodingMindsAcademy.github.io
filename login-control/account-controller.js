var app = angular.module('myApp', ['ngMaterial']).config(function($sceProvider) {
    $sceProvider.enabled(false);    
  });

app.controller('myAccountCtrl', function($scope, $http, $log, $document) {
	
	if (!sessionStorage.getItem('userId')) {
	  alert("please login");
	  location.href = 'login.html';
	} else {
	  $scope.firstName = sessionStorage.getItem("firstName");
	  $scope.lastName = sessionStorage.getItem("lastName");
	  $scope.site = sessionStorage.getItem("organizationId");
	  console.log(sessionStorage)
	  console.log($scope.site)
	}

	var coursedb = {};
 	$scope.courseListIrvine = [];
 	$scope.courseListArcadia = [];
 	$scope.load = 1;
  $scope.suggestedCourses = []
  $scope.suggestedCoursesList = []
  var stuid = sessionStorage.getItem("userId");
 	var orgs = {'5d801257d2c9f600154965d8':'a',
              '5b2423bbc0991500145353f4':'i'};
  
  function matchSuggestedCourses() {
    $http({
        method: 'GET',
        url: `https://backend4.sharemyworks.com/api/Account/${stuid}`,
        headers: {
          'Authorization': 'Bz6iE0aNTooVTYixTQkJpDJzg2R8RmpHJseC6Y8lDooOtOaIH94SSyZMOSQX7qnM'
        },
      }).then(function successCallback(response) {        
        var suggestedCourses = response.data.suggestedCourses;
        if (typeof suggestedCourses !== "undefined") {
          $scope.suggestedCourses = suggestedCourses;
        } else {
          $scope.suggestedCourses = []
        }
        
        $scope.courseCurrentList.forEach(course=>{
          if ($scope.suggestedCourses.includes(course["courseCode"])) {
            $scope.suggestedCoursesList.push(course)}
        });

        console.log("Show suggested list");
        console.log($scope.suggestedCoursesList);
        $scope.lenSuggestedCoursesList = $scope.suggestedCoursesList.length;
        $scope.showSuggestScheduleList = new Array($scope.lenSuggestedCoursesList);
        $scope.heightSuggestStyleList = new Array($scope.lenSuggestedCoursesList);
        for (var i = 0; i < $scope.lenSuggestedCoursesList; i ++) {
            $scope.heightSuggestStyleList[i] = $scope.heightStyle
            $scope.showSuggestScheduleList[i] = false;
        }
      }, function errorCallback(response) {
        console.log(response);
      });
    }

	$http({
  	    method: 'GET',
  	    url: 'https://backend4.sharemyworks.com/api/Course',
  	    headers: {
  	      'Authorization': 'Bz6iE0aNTooVTYixTQkJpDJzg2R8RmpHJseC6Y8lDooOtOaIH94SSyZMOSQX7qnM'
  	    },
  	  }).then(function successCallback(response) {
  	      var upcomingCourses = response.data.courses.filter(obj=>obj.term==='Summer 2020');
  	      var irvineDB = {};
  	      var arcadiaDB = {};
  	      upcomingCourses.forEach(course=>{
  	        var range;
  	        var dayTime;
  	        var strStart = course.dateStart.slice(5,10).replace('-','/');
  	        var strEnd = course.dateEnd.slice(5,10).replace('-','/');
  	        range = strStart + '-' +strEnd;
  	        dayTime = course.classDay + ' ' +course.classTime + '-' + course.classEndTime;
  	        var location = orgs[course.organizationId];
  	        var courseid = course.id;
  	        var repeatInfo = {'courseid':courseid, 'dayTime':dayTime, 'range':range, 'orgnization':location};
  	        
  	        if (location === 'a'){
  	          if (!(course.courseCode in arcadiaDB)){
  	            arcadiaDB[course.courseCode] = [];
  	            arcadiaDB[course.courseCode].push(repeatInfo);
  	          }
  	          else{
  	            arcadiaDB[course.courseCode].push(repeatInfo);
  	          }          
  	        }else{
  	          if (!(course.courseCode in irvineDB)){
  	            irvineDB[course.courseCode] = [];
  	            irvineDB[course.courseCode].push(repeatInfo);
  	          }
  	          else{
  	            irvineDB[course.courseCode].push(repeatInfo);
  	          }   
  	        }

  	      });  	

  	      var courses = [];

  	      $http({
  	        method: 'GET',
  	        url: 'https://backend4.sharemyworks.com/api/CoursesDBs',
  	        headers: {
  	          'Authorization': 'Bz6iE0aNTooVTYixTQkJpDJzg2R8RmpHJseC6Y8lDooOtOaIH94SSyZMOSQX7qnM'
  	        },
  	      }).then(function successCallback(response) {
  	          response.data.sort(function(a,b){
  	            return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
  	          })
  	          courses = response.data;              
  	          var templist1 = [];
  	          var counter1 = 0;
  	          var templist2 = [];
  	          var counter2 = 0;
  	          courses.forEach(course=>{
  	               var tempcourse1 = Object.assign({},course);
  	               var tempcourse2 = Object.assign({},course);

	  	            if(course.courseCode in irvineDB){
	  	                tempcourse1['repeatData'] = irvineDB[tempcourse1.courseCode]
	  	                $scope.courseListIrvine.push(tempcourse1);
	  	            }
	  	            if(course.courseCode in arcadiaDB){
	  	              	tempcourse2['repeatData'] = arcadiaDB[tempcourse2.courseCode];
                      console.log(tempcourse2['repeatData']);
	  	              	$scope.courseListArcadia.push(tempcourse2);
	  	          	}
  	          })  	          
  	          
  	          if ($scope.site == "5d801257d2c9f600154965d8") {
  	          	$scope.courseCurrentList = $scope.courseListArcadia;
  	          	$scope.stuLocation = "Arcadia"
  	          } else if ($scope.site == "5b2423bbc0991500145353f4") {
  	          	$scope.courseCurrentList = $scope.courseListIrvine;
  	          	$scope.stuLocation = "Irvine"
  	          } else {
  	          	$scope.courseCurrentList = $scope.courseListIrvine;
  	          	$scope.stuLocation = "Irvine"
  	          }
  	          
  	          $scope.lenCourseCurrentList = $scope.courseCurrentList.length;
  	          $scope.showScheduleList = new Array($scope.lenCourseCurrentList);
              $scope.heightStyleList = new Array($scope.lenCourseCurrentList);
              $scope.heightStyle = {
                "height": "200px",
                "position": "relative"
              }
              for (var i = 0; i < $scope.courseCurrentList.length; i ++) {
                $scope.heightStyleList[i] = $scope.heightStyle
                $scope.showScheduleList[i] = false;
              }

  	          $scope.getLength = function(obj) {
  	            return Object.keys(obj).length;
  	        }

  	        console.log("The course db is");
          	$scope.coursedb = coursedb;
          	console.log($scope.coursedb);
  	        $scope.coursedb = coursedb;
            console.log($scope.courseCurrentList);
            matchSuggestedCourses()
  	    }, function errorCallback(response) {
  	          console.log(response);
  	        });
  	    }, function errorCallback(response) {
  	      console.log(response);
  	    });  	



	$scope.hideModal = true;
	$scope.modalSource = "index.html"
	$scope.courseListStyle = {
        "background-color" : "white",
        "opacity": 1,        
  }
  
	$scope.showModal = function (event) {
		console.log("Show modal");
		$scope.hideModal = false;		
		$scope.modalSource = event.target.id;
		$scope.courseListStyle["background-color"] = "DarkGray";
		$scope.courseListStyle["opacity"] =  0.1;
		$scope.courseListStyle["border"] = "5px solid rgba(255, 255, 255, .5)";
	}	

	$scope.closeModal = function (event) {
		console.log("Close modal");
		$scope.hideModal = true;
		$scope.courseListStyle["background-color"] = "white";
		$scope.courseListStyle["opacity"] =  1;
		$scope.courseListStyle["border"] = "";
	}

	$scope.showSchedule = function (index, action) {
    if (action == "showall") {      
      $scope.showScheduleList[index] = !$scope.showScheduleList[index];    
      var height = $scope.courseCurrentList[index]['repeatData'].length * 125 + 350;
      var heightPx = height.toString() + "px";
      if ($scope.showScheduleList[index]) {
          $scope.heightStyleList[index] = {
            "height": heightPx,
            "position": "relative"
        }        
      } else {
          $scope.heightStyleList[index] = {
            "height": "200px",
            "position": "relative"
        }
      }
    } else if (action == "showsuggested") {
      $scope.showSuggestScheduleList[index] = !$scope.showSuggestScheduleList[index];          
      var height = $scope.suggestedCoursesList[index]['repeatData'].length * 125 + 350;
      var heightPx = height.toString() + "px";
      if ($scope.showSuggestScheduleList[index]) {
          $scope.heightSuggestStyleList[index] = {
            "height": heightPx,
            "position": "relative"
        }        
      } else {
          $scope.heightSuggestStyleList[index] = {
            "height": "200px",
            "position": "relative"
        }
      }
    }
	}

  $scope.putCourse = function (courseId) {
    var stuid = sessionStorage.getItem("userId");
    $http({
      method: 'PUT',
      url: `https://backend4.sharemyworks.com/api/Course/${courseId}/students/rel/${stuid}`,
    }).then(function successCallback(response) {
      if(response.data.msg && response.data.msg === 'duplicated') {
        window.alert('Already register in this class');
      } else {
        console.log('enrolled to course', response);
        window.alert('enrolled class success');
      }
    }, function errorCallback(response) {
      window.alert('enroll unsucessfully, contact manager');
      console.log(response);      
    });
  }
})