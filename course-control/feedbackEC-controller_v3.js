
angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http, $location) {
    var url = $location.$$absUrl;
    var student_id = url.slice(url.indexOf('=')+1,url.length);
    var suggestedCourses = id_courses[student_id];
    suggestedCourses.sort();
    // console.log(suggestedCourses);
    $scope.Level = coursedb['cn'][suggestedCourses[0]].gradeLevel;

    // console.log($scope.Level);
    $http({
      method: 'GET',
      url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/getSemesterFeedback',
      headers: {
        'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
      },     
      params: {
        id: student_id
      }
    }).then(function successCallback(response) {
        // console.log(response);
        var month = response.data.courses[0].dateStart.slice(5,7);
        if (8<=month<=12){
          $scope.Term = 'Fall ';
        }else{
          $scope.Term = 'Spring ';
        }
        $scope.Term +=  + response.data.courses[0].dateStart.slice(0,4);
        
        $scope.StudentRecord = response.data.profile;
        $scope.StudentCourse = response.data.courses[0];
        $scope.Feedbacks = response.data.feedback;

        var idx = response.data.activities.length-1;
        $scope.FinalProject = response.data.activities[idx];

        var feedbackId;
        // console.log($scope.Feedbacks)
        $scope.Feedbacks.forEach(element => {
          if (element.endOfSemesterFlag === true){
            feedbackId = element.id;
            $scope.EOSfeedback = element;
          }
        });
                    // console.log($scope.EOSfeedback);

        if ($scope.EOSfeedback && ['',undefined].includes($scope.EOSfeedback.text_cn)){
            console.log($scope.EOSfeedback);
            $http({
              method: 'PUT',
              url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/'+student_id+'/feedback/'+feedbackId,
              params: {
                text: $scope.EOSfeedback.text
              },
              headers: {
                'Authorization': '7e07BdkkBdGroThWLTF0PrdJhqYVjT3DB7SGkgP5z3eVIloodHjpJDxFP6VAlFZB'
              }         
            }).then(function successCallback(response) {
              console.log(response);
            }, function errorCallback(response) {
              console.log(response);
              console.log("Cannot translate feedback.");
            });
        }
        
        const getLogsUrl = "https://prod-sharemyworks-backend.herokuapp.com/api/Feedback/"+feedbackId+'/logs';
        // FEEDBACK_API + id + '/logs';
    $http({
      method: 'GET',
      url: getLogsUrl,
      headers: {
        'Authorization': '7e07BdkkBdGroThWLTF0PrdJhqYVjT3DB7SGkgP5z3eVIloodHjpJDxFP6VAlFZB'
      }    

    }).then(response => {
      // console.log(response);
      var logs = response.data;
      var logId = logs[0].id;
      // console.log(logId);
      $scope.submit = function() {
                // console.log($scope.text)
                $http({
                  method: 'POST',
                  url: 'https://prod-sharemyworks-backend.herokuapp.com/api/NotificationLog/reply',
                  params: {
                    logId: logId,
                    reply: $scope.text
                  }          
                }).then(function successCallback(response) {
                  // console.log(response);
                  }, function errorCallback(response) {
                    console.log(response);
                    console.log("Not yet notified, therefore no logId!");
                  });
              };
          });

        // console.log($scope.Feedbacks);
        // console.log(logId);
       
        $scope.redirect = function() {
          // console.log($scope.text)
          window.location.href="https://codingmindsacademy.com/advice_v2.html?id="+student_id;
        };
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });

  });