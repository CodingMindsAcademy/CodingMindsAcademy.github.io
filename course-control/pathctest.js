angular.module('v3App', ['ngMaterial'])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('CourseListController', function($scope, $http, $mdDialog) {
  

  $scope.courseList = [];
  $scope.courseLevelMap = {
    'L1' : [],
    'L2' : [],
    'L3' : [],
    'L4' : [],
    'L5' : [],
  };

  $scope.form = {};
 var coursedb = {};

 function DialogController($scope, $mdDialog) {
  $scope.hide = function () {
      $mdDialog.hide();
  };

  $scope.cancel = function () {
      $mdDialog.cancel();
  };

  // $scope.submit = function () {
  //   $mdDialog.hide();
  // };
}

$scope.selectCourse = function(src) {
  $mdDialog.show({
    controller: DialogController,
    template: `
  <div class="boxed boxed--lg"> 
      <iframe ng-src=${src}></iframe>
  </div>
`,
    parent: angular.element(document.body),
    clickOutsideToClose: true,
    fullscreen: false // Only for -xs, -sm breakpoints.
  })
};

$scope.showCourseInfo = function(src) {
  $mdDialog.show({
    controller: DialogController,
    template: `
        <section class="imageblock feature-large bg--white border--round ">
            <div class="container" style="padding-top: 1.1em">
                <div class="row" style="height: calc(100vh - 100px)">
                    <iframe width="200" height="800" ng-src=${src}></iframe>
                </div>
                <!--end of container-->
            </section>
`,
    parent: angular.element(document.body),
    clickOutsideToClose: true,
    fullscreen: false // Only for -xs, -sm breakpoints.
  })
};

$scope.register = function (course) {
  $mdDialog.show({
    controller: DialogController,
    template: `
                        <div class="col-sm-6 col-md-offset-3 col-sm-offset-3 col-xs-12">
                            <div class="boxed boxed--lg bg--white text-center feature">
                              <div style="text-align: right">
                                <a class="btn-lg" ng-click="cancel()" style="cursor:pointer"><span class="btn__text">X</span></a>
                                </div>
                                <h3>填写报名信息</h3>
                                <h5>${course.shortName}</h5>
                                
                                <hr data-title="OR">
                                <div class="feature__body">
                                    <form ng-submit="hide()">
                                        <div class="row">
                                            <div class="col-sm-6">
                                                <input type="text" ng-model="form.firstname" placeholder="学生First Name" />
                                            </div>
                                            <div class="col-sm-6">
                                                <input type="text" ng-model="form.lastname" placeholder="学生Last Name" />
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="text" ng-model="form.grade" placeholder="年级" />
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="email" ng-model="form.email" placeholder="Email" />
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="number" ng-model="form.phone" placeholder="联系电话" />
                                            </div>
                                            <div class="col-sm-12">
                                                <input type="text" ng-model="form.wechat" placeholder="微信号" />
                                            </div>
                                            <div class="col-sm-12">
                                                <button class="btn btn--primary type--uppercase" type="submit">注册</button>
                                            </div>
                                        </div>
                                        
                                    </form>
                                    <span class="type--fine-print block">如有疑问请联系我们
                                        <a href="contact-us-cn.html">联系我们</a>
                                    </span>                                    
                                </div>
                            </div>
                        </div>
`,
    parent: angular.element(document.body),
    fullscreen: false
  })
    .then(function () {
      CreateUserAndRegister(course.id);
    });
};


  $http({
    method: 'GET',
    url: 'https://prod-sharemyworks-backend.herokuapp.com/api/CoursesDBs',
    headers: {
      'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
    },     
  }).then(function successCallback(response) {
      console.log(response.data);
      response.data.sort(function(a,b){
        return (a.courseCode < b.courseCode) ? -1 : (a.courseCode > b.courseCode) ? 1 : 0;
      })
      var courses = response.data;
      console.log(courses);
      courses.forEach(course=>{
        if(course.enabled){
            $scope.courseList.push(course);
            var levelId = course.gradeLevel.substring(0, 2);
            $scope.courseLevelMap[levelId].push(course);
            coursedb[course.courseCode] = course;
        }
      });
    $scope.courseLevel1 = $scope.courseLevelMap['L1'];
    $scope.courseLevel2 = $scope.courseLevelMap['L2'];

    $scope.getLength = function(obj) {
        return Object.keys(obj).length;
    }
    $scope.coursedb = coursedb;
  // Summer 19 List
    $scope.courseListSummer2019 = [
      coursedb.cs210, coursedb.cs201, coursedb.cs301, coursedb.cs310,
      coursedb.cs211, coursedb.cs102, coursedb.cs313, coursedb.cs312,
      coursedb.cs221, coursedb.cs329, coursedb.cs331, coursedb.cs320,
      coursedb.cs480, coursedb.cs401, coursedb.cs404, coursedb.cs407,
      coursedb.cs380
    ];


    $scope.courseListIrvine = [coursedb.cs101, coursedb.cs110, coursedb.cs160, coursedb.cs170, coursedb.cs220, coursedb.cs230, coursedb.cs240, coursedb.cs300, coursedb.cs310, coursedb.cs350, coursedb.cs400, coursedb.cs410, coursedb.cs420, coursedb.cs425, coursedb.cs430, coursedb.cs470, coursedb.cs490, coursedb.cs501, coursedb.cs505, coursedb.cs510, coursedb.cs570];
    console.log($scope.courseListIrvine);
    
    $scope.courseScheduleIrvine = scheduleIrvine;
    $scope.courseScheduleRancho = scheduleRancho;
    $scope.courseScheduleArcadia = scheduleArcadia;

  $scope.courseScheduleMap = {
    "a" : scheduleArcadia,
    "i" : scheduleIrvine,
    "r" : scheduleRancho
  };

  $scope.courseScheduleOnline = [];
  $scope.courseScheduleEnrichment = [];
  $scope.courseListArcadia = [coursedb.cs101, coursedb.cs120, coursedb.cs211, coursedb.cs221, coursedb.cs320, coursedb.cs301, coursedb.cs302, coursedb.cs310, coursedb.cs311];
  $scope.courseListRancho = [coursedb.cs210, coursedb.cs221, coursedb.cs371];
  $scope.courseListOnline = [coursedb.cs401, coursedb.cs402, coursedb.cs403, coursedb.cs404, coursedb.cs407];
  $scope.courseListEnrichment = [coursedb.cs404, coursedb.cs405, coursedb.cs406, coursedb.cs407, coursedb.cs408];
    }, function errorCallback(response) {
      console.log(response);
    });

    function CreateUserAndRegister(courseid) {
      const defaultDob = '2018-04-11T15:50:01.459Z';
      const username = `${$scope.form.firstname}${$scope.form.lastname}`;
      const defaultPassword = `codingminds${username}`;
      $http({
        method: 'POST',
        url: `https://prod-sharemyworks-backend.herokuapp.com/api/Account`,
        headers: {
          'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
        },
        data: {
          firstName: $scope.form.firstname,
          lastName: $scope.form.lastname,
          username: username,
          password: defaultPassword,
          email: $scope.form.email,
          grade: $scope.form.grade,
          phoneNumber: $scope.form.phone,
          dateOfBirth: defaultDob,
          contact1Type: 'wechat',
          contact1Value: $scope.form.wechat,
        }
      }).then(function successCallback(response) {
        console.log('registered user',response);
        $http({
          method: 'PUT',
          url: `https://prod-sharemyworks-backend.herokuapp.com/api/Course/${courseid}/students/rel/${response.data.id}`,
          headers: {
            'Authorization': 'Ys6TAGbfIAZymNo6JtHiWZrGvvOGMoDSa4Y4IoIRU1t0YFYEowKjjj7zzoBlEOUi'
          } 
        }).then(function successCallback(response) {
        console.log('enrolled',response);
        }, function errorCallback(response) {
          console.log(response);
          // console.log("Not yet notified, therefore no logId!");
        });
        }, function errorCallback(response) {
          console.log(response);
          // console.log("Not yet notified, therefore no logId!");
        });
    }
  
});
