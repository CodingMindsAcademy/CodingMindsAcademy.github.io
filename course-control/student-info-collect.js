angular
  .module('v3App', ['ngMaterial'])
  .config(function ($sceProvider, $locationProvider) {
    $sceProvider.enabled(false);
    $locationProvider.html5Mode(true);
  })
  .controller('student-info-collect', function ($scope, $http, $location) {
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
    $scope.form = {
      firstName: '',
      lastName: '',
      gender: 'male',
      dateOfBirth: '',
      email2: '',
      phone2: '',
      timeZone: '',
      availableTime: availableTime,
    };

    $scope.weekdays = [
      {
        idx: 0,
        sequence: '08',
        day: '周一',
      },
      {
        idx: 1,
        sequence: '09',
        day: '周二',
      },
      {
        idx: 2,
        sequence: '10',
        day: '周三',
      },
      {
        idx: 3,
        sequence: '11',
        day: '周四',
      },
      {
        idx: 4,
        sequence: '12',
        day: '周五',
      },
      {
        idx: 5,
        sequence: '13',
        day: '周六',
      },
      {
        idx: 6,
        sequence: '14',
        day: '周日',
      },
    ];

    $scope.toggleAvailability = (day, time) => {
      $scope.form.availableTime[day][time].valid = !$scope.form.availableTime[
        day
      ][time].valid;
    };

    $scope.setGender = (gender) => {
      $scope.form.gender = gender;
    };

    $scope.setTimeZone = (timeZone) => {
      $scope.form.timeZone = timeZone;
    };

    $scope.submit = async () => {
      const availableTime = $scope.form.availableTime.map((day) => {
        return day
          .filter((timeSection) => timeSection.valid)
          .map((timeSection) => timeSection.time);
      });

      const data = {
        ...$scope.form,
        availableTime: JSON.stringify(availableTime),
      };

      const baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
      // let baseUrl = 'http://localhost:3000/api/';
      const accountId = $location.search()['accountId'];
      if (!accountId) {
        alert('No accountId found!');
        return;
      }

      try {
        const account = await $http({
          method: 'POST',
          url: `${baseUrl}Account/login`,
          data: {
            username: 'Admin',
            password: 'AdminPassword',
          },
        });
        const accessToken = account.data.id;
        await $http({
          method: 'PATCH',
          url: `${baseUrl}Account/${accountId}?access_token=${accessToken}`,
          data: data,
        });
        alert('Successfully updated information!');
      } catch (error) {
        console.log(error);
      }
    };
  });
