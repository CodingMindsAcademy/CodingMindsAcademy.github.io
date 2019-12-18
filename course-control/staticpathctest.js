angular.module('v3App', ['ngMaterial'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http, $mdToast) {
  
 $scope.courseListIrvine = irvinedb;
 $scope.courseListArcadia = arcadiadb;
 $scope.form = {};
 $scope.submit = function(courseId) {
  $(`#${courseId}`).removeClass('modal-active');

  var displayToast = function(type, msg) {
    $mdToast.show({
      template: '<md-toast class="md-toast ' + type +'">' + msg + '</md-toast>',
      hideDelay: 3000,
      position: 'bottom center',
      parent: document.getElementById('toast-container')
    }).then(function() {
      // console.log('Toast dismissed.');
    }).catch(function() {
      // console.log('Toast failed or was forced to close early by another toast.');
    });
  }

 $scope.form.dateOfBirth = '2018-04-11T15:50:01.459Z';
 $scope.form.username = `${$scope.form.firstName}${$scope.form.lastName}`;
 $scope.form.password = `codingminds${$scope.form.username}`;
 $scope.form.contact2Type = "WeChatUsername";
  $http({
    method: 'POST',
    url: `https://prod-sharemyworks-backend.herokuapp.com/api/Account`,
    headers: {
      'Authorization': 'GJHhzSRGoHJsiQPWHp4aRmupLuBWONQ4FnLmZ439nRqdghPheaQo9kj3X2ChqSn9'
    },
    data: $scope.form
  }).then(function successCallback(response) {
    console.log('user created',response);
    $http({
      method: 'PUT',
      url: `https://prod-sharemyworks-backend.herokuapp.com/api/Course/${courseId}/students/rel/${response.data.id}`,
      headers: {
        'Authorization': 'GJHhzSRGoHJsiQPWHp4aRmupLuBWONQ4FnLmZ439nRqdghPheaQo9kj3X2ChqSn9' 
      } 
    }).then(function successCallback(response) {
    console.log('enrolled to course',response);
    displayToast('success', '注册成功!');
    }, function errorCallback(response) {
      displayToast('error', '注册失败!');
      console.log(response);
      // console.log("Not yet notified, therefore no logId!");
    });
    }, function errorCallback(response) {
      displayToast('error', '注册失败!');
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


