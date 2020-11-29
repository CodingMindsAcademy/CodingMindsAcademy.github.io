
angular.module('v3App', ['ngMaterial'])
.config(function($sceProvider) {
  $sceProvider.enabled(false);    
})
.controller('signup_trialcourse_homepage', function($scope, $http) {

  $scope.form = {
    "email": '',
  }

  // $scope.loading = false;
  $scope.submit1 = function() {
    console.log($scope.form);
    let baseUrl = 'https://prod-sharemyworks-backend.herokuapp.com/api/';
    // let baseUrl = 'http://localhost:3000/api/'
    let accountData = {
      email: $scope.form.email
    }
    // $scope.loading = true;

    $http({
      method: 'POST',
      // url: 'http://localhost:3000/api/TrialClasses/trial?access_token=uglo6sQz1Ey5PIqDxnNlTxccIgc1KCWHpDytqF4TIwMEe6h2ZHTFAvucc1fNsRFO',
      url: baseUrl+ `TrialClasses/trial`,
      data: accountData
    }).then(function successCallback(response) {
        console.log(response);
        // $scope.loading = false;
        alert('Successfully registered fall classes and please check the confirmation email.')
      }).catch(function err(err) {
        console.log(err)
      }).catch(function registerError(err){
      console.log(err);
    });
    }
});
