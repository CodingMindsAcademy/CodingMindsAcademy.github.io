
angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http, $location) {
    var url = $location.$$absUrl;
    var student_id = url.slice(url.indexOf('=')+1,url.length);

    console.log(student_id);
    $http({
      method: 'GET',
      url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/getSemesterFeedback',
      headers: {
        'Authorization': 'kxQUmOjBNLl9esLpK5VAyol5GUzW0RDn8pOstkrRvvFrCht8ByzhHL5amLNNLcOq'
      },     
      params: {
        id: student_id
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
        var logId = $scope.Feedbacks[$scope.Feedbacks.length-1].id;
        console.log(logId);
        $scope.FinalProject = response.data.activities[idx];
        $scope.submit = function() {
          console.log($scope.text)
          $http({
            method: 'POST',
            url: 'https://dev-sharemyworks-backend.herokuapp.com/api/NotificationLog/reply',
            params: {
              logId: logId,
              reply: $scope.text
            }          
          }).then(function successCallback(response) {
            console.log(response);
            }, function errorCallback(response) {
              console.log(response);
              console.log("Not yet notified, therefore no logId!");
            });
        };
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });

  });