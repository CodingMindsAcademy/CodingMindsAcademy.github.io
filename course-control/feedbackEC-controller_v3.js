
angular.module('v3App', [])
  .config(function($sceProvider) {
    $sceProvider.enabled(false);    
  })
  .controller('FeedbackController', function($scope, $location,$http) {


    // 基本信息
    // 学生姓名：Andrew Sun
    // profileUrl = 'https://dev-sharemyworks-backend.herokuapp.com/api/Profile/'+studentId;
    // config: {transformRequest: {…}, transformResponse: {…}, timeout: 0, xsrfCookieName: "XSRF-TOKEN", adapter: ƒ, …}
    // data:
    // activities: (9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
    // courses: [{…}]
    // feedback: (4) [{…}, {…}, {…}, {…}]
    // profile: {firstName: "Eric", lastName: "Li", email: "18629692129la@gmail.com", dateOfBirth: "2019-04-04T07:00:00.000Z", phoneNumber: "5628462887", …}
    // __proto__: Object
    // headers: {content-type: "application/json; charset=utf-8"}
    // request: XMLHttpRequest {readyState: 4, timeout: 0, withCredentials: false, upload: XMLHttpRequestUpload, onreadystatechange: ƒ, …}
    // status: 200
    // statusText: "OK"
    // 课程名称：Python编程基础
    // 任课老师：Mr. Kevin Jones
    // 课程时间：周一5:00-6:30pm
    // courseUrl = 'https://dev-sharemyworks-backend.herokuapp.com/api/Course/5d8ec24a69b419003248fbab';
    
    // 学期总结
    // 学期总结：这里提供一个对整个学期的总结，我们可以把这个总结放在学生Feedback里，系统自动抽取最近的一条Feedback作为学期总结。此外，可以在该Feedback里面加入一个特殊字符作为表示，比如EoS (End of Semester)。
    // feedbackUrl = 'https://dev-sharemyworks-backend.herokuapp.com/api/Account/' + this.state.accountId + '/feedback'
    // 学生项目
    // 项目名称：Sudoko Solver
    // 项目演示：Youtube视频，直接嵌入Youtube链接，可以播放
    // const getStudentActivitiesUrl = 'https://dev-sharemyworks-backend.herokuapp.com/api/Account/'+this.state.accountId+'/activities';
    // accountId: "5cae5e6a6777300032aaa4a3"
    // courseId: "5d8ec24a69b419003248fbab"
    // dateCreate: "2019-09-17T02:40:12.255Z"
    // dateUpdate: "2019-11-02T05:32:06.950Z"
    // description: "https://makecode.com/_C5w4exf28A6d"
    // id: "5cae5f256777300032aaa4a5"
    // link: ""
    // points: 0
    // title: "minecraft"
    // updateDate: "2019-09-28T22:28:01.752Z"
    // videoUrl: ""
    // viewCount: 4

    // 老师反馈
    // 老师反馈：这里我们需要另外一个Table把所有的反馈列出来，时间和内容
    
    // 家长反馈
    // 有任何疑问请填写下表（该反馈需要进入ShareMyWorks的后台）
    
    $http({
      method: 'GET',
      url: 'https://dev-sharemyworks-backend.herokuapp.com/api/Account/getSemesterFeedback',
      headers: {
        'Authorization': 'kxQUmOjBNLl9esLpK5VAyol5GUzW0RDn8pOstkrRvvFrCht8ByzhHL5amLNNLcOq'
      },     
      params: {
        id: "5cae5e6a6777300032aaa4a3"
        // activityLimit: 10,
        // courseLimit: 6
      }
    }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        console.log(response);
        $scope.StudentRecord = response.data.profile;
        $scope.StudentCourse = response.data.courses[0];
        $scope.FinalProject = response.data.activities[response.data.activities.length-1];
        $scope.Feedbacks = response.data.feedback;
        $scope.Instructor = response.data.instructor;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        console.log(response);
      });

    // $scope.courseList = [];
    // for(var key in coursedb.cn) {
    //   if (coursedb.cn[key].enabled) {
    //     $scope.courseList.push(coursedb.cn[key]);
    //   }
    // }

    // $scope.getLength = function(obj) {
    //     return Object.keys(obj).length;
    // }

    // $scope.coursedb = coursedb.cn;
    // $scope.stuFbDb = stuFbDb;  
    // $scope.ProjectTitleEnable = true;
    // $scope.ProjectLinkEnable = true;     

    // process individual student's information for pathway page
    // var url = $location.url();
    // $scope.currentUrl = url;
    // var stuid = '';
    // if (url.indexOf("=") > -1) {
    //   stuid = url.split("=")[1];
    //   console.log("Student ID: " + stuid);

    //   var stuRecord = stuFbDb[stuid];
    //   console.log("Student: " + stuRecord);      
    //   if (stuRecord != null) {
    //     var stuCouRrd = stuRecord.course;
    //     console.log("Student: " + JSON.stringify(stuCouRrd));
    //     if (stuCouRrd != null && stuCouRrd.length > 0) {
          
    //       $scope.StudentRecord = stuCouRrd[0];          
    //       $scope.StudentCourse = $scope.coursedb[stuCouRrd[0].CourseId];

    //     }
    //   }

    // }

    // if ($scope.StudentRecord.ProjectTitle.length == 0){
    //         $scope.ProjectTitleEnable = false;
    //       }

    // if ($scope.StudentRecord.ProjectLink.length == 0){
    //         $scope.ProjectLinkEnable = false;
    //       }
    // $scope.stuid = stuid;
  });