angular.module('v3App', ["ngMaterial",'ui.bootstrap'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http, $uibModal, $sce) {
  
 var coursedb = {};
 $scope.courseListIrvine = [];
 $scope.courseListArcadia = [];
 $scope.load = 1;
  var orgs = {'5d801257d2c9f600154965d8':'a',
              '5b2423bbc0991500145353f4':'i'};
  // $scope.customFullscreen = false;

  // function DialogController($scope, $mdDialog) {
  //   $scope.hide = function() {
  //     $mdDialog.hide();
  //   };

  //   $scope.cancel = function() {
  //     $mdDialog.cancel();
  //   };

  //   $scope.answer = function(answer) {
  //     $mdDialog.hide(answer);
  //   };
  // }
  // $scope.showAdvanced = function(ev) {
  //   console.log(ev);
              //   $mdDialog.show({
              //     controller: DialogController,
              //     templateUrl: "thanksc.html",
              //     parent: angular.element(document.body),
              //     targetEvent: ev,
              //     clickOutsideToClose:true,
              //     fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
              //   })
              //   .then(function(answer) {
              //     $scope.status = 'You said the information was "' + answer + '".';
              //   }, function() {
              //     $scope.status = 'You cancelled the dialog.';
              //   });
              // };
              $scope.get = function(url) {
                $http({
                    method: 'GET',
                    url: url,
        
                })
                    .then(function successCallback(data){
                 
                        $scope.data = data.data;
                        console.log($scope.data);
                        $scope.trustedHtml = $sce.trustAsHtml($scope.data);
                        },
                     function errorCallback(response){
                        console.log(response);
                        console.log('error');
                    });
            }
              $scope.animationsEnabled = true;
              $scope.items = ['item1', 'item2', 'item3'];

              $scope.open = function (url) {
                console.log(url)

                var modalInstance = $uibModal.open({
                  templateUrl: 'test.html',
                  appendTo:angular.element(document.body),
                  controller: 'ModalInstanceCtrl'
                });
            
                modalInstance.result.then(function (selectedItem) {
                  $scope.selected = selectedItem;
                }, function () {
                  $log.info('Modal dismissed at: ' + new Date());
                });
              };  
    $http({
      method: 'GET',
      url: 'https://prod-sharemyworks-backend.herokuapp.com/api/Course',
      headers: {
        'Authorization': 'EdgBex8ofavDhU70j0GOXTr2HaMVBcfefgvc5IpdnjCuRTpNvXifV6WtoyasMThN'
      },  
    }).then(function successCallback(response) {
        var upcomingCourses = response.data.courses.filter(obj=>obj.term==='Spring 2020');
        console.log(upcomingCourses.length);
        var irvineDB = {};
        var arcadiaDB = {};
        console.log(upcomingCourses);
        upcomingCourses.forEach(course=>{
          var range;
          var dayTime;
          var strStart = course.dateStart.slice(5,10).replace('-','/');
          var strEnd = course.dateEnd.slice(5,10).replace('-','/');
          range = strStart + '-' +strEnd;
          dayTime = course.classDay + ' ' +course.classTime + '-' + course.classEndTime;
          var location = orgs[course.organizationId];
          var courseid = course.id;
          var repeatInfo = {'courseid':courseid, 'dayTime':dayTime, 'range':range, 'orgnization':location};
          
          if (location === 'a'){
            if (!(course.courseCode in arcadiaDB)){
              arcadiaDB[course.courseCode] = [];
              arcadiaDB[course.courseCode].push(repeatInfo);
            }
            else{
              arcadiaDB[course.courseCode].push(repeatInfo);
            }          
          }else{
            if (!(course.courseCode in irvineDB)){
              irvineDB[course.courseCode] = [];
              irvineDB[course.courseCode].push(repeatInfo);
            }
            else{
              irvineDB[course.courseCode].push(repeatInfo);
            }   
          }
          // console.log(location);

        });
        

        $http({
          method: 'GET',
          url: 'https://prod-sharemyworks-backend.herokuapp.com/api/CoursesDBs',
          headers: {
            'Authorization': 'EdgBex8ofavDhU70j0GOXTr2HaMVBcfefgvc5IpdnjCuRTpNvXifV6WtoyasMThN'
          },     
        }).then(function successCallback(response) {
            response.data.sort(function(a,b){
              return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
            })
            var courses = response.data;

            console.log(courses);
            courses.forEach(course=>{
                var tempcourse1 = Object.assign({},course);
                var tempcourse2 = Object.assign({},course);
              if(course.courseCode in irvineDB){
                  //  tempcourse1= course;
                  tempcourse1['repeatData'] = irvineDB[tempcourse1.courseCode]
                  $scope.courseListIrvine.push(tempcourse1);
                  console.log(tempcourse1);
                  console.log(irvineDB[tempcourse1.courseCode]);
                  console.log(tempcourse1['repeatData']);
              }
              if(course.courseCode in arcadiaDB){
                // tempcourse2 = course;
                tempcourse2['repeatData'] = arcadiaDB[tempcourse2.courseCode] 
                $scope.courseListArcadia.push(tempcourse2);
                console.log(tempcourse2);

                console.log(arcadiaDB[tempcourse2.courseCode]);
                console.log(tempcourse2['repeatData']);
            }
            // if(tempcourse1!=undefined){
            //   console.log(tempcourse1);
            // console.log(irvineDB[tempcourse1.courseCode]);
            // console.log(tempcourse1['repeatData']);

            // }
            // if(tempcourse2!=undefined){
            //   console.log(tempcourse2);

            // console.log(arcadiaDB[tempcourse2.courseCode]);
            // console.log(tempcourse2['repeatData']);

            // }
            })

          $scope.getLength = function(obj) {
              return Object.keys(obj).length;
          }
          $scope.coursedb = coursedb;

        console.log($scope.courseListIrvine);
        console.log($scope.courseListArcadia);
          }, function errorCallback(response) {
            console.log(response);
          });
      }, function errorCallback(response) {
        console.log(response);
      });

  
}).controller('ModalDemoCtrl', function ($uibModal, $log, $document) {
  var $ctrl = this;
  $ctrl.items = ['item1', 'item2', 'item3'];

  $ctrl.animationsEnabled = true;

  $ctrl.open = function (size, parentSelector) {
    console.log('nmsl');
    var parentElem = parentSelector ? 
      angular.element($document[0].querySelector('.main-container' + parentSelector)) : undefined;
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title',
      ariaDescribedBy: 'modal-body',
      templateUrl: 'test.html',
      controller: 'ModalInstanceCtrl',
      controllerAs: '$ctrl',
      size: size,
      appendTo: angular.element(document.body),
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $ctrl.openComponentModal = function () {
    var modalInstance = $uibModal.open({
      animation: $ctrl.animationsEnabled,
      component: 'modalComponent',
      resolve: {
        items: function () {
          return $ctrl.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $ctrl.selected = selectedItem;
    }, function () {
      $log.info('modal-component dismissed at: ' + new Date());
    });
  };

  $ctrl.openMultipleModals = function () {
    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-bottom',
      ariaDescribedBy: 'modal-body-bottom',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'bottom';  
      }
    });

    $uibModal.open({
      animation: $ctrl.animationsEnabled,
      ariaLabelledBy: 'modal-title-top',
      ariaDescribedBy: 'modal-body-top',
      templateUrl: 'stackedModal.html',
      size: 'sm',
      controller: function($scope) {
        $scope.name = 'top';  
      }
    });
  };

  $ctrl.toggleAnimation = function () {
    $ctrl.animationsEnabled = !$ctrl.animationsEnabled;
  };
})
.controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
  var $ctrl = this;
  $ctrl.items = items;
  $ctrl.selected = {
    item: $ctrl.items[0]
  };

  $ctrl.ok = function () {
    $uibModalInstance.close($ctrl.selected.item);
  };

  $ctrl.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});



// angular.module('ui.bootstrap.demo').controller('ModalInstanceCtrl', function ($uibModalInstance, items) {
//   var $ctrl = this;
//   $ctrl.items = items;
//   $ctrl.selected = {
//     item: $ctrl.items[0]
//   };

//   $ctrl.ok = function () {
//     $uibModalInstance.close($ctrl.selected.item);
//   };

//   $ctrl.cancel = function () {
//     $uibModalInstance.dismiss('cancel');
//   };
// });
