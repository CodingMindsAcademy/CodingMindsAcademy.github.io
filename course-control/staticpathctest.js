angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http) {
  
 $scope.courseListIrvine = irvinedb;
 $scope.courseListArcadia = arcadiadb;
 $scope.form = {};
 $scope.submit = function(courseId) {
 $scope.form.dateOfBirth = '2018-04-11T15:50:01.459Z';
 $scope.form.username = `${$scope.form.firstName}${$scope.form.lastName}`;
 $scope.form.password = `codingminds${$scope.form.username}`;
  $http({
    method: 'POST',
    url: `https://prod-sharemyworks-backend.herokuapp.com/api/Account`,
    headers: {
      'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
    },
    data: $scope.form
  }).then(function successCallback(response) {
    console.log('user created',response);
    $http({
      method: 'PUT',
      url: `https://prod-sharemyworks-backend.herokuapp.com/api/Course/${courseId}/students/rel/${response.data.id}`,
      headers: {
        'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
      } 
    }).then(function successCallback(response) {
    console.log('enrolled to course',response);
    }, function errorCallback(response) {
      console.log(response);
      // console.log("Not yet notified, therefore no logId!");
    });
    }, function errorCallback(response) {
      console.log(response);
      // console.log("Not yet notified, therefore no logId!");
    });
 }
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


