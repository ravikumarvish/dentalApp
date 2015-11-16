'use strict'

var registration = angular.module('dentalApp.registration',['ui.router']);

registration.config(function($stateProvider) {
	$stateProvider.state('registration', {
    url: '/registration',
    controller: 'registrationctrl',
    templateUrl: 'registration/registration.html'
  });

});

registration.controller('registrationctrl',function registrationctrl($scope) {

	$scope.registration = function() {
		console.log("hello registration page");
	}

});

