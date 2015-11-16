'use strict'

var dentalApp = angular.module('dentalApp',
	['dentalApp.home',
	 'dentalApp.registration','dentalApp.login','angular-storage'
	 ]);

dentalApp.config( function myAppConfig ($urlRouterProvider, $httpProvider) {
  $urlRouterProvider.otherwise('/');
  console.log("Inside App config");


})

dentalApp.controller( 'AppCtrl', function AppCtrl( $scope, $location ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
    if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | ngEurope Sample' ;
    }
  });
  
});

