
angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope,$http) {

    $http({
      method: 'GET',
      url: 'https://dev-sharemyworks-backend.herokuapp.com/api/Account/getSemesterFeedback',
      headers: {
        'Authorization': 'kxQUmOjBNLl9esLpK5VAyol5GUzW0RDn8pOstkrRvvFrCht8ByzhHL5amLNNLcOq'
      },     
      params: {
        id: "5ace2f3cea2c3311384aea52"
      }
    }).then(function successCallback(response) {
        console.log(response);
        var month = response.data.courses[0].dateStart.slice(5,7);
        if (8<=month<=12){
          $scope.Term = 'Fall';
        }else{
          $scope.Term = 'Spring';
        }
        
        $scope.StudentRecord = response.data.profile;
        $scope.StudentCourse = response.data.courses[0];
        $scope.Feedbacks = response.data.feedback;
        $scope.Instructor = response.data.instructor;
        var idx = response.data.activities.length-1;
        $scope.FinalProject = response.data.activities[idx];
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });

  });