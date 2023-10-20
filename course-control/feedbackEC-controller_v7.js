
angular.module('v3App', ['ngMaterial'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('FeedbackController', function($scope, $http, $location, $mdToast) {
    var url = $location.$$absUrl;
    var url = new URL(url);
    var studentId = url.searchParams.get("studentId");
    var courseId = url.searchParams.get("courseId");
    var suggestedCourses = id_courses[studentId];

    $scope.compList = [];
    for(var key in competitionMap) {
      $scope.compList.push(competitionMap[key]);
    }

    // if(suggestedCourses){
    //   suggestedCourses.sort();
    //   $scope.Level = coursedb['cn'][suggestedCourses[0]].gradeLevel;
    // }else{
    //   $scope.Level = 'L1图形化编程'
    // }

    // console.log(suggestedCourses);
    // console.log($scope.Level);
    $http({
      method: 'GET',
      url: 'https://backend4.sharemyworks.com/api/Account/getSemesterFeedback',
    //   headers: {
    //     'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
    //   },
      params: {
        accountId: studentId,
        courseId: courseId
      }
    }).then(function successCallback(response) {
        console.log(response);
        let course = response.data.course;
        let student = response.data.profile;
        let suggestedCourses = response.data.suggestedCourses;
        $scope.Level = course.coursesDB.gradeLevel;
        $scope.Term = course.term;
        $scope.StudentCourse = course;
        $scope.suggestedCourses = suggestedCourses;
        console.log("firstone: " + suggestedCourses[0].gradeLevel.charAt(1));
        $scope.currentLevel = parseInt(suggestedCourses[0].gradeLevel.charAt(1));
        console.log("current Level: " + $scope.currentLevel);
        console.log($scope.currentLevel == 4);
        if(course.coursesDB.completion){
          $scope.Completion = course.coursesDB.completion.replace(/同学/g, response.data.profile.firstName);
        }

        // if (response.data.courses != []) {
        //   $scope.Level = response.data.courses[0].gradeLevel;
        //   $scope.Term = response.data.courses[0].term;
        //   $scope.StudentCourse = response.data.courses[0];

        //   console.log("TEST Completion: " + response.data.courses[0].completion);
        //   if (response.data.courses[0].completion) {
        //     $scope.Completion = response.data.courses[0].completion.replace(/同学/g, response.data.profile.firstName);
        //   }
        // }
        $scope.StudentRecord = response.data.profile;
        if(course.feedbacks.length > 0){
          // get the last feedback
          const length = course.feedbacks.length;
          $scope.Feedbacks = course.feedbacks[length - 1];
          $scope.EOSfeedback = course.feedbacks[length - 1];
        }


        // next course
        // if (response.data.courses[0].nextCourseId) {
        //  $scope.nextCourse = response.data.nextCourses[response.data.courses[0].nextCourseId.toLowerCase()];
        // }



        // var idx = response.data.activities.length - 1;
        // $scope.FinalProject = response.data.activities[idx];

        var feedbackId = $scope.EOSfeedback.id;
        // // console.log($scope.Feedbacks)
        // $scope.Feedbacks.forEach(element => {
        //   if (element.endOfSemesterFlag === true){
        //     feedbackId = element.id;
        //     $scope.EOSfeedback = element;
        //   }
        // });
                     // console.log($scope.EOSfeedback);

        if ($scope.EOSfeedback && ['',undefined,'翻译出现错误'].includes($scope.EOSfeedback.text_cn)){
            // console.log($scope.EOSfeedback.text);
            var translateUrl = 'https://backend4.sharemyworks.com/api/Account/'+studentId+'/feedback/'+feedbackId;
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
              console.log("Got the translate.");
              console.log(response);
              $scope.EOSfeedback = response.data;
            }, function errorCallback(response) {
              console.log("Cannot translate feedback.");
              console.log(response);
            });
        }

        const getLogsUrl = "https://backend4.sharemyworks.com/api/Feedback/"+feedbackId+'/logs';
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
      var logId = logs.id;
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
                  url: 'https://backend4.sharemyworks.com/api/NotificationLog/reply',
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
                      var notifyUrl = "https://backend4.sharemyworks.com/api/Feedback/" + feedbackId + '/notifyReply';
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
          window.location.href="https://codingmindsacademy.com/advice_v2.html?id="+studentId;
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
