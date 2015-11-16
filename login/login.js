var login = angular.module('dentalApp.login', [
  'ui.router',
  'angular-storage'
]);


login.config(function($stateProvider) {
  $stateProvider.state('login', {
    url: '/login',
    controller: 'LoginCtrl',
    templateUrl: 'login/login.html'
    });  
  
});

login.controller( 'LoginCtrl', function LoginController( $scope, $http, $state) {
  console.log("Login Controller....");
  $scope.user = {};

  $scope.login = function() {
    
    console.log("calling authentication service.....");
    var username = $scope.user.username;
    var password = $scope.user.password;

    console.log("Username : "+username + " password : "+password);

  }

});
