
angular.module('v3App', ['ngMaterial'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $http, $location, $mdToast) {
    var url = $location.$$absUrl;
    var student_id = url.slice(url.indexOf('=')+1,url.length);
    var suggestedCourses = id_courses[student_id];
    if(suggestedCourses){
      suggestedCourses.sort();
      $scope.Level = coursedb['cn'][suggestedCourses[0]].gradeLevel;

    }else{
      $scope.Level = 'L1图形化编程'
    }
    // console.log(suggestedCourses);

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
        if(response.data.courses!=[]){
          var month = response.data.courses[0].dateStart.slice(5,7);
          if (8<=month<=12){
            $scope.Term = 'Fall ';
          }else{
            $scope.Term = 'Spring ';
          }
          $scope.Term +=  + response.data.courses[0].dateStart.slice(0,4);
          $scope.StudentCourse = response.data.courses[0];

        }
        $scope.StudentRecord = response.data.profile;
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

        if ($scope.EOSfeedback && ['',undefined,'翻译出现错误'].includes($scope.EOSfeedback.text_cn)){
            // console.log($scope.EOSfeedback.text);
            var translateUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/Account/'+student_id+'/feedback/'+feedbackId;
            $http({
              method: 'PUT',
              url: translateUrl,
              headers: {
                'Authorization': '68M3RMfo4eS9XlTPmDqoCe3PePKxLRgpSnRQrvvNx3xcujKWpyFF9f65rAU9uM2l'
              } , 
              data: {
                "text": $scope.EOSfeedback.text
                
              },
       
            }).then(function successCallback(response) {
              console.log(response);
              $scope.EOSfeedback = response.data;
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
                var displayToast = function (type) {
                  let msg = '';
                  let time = 5000;
                  switch (type) {
                    case 'success': {
                      msg = '<i class="material-icons" style="font-size: 2em;"> done </i> &nbsp;反馈提交成功!';
                      time = 5000;
                      break;
                    }
                    case 'error': {
                      msg = '<i class="icon icon-sm icon-Coding" style="font-size: 2em;"></i> &nbsp;反馈提交失败 请再次尝试或&nbsp;<a href="contact-us-cn.html" target="_blank">联系我们</a>';
                      time = 0;
                      break;
                    }
                  }
                  $mdToast.show({
                    template: '<md-toast layout="row" class="md-toast ' + type + '">' + msg  + '<a href="#" ng-click="closeToast()" style="color:white;padding-left:2em;text-decoration:none;">X</a></md-toast>',
                    hideDelay: time,
                    position: 'bottom',
                    controller: 'ToastController',
                    parent: document.getElementById('toast-container')
                  }).then(function () {
                    // console.log('Toast dismissed.');
                  }).catch(function () {
                    // console.log('Toast failed or was forced to close early by another toast.');
                  });
                }
                $http({
                  method: 'POST',
                  url: 'https://prod-sharemyworks-backend.herokuapp.com/api/NotificationLog/reply',
                  params: {
                    logId: logId,
                    reply: $scope.text
                  }          
                }).then(function successCallback(response) {
                  // console.log(response);
                  displayToast('success');
                  const ManagerEmail = 'notification@codingmindsacademy.com';
                  const ManagerNumber = '(949) 236-7896';
                  if(response.status === 204){
                      var notifyUrl = "https://prod-sharemyworks-backend.herokuapp.com/api/Feedback/" + feedbackId + '/notifyReply';
                      $http({
                        method: 'POST',
                        url: notifyUrl,
                        headers: {
                          'Authorization': '7e07BdkkBdGroThWLTF0PrdJhqYVjT3DB7SGkgP5z3eVIloodHjpJDxFP6VAlFZB'
                        },   
                        params: {
                          email: ManagerEmail,
                          number: ManagerNumber,
                          name: $scope.StudentRecord.firstName+" "+$scope.StudentRecordlastName,
                          replytext: $scope.text,
                          feedbacktext: $scope.EOSfeedback.text,
                        }
                      }).then(response =>{
                        console.log(response.status);
                      }).catch(error => {
                        console.error(error);
                      });
                    }
                  
                  }, function errorCallback(response) {
                    console.log(response);
                    displayToast('error');
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

  })
  .controller('ToastController', function ($scope, $mdToast) {
    $scope.closeToast = function () {
      $mdToast.hide();
    };
  });
