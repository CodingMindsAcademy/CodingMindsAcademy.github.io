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
          

            function getMonday(d) {
              d = new Date(d);
              var day = d.getDay(),
                  diff = d.getDate() - day + (day == 0 ? -6:1); // adjust when day is sunday
              return new Date(d.setDate(diff));
            }
            
            function getNextClassCount(course) {
          
              var dateStart;
              var dateEnd;
              if (course.dateStart.indexOf('T') === -1) {
                dateStart = course.dateStart;
              } else {
                dateStart = course.dateStart.slice(0, course.dateStart.indexOf('T'));
              }
              console.log()
              if (course.dateEnd.indexOf('T') === -1) {
                dateEnd = course.dateEnd;
              } else {
                dateEnd = course.dateEnd.slice(0, course.dateEnd.indexOf('T'));
              }
              var monday = getMonday(new Date(dateStart));
          
              const nextClasses = Math.floor(1 + (Date.now() - new Date(monday)) / (7 * 1000 * 3600 * 24));
              const totalClassesCount =  Math.ceil(1+(new Date(dateEnd) - new Date(dateStart))/(7 * 1000 * 3600 * 24));
              return [nextClasses, totalClassesCount];
            }

            let course = response.data;
            $scope.course_level = coursedb.cn[course.courseCode].gradeLevel.slice(0,2);
            $scope.course_name = course.name;
            $scope.instructor = course.instructor.firstName + ' ' + course.instructor.lastName;
            $scope.course_time = course.classDay + ' '+ course.classTime + '-' + course.classEndTime;
            $scope.onlineZoomLink = course.onlineZoomLink;

            var values = getNextClassCount(course);
            console.log(values);
            $scope.nextClassesCount = values[0];
            $scope.totalClassesCount = values[1];

        }, function errorCallback(response) {
          console.log(response);
        });




    // process individual student's information for pathway page
  });