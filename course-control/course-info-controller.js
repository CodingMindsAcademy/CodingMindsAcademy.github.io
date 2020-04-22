angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http,$location) {
    
    var url = $location.$$absUrl;
    var url = new URL(url);
    var course_id = url.searchParams.get("course_id");
    $scope.student_name = url.searchParams.get('name')
    let f = {
        include: [
          {
            relation: 'instructor',
            scope: {
              fields: ['firstName', 'lastName']
            }
          }],
      };
    $http({
        method: 'GET',
        url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Course/'+course_id,
        params: {
            filter: f
        },
        headers: {
          'Authorization': 'k6s6WghHbQ0sFQMw9YTO5MWDCunX3SNAJu8kksejwO0cP1tEh73glea29CGWExEi'
        },     
      }).then(function successCallback(response) {
          
            console.log(response);
            let course = response.data;
            console.log
            $scope.course_level = coursedb.cn[course.courseCode].gradeLevel.slice(0,2);
            console.log($scope.course_level)
            $scope.course_name = course.name;
            $scope.instructor = course.instructor.firstName + ' ' + course.instructor.lastName;
            $scope.course_time = course.classDay + ' '+ course.classTime + '-' + course.classEndTime;
            $scope.onlineZoomLink = course.onlineZoomLink;
        }, function errorCallback(response) {
          console.log(response);
        });




    // process individual student's information for pathway page
  });