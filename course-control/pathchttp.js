angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http) {
  

  // $scope.courseList = [];
  // $scope.courseLevelMap = {
  //   'L1' : [],
  //   'L2' : [],
  //   'L3' : [],
  //   'L4' : [],
  //   'L5' : [],
  // };
 var coursedb = {};
 $scope.courseListIrvine = [];
 $scope.courseListArcadia = [];
 $scope.load = 1;
  var orgs = {'5d801257d2c9f600154965d8':'a',
              '5b2423bbc0991500145353f4':'i'};
    $http({
      method: 'GET',
      url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Course',
      headers: {
        'Authorization': 'nxM0WXLmslQLowqnDPoPvdgMfeZsv8A37BOGj91tHIMOGOb6224DOwqAzpI555c7'
      },  
    }).then(function successCallback(response) {
        var upcomingCourses = response.data.courses.filter(obj=>obj.term==='Spring 2020');
        console.log(upcomingCourses.length);
        var irvineDB = {};
        var arcadiaDB = {};
        console.log(upcomingCourses);
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
          // console.log(location);

        });
        

        $http({
          method: 'GET',
          url: 'https://prod-sharemyworks-backend.herokuapp.com/api/CoursesDBs',
          headers: {
            'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
          },     
        }).then(function successCallback(response) {
            response.data.sort(function(a,b){
              return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
            })
            var courses = response.data;
            console.log(courses);
            courses.forEach(course=>{
              if(course.courseCode in irvineDB){
                  course['repeatData'] = irvineDB[course.courseCode]
                  $scope.courseListIrvine.push(course);
                  
              }
              if(course.courseCode in arcadiaDB){
                course['repeatData'] = arcadiaDB[course.courseCode] 
                $scope.courseListArcadia.push(course);
                
            }
            })

          $scope.getLength = function(obj) {
              return Object.keys(obj).length;
          }
          $scope.coursedb = coursedb;
          // $scope.courseListIrvine = [coursedb.cs101, coursedb.cs110, coursedb.cs160, coursedb.cs170, coursedb.cs220, coursedb.cs230, coursedb.cs240, coursedb.cs300, coursedb.cs310, coursedb.cs350, coursedb.cs400, coursedb.cs410, coursedb.cs420, coursedb.cs425, coursedb.cs430,coursedb.cs490, coursedb.cs501, coursedb.cs505, coursedb.cs510, coursedb.cs570,]
          // console.log("irvine courses:", $scope.courseListIrvine);
          
          
          // $scope.courseScheduleIrvine = scheduleIrvine;
          // $scope.courseScheduleRancho = scheduleRancho;
          // $scope.courseScheduleArcadia = scheduleArcadia;
      
        $scope.courseScheduleMap = {
          "a" : scheduleArcadia,
          "i" : scheduleIrvine,
          "r" : scheduleRancho
        };
        // $scope.courseScheduleOnline = [];
        // $scope.courseScheduleEnrichment = [];
        // $scope.courseListArcadia = [coursedb.cs101, coursedb.cs120, coursedb.cs211, coursedb.cs221, coursedb.cs320, coursedb.cs301, coursedb.cs302, coursedb.cs310, coursedb.cs311];
        // $scope.courseListRancho = [coursedb.cs210, coursedb.cs221, coursedb.cs371];
        // $scope.courseListOnline = [coursedb.cs401, coursedb.cs402, coursedb.cs403, coursedb.cs404, coursedb.cs407];
        // $scope.courseListEnrichment = [coursedb.cs404, coursedb.cs405, coursedb.cs406, coursedb.cs407, coursedb.cs408];
        console.log(JSON.stringify($scope.courseListIrvine));
        console.log(JSON.stringify($scope.courseListArcadia));
          }, function errorCallback(response) {
            console.log(response);
          });
      }, function errorCallback(response) {
        console.log(response);
      });

  
});


