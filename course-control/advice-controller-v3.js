angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http, $location) {
    

    $scope.compList = [];
    for(var key in competitionMap) {      
      $scope.compList.push(competitionMap[key]);
    }
    $http({
        method: 'GET',
        url: '/course-control/courseDB_cn.json',

      }).then(function successCallback(response) {
          console.log(response);
          $scope.coursedb = response;
        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
          console.log(response);
        });
    $scope.courseScheduleMap = {
      "a" : scheduleArcadia,
      "i" : scheduleIrvine,
      "r" : scheduleRancho
    };

    var url = $location.$$absUrl;
    $scope.currentUrl = url;
    
    
    // $scope.stuid = stuid;
  });