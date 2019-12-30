angular.module('v3App', ['ngMaterial'])
  .config(function ($sceProvider) {
    $sceProvider.enabled(false);
  })
  .controller('CourseListController', function ($scope, $http, $mdToast) {
    $scope.courseListIrvine = irvinedb;
    $scope.courseListArcadia = arcadiadb;
    $scope.courseListOnline = onlinedb;
    $scope.form = {};
    $scope.submit = function (courseId, campus) {
      $(`#${courseId}`).removeClass('modal-active');

      var displayToast = function (type) {
        let msg = '';
        let time = 5000;
        switch (type) {
          case 'success': {
            msg = '<i class="material-icons" style="font-size: 2em;"> done </i>注册成功！我们会在开课前与您联系！';
            time = 5000;
            break;
          }
          case 'error': {
            msg = '<i class="icon icon-sm icon-Coding" style="font-size: 2em;"></i> &nbsp;注册失败 请再次尝试或&nbsp;<a href="contact-us-cn.html" target="_blank">联系我们</a>';
            time = 0;
            break;
          }
          case 'duplicated': {
            msg = '<i class="material-icons" style="font-size: 2em;"> error_outline </i> &nbsp;您已经注册过此课程！';
            time = 5000;
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
      $scope.form.dateOfBirth = '2018-04-11T15:50:01.459Z';
      $scope.form.username = `${$scope.form.firstName}${$scope.form.lastName}${campus}`;
      $scope.form.password = `codingminds${$scope.form.username}`;
      $scope.form.contact2Type = "WeChatUsername";
      $scope.form.notSend = true;
      $http({
        method: 'POST',
        url: `https://prod-sharemyworks-backend.herokuapp.com/api/Account`,
        headers: {
          'Authorization': 'GJHhzSRGoHJsiQPWHp4aRmupLuBWONQ4FnLmZ439nRqdghPheaQo9kj3X2ChqSn9'
        },
        data: $scope.form
      }).then(function successCallback(response) {
        console.log('user created', response);
        let stuid = response.data.id;
        $http({
          method: 'HEAD',
          url: `https://prod-sharemyworks-backend.herokuapp.com/api/Course/${courseId}/students/rel/${stuid}`,
          headers: {
            'Authorization': 'GJHhzSRGoHJsiQPWHp4aRmupLuBWONQ4FnLmZ439nRqdghPheaQo9kj3X2ChqSn9'
          }
        }).then(function successCallback(response) {
          displayToast('duplicated');
        }, function errorCallback(response) {
          $http({
            method: 'PUT',
            url: `https://prod-sharemyworks-backend.herokuapp.com/api/Course/${courseId}/students/rel/${stuid}`,
            headers: {
              'Authorization': 'GJHhzSRGoHJsiQPWHp4aRmupLuBWONQ4FnLmZ439nRqdghPheaQo9kj3X2ChqSn9'
            }
          }).then(function successCallback(response) {
            console.log('enrolled to course', response);
            displayToast('success');
          }, function errorCallback(response) {
            displayToast('error');
            console.log(response);
            // console.log("Not yet notified, therefore no logId!");
          });
        });
      }, function errorCallback(response) {
        displayToast('error');
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

      window.onload = function () {
        $masonry.masonry('layout');
      }

      $('a.toggle_schedule').click(function () {
        $(this).closest('div.card').find('.course_schedule').toggle();
        $masonry.masonry('layout');
        return false;
      });
    });
  })
  .controller('ToastController', function ($scope, $mdToast) {
    $scope.closeToast = function () {
      $mdToast.hide();
    };
  });


