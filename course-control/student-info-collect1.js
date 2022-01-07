angular
  .module('v3App', ['ngMaterial'])
  .config(function ($sceProvider, $locationProvider) {
    $sceProvider.enabled(false);
    $locationProvider.html5Mode(true);
  })
  .controller('student-info-collect1', function ($scope, $http, $location) {
    const baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    //const baseUrl = 'http://localhost:3000/api/';
    const accountId = $location.search()['accountId'];
    const token = $location.search()["token"];

    $scope.form = {
      firstName: '',
      lastName: '',
      gender: 'male',
      dateOfBirth: '',
      email2: '',
      phone2: '',
      timeZone: '',
    };

    $scope.showDialog = false;

    $http({
      method: 'GET',
      url: `${baseUrl}Account/${accountId}`,
    })
      .then(function cb(res) {
        const account = res.data;
        $scope.form.firstName = account.firstName;
        $scope.form.lastName = account.lastName;
        $scope.form.gender = account.gender || '';
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

    $scope.setGender = (gender) => {
      $scope.form.gender = gender;
    };

    $scope.setTimeZone = (timeZone) => {
      $scope.form.timeZone = timeZone;
    };

    $scope.submit = async () => {
      if (!accountId || !token) {
        alert('No accountId or token found!');
        return;
      }
      $scope.showDialog = true;

      const data = {
        ...$scope.form,
      };

      try {
        await $http({
          method: 'PATCH',
          url: `${baseUrl}Account/${accountId}?access_token=${token}`,
          data: data,
        });
        await $http({
          method: 'POST',
          url: `${baseUrl}Account/notifyStudentInfoUpdate?access_token=${token}`,
          data: {
            email: 'contact@codingmindsacademy.com',
            content:
              'A student has updated his/her information:\n' +
              `First Name: ${data.firstName}\n` +
              `Last Name: ${data.lastName}\n` +
              `Gender: ${data.gender}\n` +
              `Date of Birth: ${new Date(
                data.dateOfBirth
              ).toLocaleDateString()}\n` +
              `Parent Email: ${data.email2}\n` +
              `Parent Phone: ${data.phone2}\n` +
              `Time Zone: ${data.timeZone} \n`,
          },
        });
        $scope.$apply(function () {
          $scope.showDialog = false;
        });
        alert('Successfully updated information!');
      } catch (error) {
        console.log(error);
        $scope.$apply(function () {
          $scope.showDialog = false;
        });
      }
    };
  });
