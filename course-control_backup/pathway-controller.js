angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('PathwayController', function($scope, $location) {
  	
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
	$scope.studb = studb;    

    $scope.pathwayCoding = pathwaydb.coding;
    $scope.pathwayGame = pathwaydb.game;
    $scope.pathwayMobile = pathwaydb.mobile;
    $scope.pathwayHardware = pathwaydb.hardware;
    $scope.pathwayRobot = pathwaydb.robot;

    // process individual student's information for pathway page
    var url = $location.url();
  	var stuid = '';
  	if (url.indexOf("=") > -1) {
  		stuid = url.split("=")[1];
  		console.log("Student ID: " + stuid);
  		var stuRecord = studb[stuid];
  		if (stuRecord != null) {
  			var pathwayCountMap = {};
  			for(var key in studb[stuid].history) {
  				for(var p in coursedb.cn[key].pathway) {
  					console.log(coursedb.cn[key].pathway[p]);
  					if (pathwayCountMap[coursedb.cn[key].pathway[p]] == null) {
  						pathwayCountMap[coursedb.cn[key].pathway[p]] = 1;	
  					} else {
  						pathwayCountMap[coursedb.cn[key].pathway[p]]++;	
  					}
  				}
  			}	
  			console.log("map: " + JSON.stringify(pathwayCountMap));
  			$scope.stuPathwayMap = pathwayCountMap;
  			$scope.stuPathwayTotalCount = $scope.getLength(pathwayCountMap);

  			var pathwayRecMap = {};
  			for(var i in studb[stuid].recommend) {			
  				var pathway = coursedb.cn[studb[stuid].recommend[i]].pathway[0];
  				if (pathwayRecMap[pathway] == null) {
  					pathwayRecMap[pathway] = 1;	
  				} else {
  					pathwayRecMap[pathway]++;
  				}
  			}
  			$scope.stuPathwayRecMap = pathwayRecMap;
  			console.log("map: " + JSON.stringify(pathwayRecMap));
  		}  		
  	}  	
  	$scope.stuid = stuid;
    $scope.hasStu = stuid == '' ? false : true;

  });
