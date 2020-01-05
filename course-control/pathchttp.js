angular.module('v3App', ["ngMaterial"])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http) {
  
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
        'Authorization': 'EdgBex8ofavDhU70j0GOXTr2HaMVBcfefgvc5IpdnjCuRTpNvXifV6WtoyasMThN'
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
            'Authorization': 'EdgBex8ofavDhU70j0GOXTr2HaMVBcfefgvc5IpdnjCuRTpNvXifV6WtoyasMThN'
          },     
        }).then(function successCallback(response) {
            response.data.sort(function(a,b){
              return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
            })
            var courses = response.data;

            console.log(courses);
            courses.forEach(course=>{
                var tempcourse1 = Object.assign({},course);
                var tempcourse2 = Object.assign({},course);
              if(course.courseCode in irvineDB){
                  //  tempcourse1= course;
                  tempcourse1['repeatData'] = irvineDB[tempcourse1.courseCode]
                  $scope.courseListIrvine.push(tempcourse1);
                  console.log(tempcourse1);
                  console.log(irvineDB[tempcourse1.courseCode]);
                  console.log(tempcourse1['repeatData']);
              }
              if(course.courseCode in arcadiaDB){
                // tempcourse2 = course;
                tempcourse2['repeatData'] = arcadiaDB[tempcourse2.courseCode] 
                $scope.courseListArcadia.push(tempcourse2);
                console.log(tempcourse2);

                console.log(arcadiaDB[tempcourse2.courseCode]);
                console.log(tempcourse2['repeatData']);
            }
            // if(tempcourse1!=undefined){
            //   console.log(tempcourse1);
            // console.log(irvineDB[tempcourse1.courseCode]);
            // console.log(tempcourse1['repeatData']);

            // }
            // if(tempcourse2!=undefined){
            //   console.log(tempcourse2);

            // console.log(arcadiaDB[tempcourse2.courseCode]);
            // console.log(tempcourse2['repeatData']);

            // }
            })

          $scope.getLength = function(obj) {
              return Object.keys(obj).length;
          }
          $scope.coursedb = coursedb;

        console.log($scope.courseListIrvine);
        console.log($scope.courseListArcadia);
          }, function errorCallback(response) {
            console.log(response);
          });
      }, function errorCallback(response) {
        console.log(response);
      });

  
});


