angular
  .module("v3App", ["ngMaterial"])
  .config(function ($sceProvider, $locationProvider) {
    $sceProvider.enabled(false);
    $locationProvider.html5Mode(true);
  })
  .controller("student-info-collect", function ($scope, $http, $location) {
    const baseUrl = "https://prod-sharemyworks-backend.herokuapp.com/api/";
    //const baseUrl = 'http://localhost:3000/api/';
    const accountId = $location.search()["accountId"];
    const token = $location.search()["token"];

    $scope.form = {
      firstName: "",
      lastName: "",
      gender: "male",
      grade: "",
      dateOfBirth: "",
      email2: "",
      phone2: "",
      timeZone: "",
      availableTime: [],
    };

    $http({
      method: 'GET',
      url: `${baseUrl}Account/${accountId}?access_token=${token}`,
    })
      .then(function cb(res) {
        const account = res.data;
        $scope.form.firstName = account.firstName;
        $scope.form.lastName = account.lastName;
        $scope.form.gender = account.gender || '';
        $scope.form.grade = account.grade;
        $scope.form.email2 = account.email2;
        $scope.form.phone2 = account.phone2;
        $scope.form.timeZone = account.timeZone;
        if (account.dateOfBirth) {
          $scope.form.dateOfBirth = new Date(account.dateOfBirth);
        }
      })
      .catch(function cb(error) {
        alert('Cannot get account information!');
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

    $scope.setGender = (gender) => {
      $scope.form.gender = gender;
    };

    $scope.setTimeZone = (timeZone) => {
      $scope.form.timeZone = timeZone;
    };

    $scope.submit = async () => {
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

      if (!accountId || !token) {
        $scope.$apply(function () {
          $scope.showDialog = false;
        });
        alert("No accountId or token found!");
        return;
      }

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
              `Gender: ${data.gender}\n` +
              `Grade: ${data.grade}\n` +
              `Date of Birth: ${new Date(
                data.dateOfBirth
              ).toLocaleDateString()}\n` +
              `Parent Email: ${data.email2}\n` +
              `Parent Phone: ${data.phone2}\n` +
              `Time Zone: ${data.timeZone} \n` +
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
