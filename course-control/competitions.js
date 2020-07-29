angular.module('v3App', ['ngMaterial'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $location, $mdToast, $http) {
    
    $scope.compList = [];
    for(var key in competitionMap) {      
      $scope.compList.push(competitionMap[key]);
    }
    
  });
  

