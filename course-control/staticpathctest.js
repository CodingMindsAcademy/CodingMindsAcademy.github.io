angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope) {
  
 $scope.courseListIrvine = irvinedb;
 $scope.courseListArcadia = arcadiadb;

});


