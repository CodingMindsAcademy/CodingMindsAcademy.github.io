angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .factory('myService', function($http) {

    var getData = function() {
        // Angular $http() and then() both return promises themselves 
        return $http({
            method: 'GET',
            url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/'+$scope.stuid,
            headers: {
              'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
            },     
          }).then(function successCallback(response) {
            $scope.student = response.data;
            $scope.suggestedCourses = response.data.suggestedCourses;
            
            $scope.courseListIrvine = irvinedb;
            $scope.courseListArcadia = arcadiadb;
            $scope.courseListOnline = onlinedb;
            
            }, function errorCallback(response) {
              console.log(response);
            });
    };
    return { getData: getData };
})
  .controller('FeedbackController', function($scope, $location, $log) {
    
    $scope.compList = [];
    for(var key in competitionMap) {      
      $scope.compList.push(competitionMap[key]);
    }

    var url = $location.$$absUrl;
    $scope.currentUrl = url;
    $scope.stuid = $scope.currentUrl.slice($scope.currentUrl.indexOf('=')+1, url.length);
    console.log($scope.stuid);
        var suggestedCourses = {'a':[],'i':[], 'o':[]};
        $scope.suggestedCourses = id_courses[$scope.stuid];
        console.log($scope.suggestedCourses);
        irvinedb.forEach(course=>{
            if($scope.suggestedCourses.includes(course.courseCode)){
                suggestedCourses['i'].push(course);
            }
        });
        arcadiadb.forEach(course=>{
            if($scope.suggestedCourses.includes(course.courseCode)){
                suggestedCourses['a'].push(course);
            }
        });
        onlinedb.forEach(course=>{
            if($scope.suggestedCourses.includes(course.courseCode)){
                suggestedCourses['o'].push(course);
            }
        });
        $log.info(suggestedCourses);
        $scope.courseListIrvine = irvinedb;
        $scope.courseListArcadia = arcadiadb;
        $scope.courseListOnline = onlinedb;


        
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

