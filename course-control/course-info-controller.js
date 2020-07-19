angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http,$location) {
    
    var url = $location.$$absUrl;
    var url = new URL(url);
    var course_id = url.searchParams.get("course_id");
    $scope.courseId = course_id;
    $scope.student_name = url.searchParams.get('name')
    let f = {
        include: [
          {
            relation: 'instructor',
            scope: {
              fields: ['firstName', 'lastName']
            }
          },
            'classDays'
          ],
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
            
            function getNextClassCount(course, today) {
              // return new Promise((resolve, reject) => {
                if (today === 0){
                    today = 7;
                }
                const weekdayNumber = {
                  'Monday': 1,
                  'Tuesday': 2,
                  'Wednesday': 3,
                  'Thursday': 4,
                  'Friday': 5,
                  'Saturday': 6,
                  'Sunday': 7
                }
                var dateStart;
                var dateEnd;
                if(typeof(course.dateEnd) === 'object') {
                  dateStart = course.dateStart.toISOString();
                  dateEnd = course.dateEnd.toISOString();
                } else {
                  dateStart = course.dateStart;
                  dateEnd = course.dateEnd;
                }
                if (dateStart.indexOf('T') !== -1) {
                  dateStart = dateStart.slice(0, dateStart.indexOf('T'));
                }
                if (dateEnd.indexOf('T') === -1) {
                  dateEnd = dateEnd;
                } else {
                  dateEnd = dateEnd.slice(0, dateEnd.indexOf('T'));
                }
                if(course.classDays.length === 0) {
                  const monday = getMonday(dateStart+ ' 00:00');
                  const nextClasses = Math.floor(1 + (Date.now() - new Date(monday)) / (7 * 1000 * 3600 * 24));
                  let totalClassesCount = 0;
                  if(course.totalClasses !== 0){
                    totalClassesCount = course.totalClasses;
                  } else {
                    totalClassesCount =  Math.ceil(1+(new Date(dateEnd) - new Date(dateStart))/(7 * 1000 * 3600 * 24));
                  }
                  return([nextClasses, totalClassesCount]);
                } else {
            
                  let classDays = [weekdayNumber[course.classDay]];
                  course.classDays.forEach(classDay => {
                      classDays.push(weekdayNumber[classDay.classDay]);
                  })
                  let start = new Date(dateStart + ' 00:00');
                  let end = new Date();
                  let count = countClasses(start.getTime(), end.getTime(), classDays);
                  let totalClassesCount = 0;
                  if(course.totalClasses !== 0){
                    totalClassesCount = course.totalClasses;
                  } else {
                    totalClassesCount = (course.classDays.length + 1) * Math.ceil(1+(new Date(dateEnd) - new Date(dateStart))/(7 * 1000 * 3600 * 24));
                  }
                  return ([count, totalClassesCount])
                }
              // });
              
            }
            function countClasses(start, end, classDays){
              let count = 0;
              let startTime = start;
              while(startTime <= end){
                  let day = new Date(startTime).getDay();
                  if(day === 0) day = 7;
                  if(classDays.indexOf(day) !== -1){
                      count += 1;
                  }
                  startTime += 1000*24*3600;
              }
              return count;
            }

            function getExtraClassDayTime(classDays){
              let classDayTimes = [];
              classDays.forEach(classDay=>{
                classDayTimes.push(classDay.classDay + ' ' + classDay.classTime + '-'+ classDay.classEndTime);
              })
              return classDayTimes;
            }
            let course = response.data;
            $scope.course_level = coursedb.cn[course.courseCode].gradeLevel.slice(0,2);
            $scope.course_name = course.name;
            $scope.instructor = course.instructor.firstName + ' ' + course.instructor.lastName;
            $scope.course_time = course.classDay + ' '+ course.classTime + '-' + course.classEndTime;
            $scope.onlineZoomLink = course.onlineZoomLink;
            $scope.price = course.price;
            let today = (new Date).getDay();
            console.log(course);
            var values = getNextClassCount(course, today);
            console.log(values);
            $scope.course_time =  $scope.course_time + '\n' + (getExtraClassDayTime(course.classDays)).join('\n');
            $scope.nextClassesCount = values[0];
            $scope.totalClassesCount = values[1];

        }, function errorCallback(response) {
          console.log(response);
        });




    // process individual student's information for pathway page
  });