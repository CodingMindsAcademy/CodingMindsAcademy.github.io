var app = angular.module('myApp', []);

app.controller('myAccountCtrl', function($scope,  $http, $sce, $log, $document) {

	
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

	$scope.hideModal = true;
	$scope.hideCourseList = false;
	$scope.modalSource = "index.html"
	console.log($scope.hideModal);	

	$scope.courseListStyle = {
        "background-color" : "white",
        "opacity": 1
    }    

	$scope.showModal = function (event) {
		console.log("Show modal");
		$scope.hideModal = false;
		console.log(event.target.id);
		$scope.modalSource = event.target.id;		
		$scope.courseListStyle["background-color"] = "DarkGray";
		$scope.courseListStyle["opacity"] =  0.1;
	}

	$scope.closeModal = function (event) {
		console.log("Close modal");
		$scope.hideModal = true;		
		$scope.courseListStyle["background-color"] = "white";
		$scope.courseListStyle["opacity"] =  1;
	}

	var coursedb = {};
 	$scope.courseListIrvine = [];
 	$scope.courseListArcadia = [];
 	$scope.load = 1;

 	var orgs = {'5d801257d2c9f600154965d8':'a',
              '5b2423bbc0991500145353f4':'i'};
	
	function getUrl(url) {
		console.log('Start getting:');
		console.log(url);
		$http({
		    method: 'GET',
		    url: url,
		}).then(function successCallback(data) {
	        $scope.data = data.data;
	        console.log(data.data);
	        $scope.trustedHtml = $sc.trustAsHtml($scope.data);
	        },
	     function errorCallback(response) {
	        console.log(response);
	        console.log('error');
	    });
	}
	
	$scope.items = ['item1', 'item2', 'item3'];
  	$scope.animationsEnabled = true;

  	

	$http({
  	    method: 'GET',
  	    url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Course',
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

  	      $http({
  	        method: 'GET',
  	        url: 'https://prod-sharemyworks-backend.herokuapp.com/api/CoursesDBs',
  	        headers: {
  	          'Authorization': 'Bz6iE0aNTooVTYixTQkJpDJzg2R8RmpHJseC6Y8lDooOtOaIH94SSyZMOSQX7qnM'
  	        },
  	      }).then(function successCallback(response) {
  	          response.data.sort(function(a,b){
  	            return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
  	          })
  	          var courses = response.data;
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
	  	              	$scope.courseListArcadia.push(tempcourse2);
	  	          	}
  	          })  	          
  	          console.log($scope.courseListIrvine);
  	          console.log($scope.courseListArcadia);

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

  	          console.log($scope.courseCurrentList);
  	          
  	          $scope.getLength = function(obj) {
  	            return Object.keys(obj).length;
  	        }
  	        console.log("The course db is");
          	$scope.coursedb = coursedb;
          	console.log($scope.coursedb);
  	        $scope.coursedb = coursedb;

  	        }, function errorCallback(response) {
  	          console.log(response);
  	        });
  	    }, function errorCallback(response) {
  	      console.log(response);
  	    });

  	  $(function () {
      $masonry = $('.masonry1').masonry({
        isAnimated: true,
        itemSelector: 'div.masonry__item',
        horizontalOrder: true,
        originLeft: true,
        originTop: true
      });

      window.onload = function () {
        $masonry.masonry('layout');
      }

      $('a.toggle_schedule').click(function () {
        $(this).closest('div.card').find('.course_schedule').toggle();
        $masonry.masonry('layout');
        return false;
      });
    });

})