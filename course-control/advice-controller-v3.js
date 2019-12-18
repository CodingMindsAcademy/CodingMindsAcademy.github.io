angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .factory('myService', function($http) {

    var getData = function() {

        // Angular $http() and then() both return promises themselves 
        return $http({
            method: 'GET',
            url: '/course-control/courseDB_cn.json',

        }).then(function successCallback(response) {
            // console.log(response);
            // $scope.coursedb = response;
            return response;
        }, function errorCallback(response) {
            // called asynchronously if an error occurs
            // or server returns response with an error status.
            console.log(response);
        });
    };


    return { getData: getData };
})
  .controller('FeedbackController', function($scope, $location,$http) {
    
    // $scope.courseReady = false;
    $scope.compList = [];
    for(var key in competitionMap) {      
      $scope.compList.push(competitionMap[key]);
    }
    $scope.coursedb = arcadiadb;

    var url = $location.$$absUrl;
    $scope.currentUrl = url;
    $scope.stuid = $scope.currentUrl.slice($scope.currentUrl.indexOf('=')+1, url.length);
    console.log($scope.stuid);
    
    $http({
        method: 'GET',
        url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/'+$scope.stuid,
        headers: {
          'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
        },     
      }).then(function successCallback(response) {
        //   response.data.sort(function(a,b){
        //     return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
        //   })
        //   var courses = response.data;
        //   console.log(courses);
        //   courses.forEach(course=>{
        //     if(course.courseCode in irvineDB){
        //         course['repeatData'] = irvineDB[course.courseCode]
        //         $scope.courseListIrvine.push(course);
                
        //     }
        //     if(course.courseCode in arcadiaDB){
        //       course['repeatData'] = arcadiaDB[course.courseCode] 
        //       $scope.courseListArcadia.push(course);
              
        //   }
        //   })
        console.log(response);
        $scope.student = response.data;
        }, function errorCallback(response) {
          console.log(response);
        });
    // $scope.stuid = stuid;
      $(function () {
    $masonry = $('.masonry1').masonry({
      isAnimated: true,
      itemSelector: 'div.masonry__item',
      horizontalOrder: true,
      originLeft: true,
      originTop: true
      });

    window.onload = function(){ 
      $masonry.masonry('layout');
    }

    $('a.toggle_schedule').click(function() {
      $(this).closest('div.card').find('.course_schedule').toggle();
      $masonry.masonry('layout');
        return false;
    });
  });
  });

