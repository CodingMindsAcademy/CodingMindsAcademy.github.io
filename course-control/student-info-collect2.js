angular
  .module("v3App", ["ngMaterial"])
  .config(function ($sceProvider, $locationProvider) {
    $sceProvider.enabled(false);
    $locationProvider.html5Mode(true);
  })
  .controller("student-info-collect2", function ($scope, $http, $location) {
    const baseUrl = "https://prod-sharemyworks-backend.herokuapp.com/api/";
    //const baseUrl = 'http://localhost:3000/api/';
    const accountId = $location.search()["accountId"];
    const token = $location.search()["token"];

    $scope.form = {
      firstName: "",
      lastName: "",
      availableTime: [],
    };

    $http({
      method: "GET",
      url: `${baseUrl}Account/${accountId}?access_token=${token}`,
    })
      .then(function cb(res) {
        const account = res.data;
        $scope.form.firstName = account.firstName;
        $scope.form.lastName = account.lastName;
      })
      .catch(function cb(error) {
        alert("Cannot get account information!");
      });

    const availableTime = [];
    for (let i = 0; i < 7; i++) {
      const tmp = [];
      for (let j = 8; j <= 20; j++) {
        tmp.push({
          idx: j - 8,
          time: `${j}:00-${j + 1}:00`,
          valid: false,
        });
      }
      availableTime.push(tmp);
    }
    $scope.form.availableTime = availableTime;

    $scope.showDialog = false;

    $scope.weekdays = [
      {
        idx: 0,
        sequence: "08",
        day: "周一",
      },
      {
        idx: 1,
        sequence: "09",
        day: "周二",
      },
      {
        idx: 2,
        sequence: "10",
        day: "周三",
      },
      {
        idx: 3,
        sequence: "11",
        day: "周四",
      },
      {
        idx: 4,
        sequence: "12",
        day: "周五",
      },
      {
        idx: 5,
        sequence: "13",
        day: "周六",
      },
      {
        idx: 6,
        sequence: "14",
        day: "周日",
      },
    ];

    $scope.toggleAvailability = (day, time) => {
      $scope.form.availableTime[day][time].valid =
        !$scope.form.availableTime[day][time].valid;
    };

    const formatAvailabelTime = (availableTime) => {
      const weekDays = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ];
      let res = "";
      for (let idx = 0; idx < 7; idx++) {
        res += `${weekDays[idx]}: ${availableTime[idx]}\n`;
      }
      return res;
    };

    $scope.submit = async () => {
      if (!accountId || !token) {
        alert("No accountId found!");
        return;
      }
      $scope.showDialog = true;
      const availableTime = $scope.form.availableTime.map((day) => {
        return day
          .filter((timeSection) => timeSection.valid)
          .map((timeSection) => timeSection.time);
      });

      const data = {
        ...$scope.form,
        availableTime: JSON.stringify(availableTime),
      };

      try {
        await $http({
          method: "PATCH",
          url: `${baseUrl}Account/${accountId}?access_token=${token}`,
          data: data,
        });
        await $http({
          method: "POST",
          url: `${baseUrl}Account/notifyStudentInfoUpdate?access_token=${token}`,
          data: {
            email: "contact@codingmindsacademy.com",
            content:
              "A student has updated his/her information:\n" +
              `First Name: ${data.firstName}\n` +
              `Last Name: ${data.lastName}\n` +
              `Availabel Time \n` +
              formatAvailabelTime(availableTime),
          },
        });
        $scope.$apply(function () {
          $scope.showDialog = false;
        });
        alert("Successfully updated information!");
      } catch (error) {
        console.log(error);
        $scope.$apply(function () {
          $scope.showDialog = false;
        });
      }
    };
  });
